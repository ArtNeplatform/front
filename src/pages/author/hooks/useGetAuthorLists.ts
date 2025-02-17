import { getAuthorListQuery } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { TGetAuthorListApiResponse } from '@/apis/author/type';
import { handleError } from '@/utils/handleError';
/**
 * 작가 리스트를 가져오는 커스텀 훅
 * React Query의 useSuspenseQuery를 활용해 데이터를 가져오고, 오류 발생 시 toast 알림을 띄움
 *
 * @param {string} sort - 정렬 기준 ('popularity' | 'title' 등)
 * @param {number} page - 페이지 번호
 * @param {number} limit - 페이지당 항목 수
 * @returns {object} data, isLoading, error 상태 반환
 * @example const { data } = useGetAuthorLists('popularity', 1, 5);
 * @author 이하늘, 홍규진
 **/
export const useGetAuthorLists = (
  sort: string,
  page: number,
  limit: number
) => {
  const { data, isLoading, error } =
    useSuspenseQuery<TGetAuthorListApiResponse>({
      queryKey: getAuthorListQuery(sort, page, limit).queryKey,
      queryFn: getAuthorListQuery(sort, page, limit).queryFn,
      staleTime: 1000 * 60 * 60, // 1시간
      gcTime: 1000 * 60 * 30, // 30분
    });

  if (error) {
    handleError(error);
  }

  return { data, isLoading, error };
};
