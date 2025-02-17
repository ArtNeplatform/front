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
  const formData = new FormData();
  formData.append('artwork_id', data.artwork_id.toString());
  formData.append('start_price', data.start_price.toString());

  const response = await instance.post('/api/auction/register', formData);
  return response.data;
};
