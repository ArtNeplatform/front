/**
 * 경매 가능 작품 조회 성공
 * @author 홍규진
 */
export type TGetAvailableArtworksResponse = {
  artwork_id: number;
  title: string;
  thumbnail_image_url: string;
};

/**
 * 경매 등록 폼 데이터
 * @author 홍규진
 */
export type TAuctionRegisterFormData = {
  artwork_id: number | null;
  start_price: number | null;
};
