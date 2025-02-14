import { useSuspenseQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { getUserMypage } from '@/apis/myPage/myPage';
import { getUserMypageQueryKey } from '@/constants/queryKeys';
import { TUserMypageResponse } from '@/apis/myPage/type';

/**
 * 특정 사용자의 마이페이지 정보를 가져오는 커스텀 훅
 * React Query의 useSuspenseQuery를 활용해 데이터를 가져옵니다.
 * 오류 발생 시 toast 알림을 통해 사용자에게 에러 메시지를 표시합니다.
 * @returns {object} userMypageData, isLoading, error 상태 반환
 * @author 노찬영
 */

export const useGetUserMypage = () => {
  const {
    data: userMypageData,
    isLoading,
    error,
  } = useSuspenseQuery<TUserMypageResponse>({
    queryKey: getUserMypageQueryKey(),
    queryFn: () => getUserMypage(),
    staleTime: 1000 * 60 * 30, // 30분
    gcTime: 1000 * 60 * 60, // 1시간
  });

  if (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    const errorMessage =
      axiosError.response?.data?.message ||
      '마이페이지 정보를 불러오는데 실패했습니다.';
    toast.error(errorMessage);
  }

  return { userMypageData, isLoading, error };
};
