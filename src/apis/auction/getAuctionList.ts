import { instance } from '@/apis/axios';
import { TGetAuctionListResponse, TGetAuctionListRequestParams } from './type';
import { TGetResponse } from '@/apis/type';

export const getAuctionLists = async ({
  sort,
}: TGetAuctionListRequestParams): Promise<TGetAuctionListResponse[]> => {
  const response = await instance.get<TGetResponse<TGetAuctionListResponse[]>>(
    `/api/auction?sort=${sort || 'title'}`
  );
  console.log(response.data);
  return response.data.result;
};
