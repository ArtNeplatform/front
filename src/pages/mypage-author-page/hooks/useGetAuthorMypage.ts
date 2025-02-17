import { useSuspenseQuery } from '@tanstack/react-query';
import { TArtistMypage } from '@/apis/mypageAuthor/myPage/type';
import { getAuthorMypageQuery } from '@/constants/queryKeys';
import { handleError } from '@/utils/handleError';
/**
 * 작가의 마이페이지 정보를 가져오는 커스텀 훅
 * React Query의 useSuspenseQuery를 활용해 데이터를 가져옵니다.
 * 오류 발생 시 toast 알림을 통해 사용자에게 에러 메시지를 표시합니다.
 * @returns {object} userMypageData, isLoading, error 상태 반환
 * @author 노찬영, 홍규진
 */

export const useGetAuthorMypage = () => {
  const {
    data: userMypageData,
    isLoading,
    error,
  } = useSuspenseQuery<TArtistMypage>({
    queryKey: getAuthorMypageQuery().queryKey,
    queryFn: getAuthorMypageQuery().queryFn,
    staleTime: 1000 * 60 * 30, // 30분
    gcTime: 1000 * 60 * 60, // 1시간
  });

  if (error) {
    handleError(error);
  }

  return { userMypageData, isLoading, error };
};
