import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';

export const postAuctionUnlike = async (auctionId: number): Promise<null> => {
  const response = await instance.post<TGetResponse<null>>(
    `/api/auction/${auctionId}/unlike`
  );
  return response.data.result;
};
