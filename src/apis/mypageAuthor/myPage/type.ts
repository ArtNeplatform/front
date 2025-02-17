/**
 * 작가 마이페이지 조회 API 타입 정의
 * @author 노찬영
 */

// 작가 마이페이지 타입
export type TArtistMypage = {
  author: TAuthor;
  auctions: TAuction[];
  storage: {
    artworks: TArtwork[];
    exhibitions: TExhibition[];
  };
};

// 작가 정보 타입
export type TAuthor = {
  name: string;
  profile_image_url: string;
};

// 경매 타입
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

// 작품 타입
export type TArtwork = {
  id: number;
  title: string;
  author?: { name: string };
  thumbnail_image_url: string;
  height: string;
  width: string;
};

// 전시 타입
export type TExhibition = {
  id: number;
  title: string;
  image_url: string;
};
