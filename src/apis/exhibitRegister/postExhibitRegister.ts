/**
 * 전시 등록 API 호출
 * 멀티파트로 제공해야하는 데이터는 다음과 같이 제공해야합니다.
 * @author 홍규진
 */

import { instance } from '../axios';
import { TPostExhibitionRegisterFormData } from './types';

export const postExhibitionRegister = async (
  data: TPostExhibitionRegisterFormData
) => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('exhibit_image', data.exhibit_image);

  await instance.post('/api/exhibition', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
