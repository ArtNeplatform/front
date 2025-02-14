import { useSuspenseQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { getPurchasedArtworks } from '@/apis/mypage-buyer/artWork';
import { getPurchasedArtworksQuery } from '@/constants/queryKeys';
import { TPurchasedArtwork } from '@/apis/mypage-buyer/type';

/**
 * 구매한 작품 리스트를 가져오는 커스텀 훅
 * React Query의 useSuspenseQuery를 활용해 데이터를 가져옵니다.
 * 오류 발생 시 toast 알림을 통해 사용자에게 에러 메시지를 표시합니다.
 * @returns {object} purchasedArtworksData, isLoading, error 상태 반환
 * @author 노찬영
 **/
export const useGetPurchasedArtworks = () => {
  const {
    data: purchasedArtworksData,
    isLoading,
    error,
  } = useSuspenseQuery<TPurchasedArtwork>({
    queryKey: getPurchasedArtworksQuery().queryKey,
    queryFn: getPurchasedArtworks,
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 30, // 30분
  });

  if (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    const errorMessage =
      axiosError.response?.data?.message ||
      '구매한 작품 리스트를 불러오는데 실패했습니다.';
    toast.error(errorMessage);
  }

  return { purchasedArtworksData, isLoading, error };
};