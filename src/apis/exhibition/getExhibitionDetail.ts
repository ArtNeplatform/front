import { instance } from '@/apis/axios';
import { TGetResponse } from '../type';
import { TGetExhibitionDetailResponse } from './type';

export const getExhibitionDetail = async (
  exhibitionId: number
): Promise<TGetExhibitionDetailResponse> => {
  const response = await instance.get<
    TGetResponse<TGetExhibitionDetailResponse>
  >(`/api/exhibitions/${exhibitionId}`);
  console.log(response.data);
  return response.data.result;
};
