import { postArtworkRegisterQuery } from '@/constants/queryKeys';
import { useState } from 'react';

type TArtworkRegisterFormData = {
  images: File[];
  theme: string;
  form: string;
  title: string;
  year: string;
  genre: string;
  material: string;
  description: string;
  height: string;
  width: string;
  number: string;
  frame: string;
};
const useArtworkForm = () => {
  const [formData, setFormData] = useState<TArtworkRegisterFormData>({
    images: [],
    theme: '',
    form: '',
    title: '',
    year: '',
    genre: '',
    material: '',
    description: '',
    height: '',
    width: '',
    number: '',
    frame: '',
  });

  /**
   * 유효성 검사 함수
   * @param formData 폼 데이터
   * @returns 유효성 검사 결과
   * @author 홍규진
   */
  const validateForm = (formData: TArtworkRegisterFormData) => {
    const {
      images,
      title,
      year,
      genre,
      material,
      description,
      height,
      width,
      number,
      frame,
    } = formData;

    if (
      images.length === 0 ||
      !title ||
      !year ||
      !genre ||
      !material ||
      !description ||
      !height ||
      !width ||
      !number ||
      !frame
    ) {
      console.log('유효성 검사 실패');

      alert('모든 항목을 입력해주세요. 빈칸이 있습니다.');
      return false;
    }
    console.log('유효성 검사 성공');
    return true;
  };

  /**
   * 작품 등록 폼 제출 함수
   * 비어있는 것도 알려주기
   * @param e 폼 제출 이벤트
   * @author 홍규진
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm(formData)) {
      console.log('유효성 검사 성공 API 요청');
      postArtworkRegisterQuery().queryFn(formData);
    } else {
      console.log('유효성 검사 실패');
      alert('모든 항목을 입력해주세요.');
    }
  };

  return { formData, setFormData, handleSubmit, validateForm };
};

export default useArtworkForm;
