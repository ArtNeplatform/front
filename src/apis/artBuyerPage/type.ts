/**
 * 구매한 작품 데이터 타입
 * @author 노찬영
 **/

export interface TPurchasedArtwork {
  artworkId: number; // 작품 ID
  authorName: string; // 작가 이름
  title: string; // 작품 제목
  size: string; // 작품 크기
  isLiked: boolean; // 좋아요 여부
}

export interface TPurchasedArtworkResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: TPurchasedArtwork[]; // 구매한 작품 리스트
}

export interface TUpdateUserInfo {
  nickname?: string;
  address?: string;
  birth?: string;
}
