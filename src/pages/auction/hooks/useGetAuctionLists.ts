import { getAuctionListQuery } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { TGetAuctionListResponse } from '@/apis/auction/type';

/**
 * 경매 리스트를 가져오는 커스텀 훅
 * React Query의 useSuspenseQuery를 활용해 데이터를 가져오고, 오류 발생 시 toast 알림을 띄움
 *
 * @param { 'title' | 'popular' | 'latest' } sort - 정렬 기준
 * @returns {object} data, error 상태 반환
 * @example const { data } = useGetAuctionLists('title');
 * @author 이하늘
 **/
export const useGetAuctionLists = (sort: string) => {
  const { data, isLoading, error } = useSuspenseQuery<
    TGetAuctionListResponse[]
  >({
    queryKey: getAuctionListQuery(sort).queryKey,
    queryFn: getAuctionListQuery(sort).queryFn,
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 30, // 30분
  });

  if (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    const errorMessage =
      axiosError.response?.data?.message ||
      '경매 목록을 불러오는데 실패했습니다.';
    toast.error(errorMessage);
  }

  return { data, isLoading, error };
};
