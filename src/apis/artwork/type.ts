/**
 * 작품 리스트 API 타입 정의
 * @author 김서윤
 */

export interface TArtWorkResult {
  total: number;
  page: number;
  pageSize: number;
  artworks: TArtwork[];
}

export type TArtwork = {
  id: number;
  title: string;
  thumbnail_image_url: string;
  width: string;
  height: string;
  size: string;
  like_count: number;
  created_at: string;
  author_name: string;
  is_liked: boolean;
};
