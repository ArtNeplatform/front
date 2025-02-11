import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TPurchasedArtworkResponse } from './type';

/**
 * 로그인한 사용자의 구매 작품을 조회하는 API
 * @returns 구매한 작품 리스트(TPurchasedArtworkResponse[])
 * @author 노찬영
 **/

export const getPurchasedArtworks = async (): Promise<
  TPurchasedArtworkResponse[]
> => {
  try {
    const response = await instance.get<
      TGetResponse<TPurchasedArtworkResponse[]>
    >('/api/user/purchased-artworks');
    console.log(response.data);
    return response.data.result;
  } catch (error) {
    console.error('구매 작품 조회 오류:', error);
    throw error;
  }
};
