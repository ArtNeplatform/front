/**
 * 작품 리스트 조회 성공
 * @author 이하늘
 */
export type TExhibition = {
  id: number;
  title: string;
  image_url: string;
  created_at: string;
  popularity: number;
};

export type TGetExhibitionsResponse = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  result: TExhibition[];
};
