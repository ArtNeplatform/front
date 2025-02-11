import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TPurchasedArtworkResponse } from './type';

/**
 * 구매한 작품 리스트를 조회하는 API 호출 함수
 * @returns 구매한 작품 리스트(TPurchasedArtworkResponse[])
 * @author 노찬영
 **/

export const getPurchasedArtworks =
  async (): Promise<TPurchasedArtworkResponse> => {
    const response = await instance.get<
      TGetResponse<TPurchasedArtworkResponse>
    >('/api/user/purchased-artworks');
    return response.data.result;
  };
