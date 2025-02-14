import { instance } from '@/apis/axios';
import { TGetResponse } from '../type';
import { TUserMypageResponse } from './type';

/**
 * 특정 사용자의 마이페이지 정보를 조회하는 API 호출 함수
 * @returns 사용자 마이페이지 정보(TUserMypageResponse)
 * @author 노찬영
 **/
export const getUserMypage = async (): Promise<TUserMypageResponse> => {
  const response = await instance.get<TGetResponse<TUserMypageResponse>>(
    `/api/mypage`
  );
  return response.data.result;
};
