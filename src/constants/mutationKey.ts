import { postAuthRegister } from '@/apis/register/postAuthRegister';
import { postAuctionRegister } from '@/apis/auctionRegister/postAuctionRegister';
import { postArtworkRegister } from '@/apis/artworkRegister/postArtworkRegister';
import { getAvailableArtworksQuery } from '@/constants/queryKeys';
import { postAuctionBid } from '@/apis/auction/postAuctionBid';
import { toggleArtworkLike } from '@/apis/artwork-like/like';
import { postMySpace } from '@/apis/artwork-detail/postMySpace';
/**
 * 인증 회원가입 뮤테이션
 * @author 홍규진
 * */
export const postAuthRegisterMutation = () => {
  return {
    mutationKey: ['auth'],
    mutationFn: postAuthRegister,
  };
};

/**
 * 경매 등록 뮤테이션
 * @author 홍규진
 * */
export const postAuctionRegisterMutation = () => {
  return {
    mutationKey: [...getAvailableArtworksQuery().queryKey],
    mutationFn: postAuctionRegister,
  };
};

/**
 * 작품 등록 뮤테이션
 * TODO-[홍규진] 작품 등록 후, 홈 화면 내 작품 쿼리 키 지정시 해당 키로 수정 필요
 * @author 홍규진
 * */
export const postArtworkRegisterMutation = () => {
  return {
    mutationKey: ['artwork'],
    mutationFn: postArtworkRegister,
  };
};

/**
 * 경매 입찰 뮤테이션
 * @author 이하늘
 * */
export const postAuctionBidMutation = () => {
  return {
    mutationKey: ['auctionBid'],
    mutationFn: postAuctionBid,
  };
};

/*
 * 작품 좋아요 뮤테이션
 * @author 김서윤
 */
export const toggleArtworkLikeMutation = (artworkId: number) => {
  return {
    mutationKey: ['artworkDetail', artworkId],
    mutationFn: () => toggleArtworkLike(artworkId),
  };
};

/**
 * 내 공간 등록 뮤테이션
 * @author 김서윤
 * */
export const postMySpaceMutation = () => {
  return {
    mutationKey: ['new_userspace'],
    mutationFn: postMySpace,
  };
};

/**
 * 경매 좋아요 뮤테이션
 * @author 이하늘
 * */
export const postAuctionLikeMutation = () => {
  return {
    mutationKey: ['auctionLike'],
  };
};

/**
 * 경매 좋아요 취소 뮤테이션
 * @author 이하늘
 * */
export const postAuctionUnlikeMutation = () => {
  return {
    mutationKey: ['auctionUnlike'],
  };
};
