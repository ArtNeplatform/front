/**
 * 구매한 작품 데이터 타입
 * @author 노찬영
 **/

export type TPurchasedArtworkResponse = {
  artwork_id: number;
  author_name: string;
  title: string;
  size: string;
  is_liked: boolean;
};
