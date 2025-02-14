/**
 * 전시 리스트 조회 성공
 * @author 이하늘
 */
export type TExhibition = {
  exhibition_id: number;
  title: string;
  image_url: string;
};

/**
 * 전시 상세 조회 성공
 * @author 이하늘
 */
export type TExhibitionDetail = {
  exhibition_id: number;
  title: string;
  image_url: string;
};

export type TAuthor = {
  author_id: number;
  name: string;
  image_url: string;
};

export type TArtwork = {
  artwork_id: number;
  image_url: string;
};

export type TGetExhibitionDetailResponse = {
  exhibition: TExhibitionDetail;
  author: TAuthor;
  author_exhibitions: TExhibitionDetail[];
  author_artworks: TArtwork[];
};
