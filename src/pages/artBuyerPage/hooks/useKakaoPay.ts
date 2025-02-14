import { useMutation } from '@tanstack/react-query';
import { requestKakaoPay } from '@/apis/kakaoPay/paymentPreparation';
import { approveKakaoPay } from '@/apis/kakaoPay/paymentAuthorization';

/**
 * 카카오페이 결제 Hook
 * @returns 카카오페이 결제 관련 함수 및 상태값
 * @author 노찬영
 */

export const useKakaoPay = () => {
  // 결제 준비 (결제 URL 요청)
  const initiatePaymentMutation = useMutation({
    mutationKey: ['requestKakaoPay'],
    mutationFn: requestKakaoPay,
    onSuccess: (result) => {
      console.log('결제 준비 성공:', result);
      window.location.href = result.next_redirect_pc_url; // PC 결제창으로 이동
    },
    onError: (error) => {
      console.error('결제 준비 실패:', error);
    },
  });

  // 결제 승인 (pgToken을 받아 결제 승인 요청)
  const confirmPaymentMutation = useMutation({
    mutationKey: ['approveKakaoPay'],
    mutationFn: ({
      paymentId,
      pgToken,
    }: {
      paymentId: number;
      pgToken: string;
    }) => approveKakaoPay(paymentId, pgToken),
    onSuccess: (approvedPaymentId) => {
      console.log(`결제 승인 완료! Payment ID: ${approvedPaymentId}`);
      alert(
        `결제가 성공적으로 완료되었습니다. Payment ID: ${approvedPaymentId}`
      );
    },
    onError: (error) => {
      console.error('결제 승인 실패:', error);
      alert('결제 승인 중 오류가 발생했습니다.');
    },
  });

  return {
    initiatePayment: initiatePaymentMutation.mutate,
    confirmPayment: confirmPaymentMutation.mutate,
  };
};
