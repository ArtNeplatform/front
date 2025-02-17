import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  requestKakaoPayMutation,
  approveKakaoPayMutation,
} from '@/constants/mutationKey';
import { toast } from 'sonner';
/**
 * 카카오페이 결제 Hook
 * @returns 카카오페이 결제 관련 함수 및 상태값
 * @author 노찬영, 홍규진
 */

export const useKakaoPay = () => {
  const queryClient = useQueryClient();
  // 결제 준비 (결제 URL 요청)
  const initiatePaymentMutation = useMutation({
    mutationKey: [...requestKakaoPayMutation().mutationKey],
    mutationFn: (paymentId: number) =>
      requestKakaoPayMutation().mutationFn(paymentId),
    onSuccess: (result) => {
      toast.success('결제 준비 성공!');
      window.location.href = result.next_redirect_pc_url; // PC 결제창으로 이동
      queryClient.invalidateQueries({
        queryKey: requestKakaoPayMutation().successMutationKey,
      });
    },
    onError: (error) => {
      toast.error(`결제 준비에 실패했습니다. ${error.message}`);
    },
  });

  // 결제 승인 (pgToken을 받아 결제 승인 요청)
  const confirmPaymentMutation = useMutation({
    mutationKey: approveKakaoPayMutation().mutationKey,
    mutationFn: ({
      paymentId,
      pgToken,
    }: {
      paymentId: number;
      pgToken: string;
    }) => approveKakaoPayMutation().mutationFn(paymentId, pgToken),
    onSuccess: (approvedPaymentId) => {
      toast.success(
        `결제가 성공적으로 완료되었습니다. Payment ID: ${approvedPaymentId}`
      );
      queryClient.invalidateQueries({
        queryKey: approveKakaoPayMutation().successMutationKey,
      });
    },
    onError: (error) => {
      toast.error(`결제 승인에 실패했습니다. ${error.message}`);
    },
  });

  return {
    initiatePayment: initiatePaymentMutation.mutate,
    confirmPayment: confirmPaymentMutation.mutate,
  };
};
