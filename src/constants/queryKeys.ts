import { getAvailableArtworks } from '@/apis/auctionRegister/getAvailableArtworks';
import { getArtistList } from '@/apis/Example/artist';
import { TGetArtistListRequestParams } from '@/apis/Example/type';
import { postAuthRegister } from '@/apis/register/postAuthRegister';
import { getMainData } from '@/apis/main/main';

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
 * 인증 회원가입 쿼리
 * @author 홍규진
 * */
export const postAuthRegisterQuery = () => {
  return {
    queryKey: ['postAuthRegister'],
    queryFn: postAuthRegister,
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
