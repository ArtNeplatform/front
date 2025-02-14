/**
 * 작품 구매자 마이페이지 조회 API 타입 정의
 * @author 노찬영
 */

// 작품 구매자 타입

export type TBuyerMypage = {
  buyer: {
    name: string;
    profile_image_url: string;
  };
  paymentCounts: TPaymentCount[];
  auctions: TAuction[];
  payments: TPayment[];
  myCollection: {
    artworks: TArtwork[];
    exhibitions: TExhibition[];
  };
};

export type TPaymentCount = {
  pending: number;
  completed: number;
  received: number;
};

export type TAuction = {
  auction_id: number;
  bid_date: string;
  bid_price: number;
  status: string;
  auction: {
    artwork_id: number;
    artwork: {
      title: string;
      author: {
        author_name: string;
        author_image_url: string;
      };
    };
  };
};

export type TPayment = {
  id: number;
  auction_id: number;
  payment_price: number;
  created_at: string;
  payment_status: string;
  auction: {
    artwork_id: number;
    artwork: {
      title: string;
      author: {
        author_name: string;
        author_image_url: string;
      };
    };
  };
};

export type TArtwork = {
  id: number;
  title: string;
  thumbnail_image_url: string;
  width?: string;
  height?: string;
  author?: { author_name: string; author_image_url: string };
};

export type TExhibition = {
  id: number;
  title: string;
  image_url: string;
};
