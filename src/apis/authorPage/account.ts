import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TSaveBankInfo } from './type';

/**
 * 작가 계좌 정보 저장 API 호출 함수
 * @param bankInfo - 저장할 계좌 정보
 * @returns API 응답(TGetResponse)
 * @author 노찬영
 */
export const saveAuthorBankInfo = async (
  bankInfo: TSaveBankInfo
): Promise<TGetResponse<TSaveBankInfo>> => {
  try {
    const response = await instance.post<TGetResponse<TSaveBankInfo>>(
      `/api/author/bank`,
      bankInfo
    );
    return response.data;
  } catch (error) {
    console.error('계좌 정보 저장 실패:', error);
    throw error;
  }
};
