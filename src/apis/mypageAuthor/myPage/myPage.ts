import { instance } from '@/apis/axios';
import { TArtistMypage } from './type';
import { TGetResponse } from '@/apis/type';

/**
 * 작가의 마이페이지 정보를 조회하는 API 호출 함수
 * @returns 사용자 마이페이지 정보(TArtistMypage)
 * @author 노찬영
 **/
export const getAuthorMypage = async (): Promise<TArtistMypage> => {
  const AUTHOR_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ5dXNlb25naG83QGRndS5hYy5rciIsImlhdCI6MTczOTIwNDY5NiwiZXhwIjoxNzQxNzk2Njk2fQ.iWwnAhIzse5UwvHpR5uWa2o0HRM5G14ikeAtYf_BDec';
  console.log('작가 accessToken:', AUTHOR_TOKEN);

  localStorage.setItem('accessToken', AUTHOR_TOKEN);
  instance.defaults.headers.common.Authorization = `Bearer ${AUTHOR_TOKEN}`;

  const response = await instance.get<TGetResponse<TArtistMypage>>(
    `/api/mypage`
  );
  return response.data.result;
};
