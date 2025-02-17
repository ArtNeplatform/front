import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TAuctionRegisterFormData } from '@/apis/auctionRegister/type';
import { toast } from 'sonner';
import { useState } from 'react';
import { postAuctionRegisterMutation } from '@/constants/mutationKey';
import { useNavigate } from 'react-router-dom';
const useAuctionRegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<TAuctionRegisterFormData>({
    artwork_id: 0,
    start_price: 0,
  });
  const queryClient = useQueryClient();

  /**
   * 경매 등록 뮤테이션
   * @author 홍규진
   */
  const mutation = useMutation({
    mutationKey: postAuctionRegisterMutation().mutationKey,
    mutationFn: (data: TAuctionRegisterFormData) =>
      postAuctionRegisterMutation().mutationFn(data),
    onSuccess: () => {
      toast.success('경매 등록이 성공적으로 완료되었습니다.');
      queryClient.invalidateQueries({
        queryKey: postAuctionRegisterMutation().successMutationKey,
      });
      navigate('/auction');
    },
    onError: (error: Error) => {
      toast.error(`경매 등록 실패: ${error.message}`);
    },
  });

  /**
   * 경매 등록 유효성 검사 함수
   * @param data 경매 등록 폼 데이터
   * @author 홍규진
   */
  const validateForm = (data: TAuctionRegisterFormData) => {
    if (data.artwork_id === 0) {
      toast.error('작품을 선택해주세요.');
      return false;
    }
    if (data.start_price === 0) {
      toast.error('시작 금액을 입력해주세요. 0원은 입력할 수 없습니다.');
      return false;
    }
    return true;
  };

  /**
   * 경매 등록 버튼 클릭 함수
   * @param e 폼 제출 이벤트
   * @author 홍규진
   */
  const handleSubmit = async () => {
    if (validateForm(formData)) {
      await mutation.mutateAsync(formData);
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
  };
};

export default useAuctionRegisterForm;
