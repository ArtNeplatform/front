import { instance } from '@/apis/axios';
import { TPurchasedArtwork } from './type';
import { TGetResponse } from '../type';

/**
 * 구매한 작품 리스트를 조회하는 API 호출 함수
 * @returns 구매한 작품 리스트(TPurchasedArtwork)
 * @author 노찬영
 **/
export const getPurchasedArtworks = async (): Promise<TPurchasedArtwork> => {
  const response = await instance.get<TGetResponse<TPurchasedArtwork>>(
    '/api/user/purchased-artworks'
  );
  return response.data.result;
};
