import { getArtistList } from '@/apis/Example/artist';
import { TGetArtistListRequestParams } from '@/apis/Example/type';

/**
 * 아티스트들의 정보를 받아오고, 관리하기 위한 쿼리 키로 함수와 묶어서 사용합니다.
 * 단, pagenation 이 필요한 경우엔 다음과 같이 page 와 keyword 를 이용해 작성합니다. 이 때, queryKey 지정 여부에 따라서 데이터를 다시 못 받아오는 경우도 있으니, 검색이 필요한 경우엔 keyword 와 연관되게 키를 지정 후 데이터를 가져옵니다.
 * @author 홍규진
 * */
export const getArtistListQuery = () => {
  return {
    queryKey: ['artistList'],
    queryFn: ({ page, keyword }: TGetArtistListRequestParams) => getArtistList({ page, keyword }),
  };
};
