import { useSuspenseQuery } from '@tanstack/react-query';
import { getAuthorProfileQuery } from '@/constants/queryKeys';
import { TAuthorProfile, AuthorProfileType } from '@/apis/mypageAuthor/type';
import { handleError } from '@/utils/handleError';
/**
 * 작가 프로필 조회를 위한 React Query 훅
 * @param type - 조회할 프로필 타입 ('default', 'intro', 'info')
 * @returns 작가 프로필 데이터와 쿼리 상태 반환
 * @example
 * const { data, isLoading, error } = useGetAuthorProfile('intro');
 * @author 노찬영, 홍규진
 */
export const useGetAuthorProfile = (type: AuthorProfileType) => {
  const { data, isLoading, error } = useSuspenseQuery<TAuthorProfile>({
    queryKey: getAuthorProfileQuery(type).queryKey,
    queryFn: getAuthorProfileQuery(type).queryFn,
    staleTime: 1000 * 60 * 30, // 30분
    gcTime: 1000 * 60 * 60, // 1시간
    retry: 1, // 실패 시 1회 재시도
  });

  if (error) {
    handleError(error);
  }

  return { data, isLoading, error };
};
