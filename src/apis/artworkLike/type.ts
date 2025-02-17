/**
 * 작풍 좋아요 API 타입 정의
 * @author 김서윤
 */

export interface TToggleLikeResult {
  message: string;
  newFavorite?: {
    created_at: string;
    id: number;
    user_id: number;
    artwork_id: string;
  };
}
