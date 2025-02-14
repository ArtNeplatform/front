import { useSuspenseQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { getAuthorProfile } from '@/apis/authorPage/author';
import { getAuthorProfileQuery } from '@/constants/queryKeys';
import { TAuthorProfile, AuthorProfileType } from '@/apis/authorPage/type';

/**
 * 작가 프로필 조회를 위한 React Query 훅
 * @param type - 조회할 프로필 타입 ('default', 'intro', 'info')
 * @returns 작가 프로필 데이터와 쿼리 상태 반환
 * @example
 * const { data, isLoading, error } = useGetAuthorProfile('intro');
 * @author 노찬영
 */
export const useGetAuthorProfile = (type: AuthorProfileType) => {
  const { data, isLoading, error } = useSuspenseQuery<
    TAuthorProfile,
    AxiosError
  >({
    queryKey: getAuthorProfileQuery(type).queryKey,
    queryFn: async () => {
      const response = await getAuthorProfile(type);

      // result가 undefined인 경우 예외 처리
      if (!response) {
        throw new Error('작가 프로필 데이터를 불러올 수 없습니다.');
      }

      return response;
    },
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 30, // 30분
    retry: 1, // 실패 시 1회 재시도
  });

  if (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    const errorMessage =
      axiosError.response?.data?.message ||
      '작가 프로필 정보를 불러오는데 실패했습니다.';
    toast.error(errorMessage);
  }

  return { data, isLoading, error };
};
