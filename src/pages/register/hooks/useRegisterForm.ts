import { useState } from 'react';
import { TRegisterFormData } from '@/apis/register/type';
export const useRegisterForm = () => {
  const [formData, setFormData] = useState<TRegisterFormData>({
    role: 'BUYER', // 기본값 설정
    name: '',
    phone_number: '',
    nickname: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { formData, handleChange, setFormData };
};
