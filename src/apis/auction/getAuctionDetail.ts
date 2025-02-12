import { instance } from '../axios';
import { TGetResponse } from '../type';
import { TGetAuctionDetailResponse } from './type';

export const getAuctionDetail = async (
  auctionId: number
): Promise<TGetAuctionDetailResponse> => {
  const response = await instance.get<TGetResponse<TGetAuctionDetailResponse>>(
    `/api/auction/${auctionId}`
  );
  console.log(response.data);
  return response.data.result;
};
