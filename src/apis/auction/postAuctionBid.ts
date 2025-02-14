import { instance } from '@/apis/axios';
import { TAuctionBidFormData, TPostAuctionBidResponse } from './type';

export const postAuctionBid = async (
  data: TAuctionBidFormData
): Promise<TPostAuctionBidResponse> => {
  const response = await instance.post<TPostAuctionBidResponse>(
    '/api/auction/bid',
    data
  );
  console.log('입찰 응답:', response.data);
  return response.data;
};
