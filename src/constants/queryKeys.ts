import { getAuctionDetail } from '@/apis/auction/getAuctionDetail';
import { getAuctionLists } from '@/apis/auction/getAuctionList';
import { getPurchasedArtworks } from '@/apis/artBuyerPage/artWork';
import {
  getAuthorArtworksExhibitions,
  getAuthorProfile,
} from '@/apis/authorPage/author';
import { AuthorProfileType } from '@/apis/authorPage/type';
import { getAvailableArtworks } from '@/apis/auctionRegister/getAvailableArtworks';
import { getAuthorDetail } from '@/apis/author/getAuthorDetail';
import { getAuthorLists } from '@/apis/author/getAuthorLists';
import { getArtistList } from '@/apis/Example/artist';
import { TGetArtistListRequestParams } from '@/apis/Example/type';
import { getMainData } from '@/apis/main/main';
import { getUserMypage } from '@/apis/myPage/myPage';

/**
 * 아티스트들의 정보를 받아오고, 관리하기 위한 쿼리 키로 함수와 묶어서 사용합니다.
 * 단, pagenation 이 필요한 경우엔 다음과 같이 page 와 keyword 를 이용해 작성합니다. 이 때, queryKey 지정 여부에 따라서 데이터를 다시 못 받아오는 경우도 있으니, 검색이 필요한 경우엔 keyword 와 연관되게 키를 지정 후 데이터를 가져옵니다.
 * @author 홍규진
 * */

export const getArtistListQuery = () => {
  return {
    queryKey: ['artistList'],
    queryFn: ({ page, keyword }: TGetArtistListRequestParams) =>
      getArtistList({ page, keyword }),
  };
};

/**
 * 사용자 마이페이지 조회를 위한 쿼리 키 반환 함수
 * @param userId - 조회할 사용자 ID
 * @returns 쿼리 키 배열 ['userMypage', userId]을 반환하여 캐시를 사용자별로 관리할 수 있도록 설정
 * @author 노찬영
 */
export const getUserMypageQueryKey = (userId: number) => ['userMypage', userId];

/**
 * 사용자 마이페이지 조회 API를 위한 React Query 설정 함수
 * @param userId - 조회할 사용자 ID
 * @returns queryKey와 queryFn을 포함한 객체를 반환하여 React Query에서 사용 가능하도록 설정
 * @example - const { data } = useQuery(getUserMypageQuery(123));
 * @author 노찬영
 */
export const getUserMypageQuery = (userId: number) => {
  return {
    queryKey: getUserMypageQueryKey(userId), // 사용자별로 캐싱을 관리할 수 있도록 설정
    queryFn: () => getUserMypage(userId), // 해당 userId의 마이페이지 데이터를 조회하는 함수
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
 * 작품 구매자 계정 정보 수정 쿼리 키 함수
 * @returns ['updateUserInfo'] 형태의 배열 반환
 * @example - queryClient.invalidateQueries(getUpdateUserInfoQueryKey());
 * @author 노찬영
 */
export const getUpdateUserInfoQueryKey = () => ['updateUserInfo'];

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
 * 메인 페이지 데이터를 조회하는 쿼리 키 함수
 * @returns ['mainData'] 형태의 배열 반환
 * @example - queryClient.invalidateQueries(getMainDataQueryKey());
 * @author 김서윤
 */
export const getMainDataQueryKey = () => ['mainData'];

/**
 * 메인 페이지 조회 API를 위한 React Query 설정 함수
 * @returns queryKey와 queryFn을 포함한 객체를 반환하여 React Query에서 사용 가능하도록 설정
 * @example - const { data } = useQuery(getMainDataQuery());
 * @author 김서윤
 */
export const getMainDataQuery = () => {
  return {
    queryKey: getMainDataQueryKey(),
    queryFn: getMainData,
  };
};

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
export const getAuthorDetailQuery = (authorId: number) => {
  return {
    queryKey: ['authorDetail', authorId],
    queryFn: () => getAuthorDetail({ authorId }),
  };
};
