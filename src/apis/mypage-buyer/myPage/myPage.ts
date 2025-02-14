import { instance } from '@/apis/axios';
import { TBuyerMypage } from './type';
import { TGetResponse } from '@/apis/type';

/**
 * 특정 사용자의 마이페이지 정보를 조회하는 API 호출 함수
 * @returns 사용자 마이페이지 정보(TBuyerMypage)
 * @author 노찬영
 **/
export const getUserMypage = async (): Promise<TBuyerMypage> => {
  const response = await instance.get<TGetResponse<TBuyerMypage>>(
    `/api/mypage`
  );
  return response.data.result;
};
