import { instance } from '@/apis/axios';
import { TGetAuthorDetailApiResponse } from './type';
import { TGetResponse } from '@/apis/type';

export const getAuthorDetail = async ({
  authorId,
  artworkPage,
  artworkLimit,
  exhibitionPage,
  exhibitionLimit,
}: {
  authorId: number;
  artworkPage?: number;
  artworkLimit?: number;
  exhibitionPage?: number;
  exhibitionLimit?: number;
}): Promise<TGetAuthorDetailApiResponse> => {
  const response = await instance.get<
    TGetResponse<TGetAuthorDetailApiResponse>
  >(`/api/author/${authorId}`, {
    params: {
      artwork_page: artworkPage,
      artwork_limit: artworkLimit,
      exhibition_page: exhibitionPage,
      exhibition_limit: exhibitionLimit,
    },
  });
  console.log(response.data);
  return response.data.result;
};
