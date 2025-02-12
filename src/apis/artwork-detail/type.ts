/**
 * 작풍 상세 조회 API 타입 정의
 * @author 김서윤
 */

export interface TArtworkDetailResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: {
    fixed_info: {
      author_name: string;
      artwork_title: string;
      artwork_image: string[];
      year: string;
      dimensions: string;
      material: string;
      size: number;
      category: string;
      genre: string;
    };
    tab_data: {
      description: string;
      userspace?: TUserSpace[];
      author_id: number;
      author_name: string;
      author_image: string;
      work_style: string | null;
      artwork_count: number;
      exhibition_count: number;
      other_artworks: TOtherArtwork[];
    };
  };
}

export type TUserSpace = {
  userspace_id: number;
  name: string;
  image_url: string;
  area: string;
};

export type TOtherArtwork = {
  id: number;
  title: string;
  thumbnail: string;
};
