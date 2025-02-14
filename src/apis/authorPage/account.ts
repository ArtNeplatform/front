import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TSaveBankInfo } from './type';

/**
 * 작가 계좌 정보 저장 API 호출 함수
 * @param bankInfo - 저장할 계좌 정보
 * @returns 저장된 계좌 정보(TSaveBankInfo)
 * @author 노찬영
 */
export const saveAuthorBankInfo = async (
  bankInfo: TSaveBankInfo
): Promise<TSaveBankInfo> => {
  const response = await instance.post<TGetResponse<TSaveBankInfo>>(
    '/api/author/bank',
    bankInfo
  );
  return response.data.result;
};
