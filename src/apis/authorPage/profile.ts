import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TUpdateAuthorProfile } from './type';

/**
 * 작가 프로필 정보 개별 수정 API 호출 함수
 * @param data - 수정할 속성(attribute)과 값(value)
 * @returns API 응답(TUpdateResponse<{ attribute: string; value: string }>)
 * @author 노찬영
 */
export const updateAuthorProfile = async (
  data: TUpdateAuthorProfile
): Promise<TGetResponse<{ attribute: string; value: string }>> => {
  try {
    const response = await instance.patch<
      TGetResponse<{ attribute: string; value: string }>
    >(`/api/author/profile`, data);
    return response.data;
  } catch (error) {
    console.error('작가 프로필 수정 실패:', error);
    throw error;
  }
};
