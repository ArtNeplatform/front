import { useState } from 'react';

type TAuctionRegisterFormData = {
  images: File[];
  title: string;
  startingPrice: number;
  auctionEndDate: string;
  description: string;
};

const useAuctionForm = () => {
  const [formData, setFormData] = useState<TAuctionRegisterFormData>({
    images: [],
    title: '',
    startingPrice: 0,
    auctionEndDate: '',
    description: '',
  });

  // 유효성 검사 및 제출 함수는 필요에 따라 추가
  return { formData, setFormData };
};

export default useAuctionForm;
