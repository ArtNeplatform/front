import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';

/**
 * 카카오페이 결제 승인 API 호출
 * @param paymentId - 결제 ID
 * @param pgToken - 카카오페이 승인 토큰
 * @returns 결제된 paymentId 반환
 * @author 노찬영
 */
export const approveKakaoPay = async (
  paymentId: number,
  pgToken: string
): Promise<number> => {
  const response = await instance.post<TGetResponse<number>>(
    `/api/payment/kakaopay/approve/${paymentId}`,
    { pg_token: pgToken }
  );

  return response.data.result;
};
