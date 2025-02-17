import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TMySpaceFormData } from './type';

/**
 * 내 공간 등록 API 함수
 * @param data 공간 등록 폼 데이터 (파일 전송을 위해 FormData 형태로 변환됩니다.)
 * @returns 등록 결과를 포함한 응답(TGetResponse<void>)
 * @author 김서윤
 */

export const postMySpace = async (
  data: TMySpaceFormData
): Promise<TGetResponse<void>> => {
  // 이미지 파일과 텍스트 필드를 함께 전송하기 위해 FormData 사용
  const formData = new FormData();

  if (data.images) {
    formData.append('images', data.images);
  }

  // 나머지 텍스트 데이터 추가
  formData.append('name', data.name);
  formData.append('area', data.area);

  const response = await instance.post<TGetResponse<void>>(
    '/api/userspace',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  console.log(response.data);
  return response.data;
};
