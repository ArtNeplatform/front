import { TGetAvailableArtworksResponse } from '@/apis/auctionRegister/type';
import { getAvailableArtworksQuery } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { handleError } from '@/utils/handleError';
/**
 * 경매 가능 작품 조회 훅
 * @author 홍규진
 * */
export const useGetAvailableArtwork = () => {
  const {
    data: availableArtworks,
    isLoading,
    refetch,
    error,
  } = useSuspenseQuery<TGetAvailableArtworksResponse[]>({
    queryKey: getAvailableArtworksQuery().queryKey,
    queryFn: getAvailableArtworksQuery().queryFn,
    staleTime: 1000 * 60 * 60 * 2, // 2시간
    gcTime: 1000 * 60 * 60 * 1.5, // 1.5시간
  });
  if (error) {
    handleError(error);
  }
  return {
    availableArtworks,
    isLoading,
    refetch,
    error,
  };
};
