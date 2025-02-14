import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TKakaoPay } from './type';

/**
 * 카카오페이 결제 준비 API 호출
 * @param paymentId - 결제 ID
 * @returns 결제 페이지 리디렉트 URL 정보
 * @author 노찬영
 */
export const requestKakaoPay = async (
  paymentId: number
): Promise<TKakaoPay> => {
  const response = await instance.post<TGetResponse<TKakaoPay>>(
    `/api/payment/kakaopay/ready/${paymentId}`,
    {
      approval_url: `${window.location.origin}/payment/success`,
      fail_url: `${window.location.origin}/payment/fail`,
      cancel_url: `${window.location.origin}/payment/cancel`,
    }
  );
  return response.data.result;
};
