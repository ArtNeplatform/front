import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TArtworkRegisterFormData } from './type';

/**
 * 작품 등록 API 함수
 * @param data 작품 등록 폼 데이터 (파일 전송을 위해 FormData 형태로 변환됩니다.)
 * @returns 등록 결과를 포함한 응답(TGetResponse<void>)
 */
export const postArtworkRegister = async (
  data: TArtworkRegisterFormData
): Promise<TGetResponse<void>> => {
  // 이미지 파일과 텍스트 필드를 함께 전송하기 위해 FormData 사용
  const formData = new FormData();

  // images 필드는 File 배열이므로 반복문을 사용하여 첨부
  data.images.forEach((file) => {
    formData.append('images', file);
  });

  // 나머지 텍스트 데이터 추가
  formData.append('theme', data.theme);
  formData.append('form', data.form);
  formData.append('title', data.title);
  formData.append('year', data.year);
  formData.append('genre', data.genre);
  formData.append('material', data.material);
  formData.append('description', data.description);
  formData.append('height', data.height);
  formData.append('width', data.width);
  formData.append('number', data.number);
  formData.append('frame', data.frame);

  const response = await instance.post<TGetResponse<void>>(
    '/api/artworks',
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
