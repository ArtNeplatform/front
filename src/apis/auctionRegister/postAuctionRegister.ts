import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TAuctionRegisterFormData } from './type';

/**
 * 경매 등록 API 함수
 * @param data 경매 등록 폼 데이터
 * @returns 등록 결과를 포함한 응답(TGetResponse<void>)
 * @author 홍규진
 */
export const postAuctionRegister = async (
  data: TAuctionRegisterFormData
): Promise<TGetResponse<void>> => {
  const response = await instance.post('/api/auction/register', data);
  return response.data;
};
