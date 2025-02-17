import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TUpdateAuthorProfile } from './type';

/**
 * 작가 프로필 정보 개별 수정 API 호출 함수
 * @param data - 수정할 속성(attribute)과 값(value)
 * @returns void (응답 데이터를 처리하지 않음)
 * @author 노찬영
 */
export const updateAuthorProfile = async (
  data: TUpdateAuthorProfile
): Promise<void> => {
  const response = await instance.patch<TGetResponse<void>>(
    '/api/author/profile',
    data
  );

  if (!response.data.isSuccess) {
    throw new Error('작가 프로필 수정에 실패했습니다.');
  }
};
