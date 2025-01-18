import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TGetArtistListRequestParams, TGetArtistListResponse } from './type';

export const getArtistList = async ({
  page,
  keyword,
}: TGetArtistListRequestParams): Promise<TGetArtistListResponse> => {
  const response = await instance.get<TGetResponse<TGetArtistListResponse>>(
    `/api/v1/artist/list?page=${page}&keyword=${keyword}`,
  );
  return response.data.response;
};
