import { instance } from '@/apis/axios';
import { TGetResponse } from '../type';
import { TGetExhibitionsResponse } from './type';

export const getExhibitions = async (): Promise<TGetExhibitionsResponse> => {
  const response = await instance.get<TGetResponse<TGetExhibitionsResponse>>(
    `/api/exhibitions`
  );
  console.log(response.data);
  return response.data.result;
};
