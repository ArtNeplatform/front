import { getAuctionDetailQuery } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { TGetAuctionDetailResponse } from '@/apis/auction/type';
import { handleError } from '@/utils/handleError';
/**
 * 경매 상세 정보를 가져오는 커스텀 훅
 * React Query의 useSuspenseQuery를 활용해 데이터를 가져오고, 오류 발생 시 toast 알림을 띄움
 *
 * @param {number} auctionId - 경매 ID
 * @returns {object} data, error 상태 반환
 * @example const { data } = useGetAuctionDetail(145);
 * @author 이하늘, 홍규진
 **/
export const useGetAuctionDetail = (auctionId: number) => {
  const { data, isLoading, error } =
    useSuspenseQuery<TGetAuctionDetailResponse>({
      queryKey: getAuctionDetailQuery(auctionId).queryKey,
      queryFn: getAuctionDetailQuery(auctionId).queryFn,
      staleTime: 1000 * 60 * 60, // 1시간
      gcTime: 1000 * 60 * 30, // 30분
    });

  if (error) {
    handleError(error);
  }

  return { data, isLoading, error };
};
