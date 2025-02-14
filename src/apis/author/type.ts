/**
 * 작가 리스트 조회회
 * @author 이하늘
 */
export type TAuthorInfo = {
  author_id: number;
  introduction_image_url: string;
  artwork_count: number;
  exhibition_count: number;
};

export type TGetAuthorListApiResponse = {
  total: number;
  totalPages: number;
  currentPage: number;
  authorInfos: Record<string, TAuthorInfo>; // 작가 이름을 키로 가지는 객체
};

/**
 * 작가 상세 조회
 * @author 이하늘
 */
export type TExperience = {
  date: string;
  description: string;
};

export type TEducation = {
  school: string;
  major: string;
  status: string;
  start_date: string;
  end_date: string;
};

export type TAward = {
  date: string;
  description: string;
};

export type TArtworkItem = {
  id: number;
  author_id: number;
  title: string;
  thumbnail_image_url: string;
  description: string;
  information: string | null;
  year: string;
  material: string;
  height: string;
  width: string;
  number: number;
  theme: string;
  form: string;
  genre: string;
  frame: string;
  created_at: string;
  updatead_at: string;
  exhibition_id: number | null;
};

export type TArtworks = {
  total: number;
  totalPages: number;
  currentPage: number;
  items: TArtworkItem[];
};

export type TExhibitionItem = {
  id: number;
  author_id: number;
  gallery_id: number;
  title: string;
  image_url: string;
  background_img_url: string | null;
  popularity: number;
  start_date: string | null;
  end_date: string | null;
  created_at: string;
  updated_at: string;
};
export type TExhibitions = {
  total: number;
  totalPages: number;
  currentPage: number;
  items: TExhibitionItem[];
};

export type TGetAuthorDetailApiResponse = {
  author_name: string;
  description: string;
  author_image_url: string;
  introduction_image_url: string;
  artwork_count: number;
  exhibition_count: number;
  experience: TExperience[];
  education: TEducation[];
  award: TAward[];
  artworks: TArtworks;
  exhibitions: TExhibitions;
};
