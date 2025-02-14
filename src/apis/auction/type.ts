export type TGetAuctionListResponse = {
  auction_id: number;
  status: string;
  thumbnail_image_url: string;
  author_name: string;
  title: string;
  height: string;
  width: string;
  size: string;
  start_price?: number; // 경매 완료된 항목에는 없음
  current_price?: number; // 경매 진행 중인 항목에만 있음
  final_price?: number; // 경매 완료된 항목에만 있음
  is_liked: boolean;
};

export type TGetAuctionListRequestParams = {
  sort?: string;
};

export type TGetAuctionDetailResponse = {
  auction_id: number;
  start_price: string | null;
  current_price: string | null;
  final_price: string | null;
  remaining_time: string;
  artwork: {
    author_name: string;
    title: string;
    year: string;
    material: string;
    height: number;
    width: number;
    size: string;
    number: string;
    description: string;
    thumbnail_image_url: string;
    images: string[];
  };
};
