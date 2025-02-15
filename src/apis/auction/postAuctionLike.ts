import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';

export const postAuctionLike = async (auctionId: number): Promise<null> => {
  const response = await instance.post<TGetResponse<null>>(
    `/api/auction/${auctionId}/like`
  );
  return response.data.result;
};
