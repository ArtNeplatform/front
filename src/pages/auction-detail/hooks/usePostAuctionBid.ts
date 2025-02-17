import {
  TAuctionBidFormData,
  TPostAuctionBidResponse,
} from '@/apis/auction/type';
import { postAuctionBidMutation } from '@/constants/mutationKey';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'sonner';

//TODO-[규진] 폼데이터 및 뮤테이션 관심사 분리 필요
export const usePostAuctionBid = () => {
  const [formData, setFormData] = useState<TAuctionBidFormData>({
    auction_id: null,
    bid_price: null,
  });
  const queryClient = useQueryClient();

  /**
   * 입찰 뮤테이션
   */
  const mutation = useMutation({
    mutationKey: postAuctionBidMutation().mutationKey, // 고유 키
    mutationFn: (data: TAuctionBidFormData) =>
      postAuctionBidMutation().mutationFn(data), // API 호출
    onSuccess: (data: TPostAuctionBidResponse) => {
      toast.success(`입찰 성공: ${data.message}`);
      queryClient.invalidateQueries({
        queryKey: postAuctionBidMutation().mutationKey,
      });
    },
    onError: (error: Error) => {
      toast.error(`입찰 실패: ${error.message}`);
    },
  });

  /**
   * 경매 입찰 유효성 검사 함수
   * @param data 경매 입찰 폼 데이터
   * @author 이하늘
   */
  const validateForm = (data: TAuctionBidFormData) => {
    console.log(data);
    if (data.auction_id === null) {
      toast.error('경매를 선택해주세요.');
      return false;
    }
    if (data.bid_price === null) {
      toast.error('입찰 금액을 입력해주세요.');
      return false;
    }
    return true;
  };
  /**
   * 경매 입찰 버튼 클릭 함수
   * @param e 폼 제출 이벤트
   * @author 이하늘
   */
  const handleSubmit = async (data: TAuctionBidFormData) => {
    if (validateForm(data)) {
      try {
        await mutation.mutateAsync(data); // 입찰 요청
        toast.success('입찰 성공');
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('유효성 검사 실패');
    }
  };

  return {
    formData,
    setFormData,
    handleSubmit,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
};
