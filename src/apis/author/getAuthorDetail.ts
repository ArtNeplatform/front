import { instance } from '@/apis/axios';
import { TGetAuthorDetailApiResponse } from './type';
import { TGetResponse } from '@/apis/type';

export const getAuthorDetail = async ({
  authorId,
}: {
  authorId: number;
}): Promise<TGetAuthorDetailApiResponse> => {
  const response = await instance.get<
    TGetResponse<TGetAuthorDetailApiResponse>
  >(`/api/author/${authorId}`);
  console.log(response.data);
  return response.data.result;
};
