/**
 * 사용자 마이페이지 조회 API 타입 정의
 * @author 노찬영
 */

export interface TUserMypageResponse {
  success: boolean;
  code: number;
  message: string;
  result: TBuyerMypage | TArtistMypage;
}

// 작품 구매자 타입
export type TBuyerMypage = {
  paymentCounts: {
    pending: number;
    completed: number;
    received: number;
  };
  auctions: TAuction[];
  payments: TPayment[];
  myCollection: {
    artworks: TArtwork[];
    exhibitions: TExhibition[];
  };
};

// 작가 타입
export type TArtistMypage = {
  author: {
    name: string;
    affiliation: string;
  };
  auctions: TAuction[];
  storage: {
    artworks: TArtwork[];
    exhibitions: TExhibition[];
  };
};
작품 구매자/ 작가 마이페이지 조회
// 공통 타입
export type TAuction = {
  artwork_id: number;
  title: string;
  author: { name: string };
  end_date: string;
  price: number;
  status: string;
};

export type TPayment = {
  artwork_id: number;
  title: string;
  author: { name: string };
  price: number;
  created_at: string;
  status: string;
};

export type TArtwork = {
  id: number;
  title: string;
  image_url: string;
  size?: string;
  author?: { name: string };
};

export type TExhibition = {
  exhi_id: number;
  title: string;
  image_url: string;
};
