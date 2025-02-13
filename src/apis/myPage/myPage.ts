import { instance } from '@/apis/axios';
import { TUserMypageResponse } from './type';

/**
 * 특정 사용자의 마이페이지 정보를 조회하는 API 호출 함수
 * @param userId 조회할 사용자 ID
 * @returns 사용자 마이페이지 정보(TUserMypageResponse)
 * @author 노찬영
 **/
export const getUserMypage = async (
  userId: number
): Promise<TUserMypageResponse> => {
  const response = await instance.get<TUserMypageResponse>(
    `/api/mypage/${userId}`
  );
  return response.data;
};
