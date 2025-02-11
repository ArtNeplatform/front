import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TGetAvailableArtworksResponse } from './type';

export const getAvailableArtworks = async (): Promise<
  TGetAvailableArtworksResponse[]
> => {
  const response = await instance.get<
    TGetResponse<TGetAvailableArtworksResponse[]>
  >(`/api/auction/available-artwork`);
  console.log(response.data);
  return response.data.result;
};
