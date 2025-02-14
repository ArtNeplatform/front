import { useSuspenseQuery } from '@tanstack/react-query';
import { getMainData } from '@/apis/main/main';
import { getMainDataQuery } from '@/constants/queryKeys';
import { TMainResult } from '@/apis/main/type';

/**
 * 메인 페이지 데이터를 가져오는 커스텀 훅
 * React Query의 useSuspenseQuery를 활용해 데이터를 가져옵니다.
 * 오류 발생 시 toast 알림을 통해 사용자에게 에러 메시지를 표시합니다.
 * @returns {object} mainData, isLoading, error 상태 반환
 * @author 김서윤
 **/
export const useGetMainData = () => {
  const {
    data: mainData,
    isLoading,
    error,
  } = useSuspenseQuery<TMainResult>({
    queryKey: getMainDataQuery().queryKey,
    queryFn: getMainData,
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 30, // 30분
  });

  return { mainData, isLoading, error };
};
