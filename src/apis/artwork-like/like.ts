import { instance } from '@/apis/axios';
import { TToggleLikeResponse } from './type';

/**
 * 작품 좋아요 토글 API 호출
 * @param artworkId 작품 ID
 * @returns 좋아요 추가 또는 취소 결과
 * @author 김서윤
 */
export const toggleArtworkLike = async (
  artworkId: number
): Promise<TToggleLikeResponse> => {
  try {
    const response = await instance.post<TToggleLikeResponse>(
      `/api/artworks/${artworkId}/like`
    );
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('좋아요 토글 실패:', error.message);
    throw error;
  }
};
