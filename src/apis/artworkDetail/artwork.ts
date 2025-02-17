import { instance } from '@/apis/axios';
import { TArtworkDetailResult } from './type';
import { TGetResponse } from '@apis/type';

/**
 * 특정 작품의 상세 정보를 가져오는 API 함수
 * @param artworkId 작품 ID
 * @returns 작품 상세 정보
 * @author 김서윤
 */

export const getArtworkDetail = async (
  artworkId: number
): Promise<TArtworkDetailResult> => {
  const response = await instance.get<TGetResponse<TArtworkDetailResult>>(
    `/api/artworks/${artworkId}`
  );
  return response.data.result;
};
