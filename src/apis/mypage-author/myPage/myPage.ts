import { instance } from '@/apis/axios';
import { TArtistMypage } from './type';
import { TGetResponse } from '@/apis/type';

/**
 * 작가의 마이페이지 정보를 조회하는 API 호출 함수
 * @returns 사용자 마이페이지 정보(TArtistMypage)
 * @author 노찬영
 **/
export const getAuthorMypage = async (): Promise<TArtistMypage> => {
  const response = await instance.get<TGetResponse<TArtistMypage>>(
    `/api/mypage`
  );
  return response.data.result;
};
