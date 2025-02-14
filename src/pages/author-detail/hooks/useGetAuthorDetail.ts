import { getAuthorDetailQuery } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { TGetAuthorDetailApiResponse } from '@/apis/author/type';

/**
 * 작가 상세 정보를 가져오는 커스텀 훅
 * React Query의 useSuspenseQuery를 활용해 데이터를 가져오고, 오류 발생 시 toast 알림을 띄움
 *
 * @param {number} authorId - 작가 ID
 * @param {number} artworkPage - 작품 페이지 (기본값: 1)
 * @param {number} artworkLimit - 작품 한 페이지에 표시할 개수 (기본값: 10)
 * @param {number} exhibitionPage - 전시 페이지 (기본값: 1)
 * @param {number} exhibitionLimit - 전시 한 페이지에 표시할 개수 (기본값: 4)
 * @returns {object} data, isLoading, error 상태 반환
 * @example const { data } = useGetAuthorDetail(1);
 * @author 이하늘
 **/
export const useGetAuthorDetail = ({
  authorId,
  artworkPage = 1,
  artworkLimit = 10,
  exhibitionPage = 1,
  exhibitionLimit = 4,
}: {
  authorId: number;
  artworkPage?: number;
  artworkLimit?: number;
  exhibitionPage?: number;
  exhibitionLimit?: number;
}) => {
  const { data, isLoading, error } =
    useSuspenseQuery<TGetAuthorDetailApiResponse>({
      queryKey: getAuthorDetailQuery(
        authorId,
        artworkPage,
        artworkLimit,
        exhibitionPage,
        exhibitionLimit
      ).queryKey,
      queryFn: getAuthorDetailQuery(
        authorId,
        artworkPage,
        artworkLimit,
        exhibitionPage,
        exhibitionLimit
      ).queryFn,
      staleTime: 1000 * 60 * 60, // 1시간
      gcTime: 1000 * 60 * 30, // 30분
    });
  if (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    const errorMessage =
      axiosError.response?.data?.message ||
      '작가 정보를 불러오는데 실패했습니다.';
    toast.error(errorMessage);
  }

  return { data, isLoading, error };
};
