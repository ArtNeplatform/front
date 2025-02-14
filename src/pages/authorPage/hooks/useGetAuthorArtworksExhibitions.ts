import { useSuspenseQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { getAuthorArtworksExhibitionsQuery } from '@/constants/queryKeys';
import { getAuthorArtworksExhibitions } from '@/apis/authorPage/author';
import { TAuthorArtworksExhibitions } from '@/apis/authorPage/type';

/**
 * 작가의 작품, 경매 작품, 전시 정보를 가져오는 커스텀 훅
 * React Query의 useSuspenseQuery를 활용해 데이터를 가져옵니다.
 * 오류 발생 시 toast 알림을 통해 사용자에게 에러 메시지를 표시합니다.
 *
 * @returns {object} data, isLoading, error 상태 반환
 * @example const { data } = useGetAuthorArtworksExhibitions();
 * @author 노찬영
 **/
export const useGetAuthorArtworksExhibitions = () => {
  const { data, isLoading, error } =
    useSuspenseQuery<TAuthorArtworksExhibitions>({
      queryKey: getAuthorArtworksExhibitionsQuery().queryKey,
      queryFn: getAuthorArtworksExhibitions,
      staleTime: 1000 * 60 * 60, // 1시간
      gcTime: 1000 * 60 * 30, // 30분
    });

  if (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    const errorMessage =
      axiosError.response?.data?.message ||
      '작가 작품/전시 정보를 불러오는데 실패했습니다.';
    toast.error(errorMessage);
  }

  return { data, isLoading, error };
};
