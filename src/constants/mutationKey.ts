import { postAuthRegister } from '@/apis/register/postAuthRegister';
import { postAuctionRegister } from '@/apis/auctionRegister/postAuctionRegister';
import { postArtworkRegister } from '@/apis/artworkRegister/postArtworkRegister';
import {
  getArtworkDetailQuery,
  getAuctionListQuery,
  getBuyerMypageQuery,
  getExhibitionListQuery,
} from '@/constants/queryKeys';
import { postAuctionBid } from '@/apis/auction/postAuctionBid';
import { postAuctionLike } from '@/apis/auction/postAuctionLike';
import { postAuctionUnlike } from '@/apis/auction/postAuctionUnlike';
import { toggleArtworkLike } from '@/apis/artworkLike/like';
import { postMySpace } from '@/apis/artworkDetail/postMySpace';
import { getMainDataQuery } from '@/constants/queryKeys';
import { requestKakaoPay } from '@/apis/kakaoPay/paymentPreparation';
import { approveKakaoPay } from '@/apis/kakaoPay/paymentAuthorization';
import { updateUserInfo } from '@/apis/mypageBuyer/artBuyer';
import { TUpdateUserInfo } from '@/apis/mypageBuyer/type';
import { postExhibitionRegister } from '@/apis/exhibitRegister/postExhibitRegister';
import { TAuctionRegisterFormData } from '@/apis/auctionRegister/type';
/**
 * 뮤테이션 키 관리를 위한 상수 정의 - 상수값을 사용해 mutation 성공 여부, 실패등에 따른 값 선언을 위한 유지보수성을 높이기 위해 사용합니다. (param은 넣지 않습니다. 하위 함수에서 넣어줍니다.)
 * @mutationKey - 뮤테이션 함수 구분을 위한 키 값입니다.
 * @successMutationKey - 뮤테이션 성공 후 호출될 쿼리 키 값 (쿼리 키 무효화를 통해 refetch를 위해 사용할 값입니다.)
 * @mutationFn - 뮤테이션 함수입니다.
 * @author 홍규진
 */
/*-----------------------------------------------------------*/

/**
 * 인증 회원가입 뮤테이션
 * @author 홍규진
 * */
export const postAuthRegisterMutation = () => {
  return {
    mutationKey: ['postAuthRegister'],
    successMutationKey: [...getMainDataQuery().queryKey],
    mutationFn: postAuthRegister,
  };
};

/**
 * 경매 등록 뮤테이션
 * @author 홍규진
 * */
export const postAuctionRegisterMutation = () => {
  return {
    mutationKey: ['postAuctionRegister'],
    successMutationKey: [...getAuctionListQuery('').queryKey],
    mutationFn: (data: TAuctionRegisterFormData) => postAuctionRegister(data),
  };
};
/**
 * 전시 등록 뮤테이션
 * 전시 등록후 전시 목록 조회 쿼리 키 무효화
 * @author 홍규진
 * */
export const postExhibitionRegisterMutation = () => {
  return {
    mutationKey: ['postExhibitionRegister'],
    successMutationKey: [...getExhibitionListQuery('').queryKey],
    mutationFn: postExhibitionRegister,
  };
};

/**
 * 작품 등록 뮤테이션
 *작품 등록 후, 메인 화면 내 작품 쿼리 키 무효화
 * @author 홍규진
 * */
export const postArtworkRegisterMutation = () => {
  return {
    mutationKey: ['postArtworkRegister'],
    successMutationKey: [...getMainDataQuery().queryKey],
    mutationFn: postArtworkRegister,
  };
};

/**
 * 경매 입찰 뮤테이션
 * 경매 입찰 후 경매 목록 조회 쿼리 키 무효화
 * @author 이하늘, 홍규진
 * */
export const postAuctionBidMutation = () => {
  return {
    mutationKey: ['postAuctionBid'],
    successMutationKey: [...getAuctionListQuery('').queryKey],
    mutationFn: postAuctionBid,
  };
};

/**
 * 작품 좋아요 뮤테이션
 * 작품 좋아요 후 작품 상세 조회 쿼리 키 무효화
 * @author 김서윤, 홍규진
 * */
export const toggleArtworkLikeMutation = (artworkId: number) => {
  return {
    mutationKey: ['toggleArtworkLike'],
    successMutationKey: [...getArtworkDetailQuery(artworkId).queryKey],
    mutationFn: () => toggleArtworkLike(artworkId),
  };
};

/**
 * 카카오페이 결제 준비 뮤테이션
 * @author 노찬영, 홍규진
 * */
export const requestKakaoPayMutation = () => {
  return {
    mutationKey: ['requestKakaoPay'],
    successMutationKey: [...getAuctionListQuery('').queryKey],
    mutationFn: (paymentId: number) => requestKakaoPay(paymentId),
  };
};

/**
 * 카카오페이 결제 승인 뮤테이션
 * 카카오페이 결제 승인 후 경매 목록 조회 쿼리 키 무효화
 * @author 노찬영, 홍규진
 */
export const approveKakaoPayMutation = () => {
  return {
    mutationKey: ['approveKakaoPay'],
    successMutationKey: [...getAuctionListQuery('').queryKey],
    mutationFn: (paymentId: number, pgToken: string) =>
      approveKakaoPay(paymentId, pgToken),
  };
};

/**
 * 사용자 정보 수정 뮤테이션
 * 사용자 정보 수정 후 사용자 마이페이지 조회 쿼리 키 무효화
 * @author 노찬영, 홍규진
 */
export const updateUserInfoMutation = () => {
  return {
    mutationKey: ['updateUserInfo'],
    successMutationKey: [...getBuyerMypageQuery().queryKey],
    mutationFn: (userInfo: TUpdateUserInfo) => updateUserInfo(userInfo),
  };
};

/**
 * 내 공간 등록 뮤테이션
 * 내 공간 등록 후 사용자 마이페이지 조회 쿼리 키 무효화
 * @author 김서윤, 홍규진
 * */
export const postMySpaceMutation = () => {
  return {
    mutationKey: ['postMySpace'],
    successMutationKey: [...getBuyerMypageQuery().queryKey],
    mutationFn: postMySpace,
  };
};

/**
 * 경매 좋아요 뮤테이션
 * 경매 좋아요 후 경매 목록 조회 쿼리 키 무효화
 * @author 이하늘, 홍규진
 * */
export const postAuctionLikeMutation = () => {
  return {
    mutationKey: ['postAuctionLike'],
    successMutationKey: [...getAuctionListQuery('').queryKey],
    mutationFn: postAuctionLike,
  };
};

/**
 * 경매 좋아요 취소 뮤테이션
 * 경매 좋아요 취소 후 경매 목록 조회 쿼리 키 무효화
 * @author 이하늘, 홍규진
 * */
export const postAuctionUnlikeMutation = () => {
  return {
    mutationKey: ['postAuctionUnlike'],
    successMutationKey: [...getAuctionListQuery('').queryKey],
    mutationFn: postAuctionUnlike,
  };
};
