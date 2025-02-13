import { instance } from '@/apis/axios';
import { TGetAuthorListApiResponse } from './type';
import { TGetResponse } from '@/apis/type';

export const getAuthorLists = async ({
  sort,
  limit,
  page,
}: {
  sort: string;
  limit: number;
  page: number;
}): Promise<TGetAuthorListApiResponse> => {
  const response = await instance.get<
    TGetResponse<TGetAuthorListApiResponse>
  >(`/api/author/list?sort=${sort || 'title'}&limit=${limit}&page=${page}`);
  console.log(response.data);
  return response.data.result;
};
