export type TAuthorInfo = {
  author_id: number;
  artwork_count: number;
  exhibition_count: number;
};

export type TGetAuthorListApiResponse = {
  total: number;
  totalPages: number;
  currentPage: number;
  authorInfos: Record<string, TAuthorInfo>; // 작가 이름을 키로 가지는 객체
};

