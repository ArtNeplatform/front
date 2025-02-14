import { instance } from '@/apis/axios';
import { TGetResponse } from '../type';
import { TExhibition } from './type';

export const getExhibitions = async (sort: string): Promise<TExhibition[]> => {
  const response = await instance.get<TGetResponse<TExhibition[]>>(
    `/api/exhibitions?sort=${sort}`
  );
  console.log(response.data);
  return response.data.result;
};
