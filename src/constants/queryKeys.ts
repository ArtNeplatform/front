import { getAuctionDetail } from '@/apis/auction/getAuctionDetail';
import { getAuctionLists } from '@/apis/auction/getAuctionList';
import { getPurchasedArtworks } from '@/apis/mypageBuyer/artWork';
import {
  getAuthorArtworksExhibitions,
  getAuthorProfile,
} from '@/apis/mypageAuthor/author';
import { AuthorProfileType } from '@/apis/mypageAuthor/type';
import { getAvailableArtworks } from '@/apis/auctionRegister/getAvailableArtworks';
import { getAuthorDetail } from '@/apis/author/getAuthorDetail';
import { getAuthorLists } from '@/apis/author/getAuthorLists';
import { getMainData } from '@/apis/main/main';

import { getBuyerMypage } from '@/apis/mypageBuyer/myPage/myPage';
import { getAuthorMypage } from '@/apis/mypageAuthor/myPage/myPage';

import { getExhibitions } from '@/apis/exhibition/getExhibitionList';
import { getExhibitionDetail } from '@/apis/exhibition/getExhibitionDetail';
import { getExhibitAvailableArtwork } from '@/apis/exhibitRegister/getExhibitAvailableArtwork';
import { getExhibitBackgroundImages } from '@/apis/exhibitRegister/getExhibitBackgroundImages';
import { getArtworkDetail } from '@/apis/artworkDetail/artwork';
import { getArtworks } from '@/apis/artwork/artwork';
import { saveAuthorBankInfo } from '@/apis/mypageAuthor/account';
/**
 * 작품 구매자 마이페이지 조회 API를 위한 React Query 설정 함수
 * @returns queryKey와 queryFn을 포함한 객체를 반환하여 React Query에서 사용 가능하도록 설정
 * @author 노찬영
 */
export const getBuyerMypageQuery = () => {
  return {
    queryKey: ['Mypage', 'buyer'],
    queryFn: () => getBuyerMypage(), // 작품 구매자 마이페이지 데이터를 조회하는 함수
  };
};

/**
 * 작가 마이페이지 조회 API를 위한 React Query 설정 함수
 * @returns queryKey와 queryFn을 포함한 객체를 반환하여 React Query에서 사용 가능하도록 설정
 * @author 노찬영
 */
export const getAuthorMypageQuery = () => {
  return {
    queryKey: ['Mypage', 'author'],
    queryFn: () => getAuthorMypage(), // 작가 마이페이지 데이터를 조회하는 함수
  };
};

/**
 * 구매한 작품 리스트 조회 쿼리 키 및 함수 설정
 * @returns {object} queryKey와 queryFn을 포함한 객체 반환
 * @example - const { data } = useQuery(getPurchasedArtworksQuery());
 * @author 노찬영
 **/
export const getPurchasedArtworksQuery = () => {
  return {
    queryKey: ['purchasedArtworks'],
    queryFn: getPurchasedArtworks,
  };
};

/**
 * 작가 작품/전시 조회 쿼리 키
 * @returns ['authorArtworksExhibitions']
 * @author 노찬영
 */
export const getAuthorArtworksExhibitionsQueryKey = () => [
  'authorArtworksExhibitions',
];

/**
 * 작가의 작품/전시 조회 API를 위한 React Query 설정 함수
 * @returns queryKey와 queryFn을 포함한 객체를 반환하여 React Query에서 사용 가능하도록 설정
 * @example - const { data } = useQuery(getAuthorArtworksExhibitionsQuery());
 * @author 노찬영
 */
export const getAuthorArtworksExhibitionsQuery = () => {
  return {
    queryKey: getAuthorArtworksExhibitionsQueryKey(),
    queryFn: getAuthorArtworksExhibitions,
  };
};

/**
 * 작가 계정 정보 수정 쿼리 키 함수
 * @returns ['updateAuthorInfo'] 형태의 배열 반환
 * @example - queryClient.invalidateQueries(getUpdateAuthorInfoQueryKey());
 * @author 노찬영
 */
export const getUpdateAuthorInfoQueryKey = () => ['updateAuthorInfo'];

/**
 * 작가 프로필  정보 개별 수정 쿼리 키 함수
 * @returns ['updateAuthorProfile'] 형태의 배열 반환
 * @example - queryClient.invalidateQueries(getUpdateupdateAuthorProfileQueryKey());
 * @author 노찬영
 */
export const getUpdateAuthorProfileQueryKey = () => ['updateAuthorProfile'];

/**
 * 작가 프로필 조회 API를 위한 React Query 설정 함수
 * @param type - 조회할 프로필 타입 ('default', 'intro', 'info')
 * @returns queryKey와 queryFn을 포함한 객체 반환
 * @example - const { data } = useQuery(getAuthorProfileQuery('intro'));
 * @author 노찬영
 */

/**
 * 작가 은행 정보 수정 쿼리
 * @param type 
 * @returns 
 * @author 홍규진
 */
export const saveAuthorBankInfoMutation = () => {
  return {
    mutationKey: ['saveAuthorBankInfo'],
    mutationFn: saveAuthorBankInfo,
  };
};



export const getAuthorProfileQuery = (type: AuthorProfileType) => {
  return {
    queryKey: ['authorProfile'],
    queryFn: () => getAuthorProfile(type),
  };
};

/**
 * 경매 가능 작품 조회 쿼리
 * @author 홍규진
 * */
export const getAvailableArtworksQuery = () => {
  return {
    queryKey: ['availableArtworks'],
    queryFn: getAvailableArtworks,
  };
};

/**
 * 경매 리스트 조회 쿼리
 * @author 이하늘
 * */
export const getAuctionListQuery = (sort: string) => {
  return {
    queryKey: ['auctionList', sort],
    queryFn: () => getAuctionLists({ sort }),
  };
};

/**
 * 경매 상세 조회 쿼리
 * @author 이하늘
 * */
export const getAuctionDetailQuery = (auctionId: number) => {
  return {
    queryKey: ['auctiondetail', auctionId],
    queryFn: () => getAuctionDetail(auctionId),
  };
};

/**
 * 메인 페이지 데이터를 조회하는 React Query 설정
 * @returns queryKey와 queryFn을 포함한 객체를 반환하여 React Query에서 사용 가능하도록 설정
 * @example - const { data } = useQuery(getMainDataQuery());
 * @author 김서윤
 */
export const getMainDataQuery = () => ({
  queryKey: ['mainData'],
  queryFn: getMainData,
});

/**
 * 작가 리스트 조회 쿼리
 * @author 이하늘
 * */
export const getAuthorListQuery = (
  sort: string,
  page: number,
  limit: number
) => {
  return {
    queryKey: ['authorList', sort, page, limit],
    queryFn: () => getAuthorLists({ sort, page, limit }),
  };
};

/**
 * 작가 상세 조회 쿼리
 * @author 이하늘
 * */
export const getAuthorDetailQuery = (
  authorId: number,
  artworkPage: number,
  artworkLimit: number,
  exhibitionPage: number,
  exhibitionLimit: number
) => {
  return {
    queryKey: [
      'authorDetail',
      authorId,
      artworkPage,
      artworkLimit,
      exhibitionPage,
      exhibitionLimit,
    ],
    queryFn: () =>
      getAuthorDetail({
        authorId,
        artworkPage,
        artworkLimit,
        exhibitionPage,
        exhibitionLimit,
      }),
  };
};

/**
 * 전시 리스트 조회 쿼리
 * @author 이하늘
 * */
export const getExhibitionListQuery = (sort: string) => {
  return {
    queryKey: ['exhibitionList', sort],
    queryFn: () => getExhibitions(sort),
  };
};

/**
 * 전시 상세 조회 쿼리
 * @author 이하늘
 * */
export const getExhibitionDetailQeury = (exhibitionId: number) => {
  return {
    queryKey: ['exhibitionDetail', exhibitionId],
    queryFn: () => getExhibitionDetail(exhibitionId),
  };
};

/**
 * 전시 등록시 배경 이미지 조회 쿼리
 * @author 홍규진
 * */
export const getExhibitBackgroundImagesQuery = () => {
  return {
    queryKey: ['exhibitBackgroundImages'],
    queryFn: getExhibitBackgroundImages,
  };
};
/**
 * 전시 등록시 전시 가능 작품 조회 쿼리
 * @author 홍규진
 * */
export const getExhibitAvailableArtworkQuery = () => {
  return {
    queryKey: ['exhibitAvailableArtwork'],
    queryFn: getExhibitAvailableArtwork,
  };
};

/**
 * 작품 상세 조회 쿼리
 * @author 홍규진
 * */
export const getArtworkDetailQuery = (artworkId: number) => {
  return {
    queryKey: ['artworkDetail', artworkId],
    queryFn: () => getArtworkDetail(artworkId),
  };
};

/**
 * 작품 리스트 조회 쿼리
 * @author 홍규진
 * */
export const getArtworkListQuery = (
  page: number,
  pageSize: number,
  themes: string[],
  sizes: string[],
  forms: string[],
  sortingKey?: 'latest' | 'popular'
) => {
  return {
    queryKey: ['artworkList', page, pageSize, themes, sizes, forms, sortingKey],
    queryFn: () =>
      getArtworks(page, pageSize, themes, sizes, forms, sortingKey),
  };
};
