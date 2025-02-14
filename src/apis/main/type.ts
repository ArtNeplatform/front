/**
 * 메인 페이지 API 타입 정의
 * @author 김서윤
 */

export type TMainResult = {
  artworks: TArtwork[];
  ongoingAuctions: TAuction[];
  authors: TAuthor[];
  ongoingExhibitions: TExhibition[];
};

export type TArtwork = {
  artwork_id: number;
  author_name: string;
  thumbnail_image_url: string;
  title: string;
  height: number;
  width: number;
  size: string;
  is_like: boolean;
};

export type TAuction = {
  auction_id: number;
  author_name: string;
  thumbnail_image_url: string;
  title: string;
  height: number;
  width: number;
  size: string;
  start_price: number;
  current_price: number;
  is_like: boolean;
};

export type TAuthor = {
  author_id: number;
  author_name: string;
  author_image_url: string;
  artwork_count: number;
  exhibition_count: number;
  artwork_image_url: string | null;
};

export type TExhibition = {
  exhibition_id: number;
  image_url: string;
  title: string;
};
