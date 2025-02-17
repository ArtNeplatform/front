import { instance } from '@/apis/axios';
import { TToggleLikeResult } from './type';
import { TGetResponse } from '@/apis/type';

/**
 * 작품 좋아요 토글 API 호출
 * @param artworkId 작품 ID
 * @returns 좋아요 추가 또는 취소 결과
 * @author 김서윤
 */
export const toggleArtworkLike = async (
  artworkId: number
): Promise<TToggleLikeResult> => {
  const response = await instance.post<TGetResponse<TToggleLikeResult>>(
    `/api/artworks/${artworkId}/like`
  );
  return response.data.result;
};
