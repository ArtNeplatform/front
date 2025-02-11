import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TUpdateUserInfo } from './type';

/**
 * 사용자 정보 수정 API 호출 함수
 * @param userId - 사용자 ID
 * @param userInfo - 수정할 사용자 정보 (nickname, address, birth)
 * @returns API 응답(TGetResponse)
 * @author 노찬영
 */

export const updateUserInfo = async (
  userInfo: TUpdateUserInfo
): Promise<TGetResponse<null>> => {
  try {
    const response = await instance.patch<TGetResponse<null>>(
      `/api/user/update`,
      userInfo
    );
    return response.data;
  } catch (error) {
    console.error('사용자 정보 수정 실패:', error);
    throw error;
  }
};
