import { useState } from 'react';
import { toast } from 'sonner';
import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { useNavigate } from 'react-router-dom';
interface ExhibitState {
  step: number;
  selectedBackground: string | null; // 배경 이미지
  selectedOverlay: string | null; // 오버레이 이미지
  overlayPosition: { x: number; y: number };
  finalImage: File | null;
}

export const useExhibitRegister = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<ExhibitState>({
    step: 0,
    selectedBackground: null,
    selectedOverlay: null,
    overlayPosition: { x: 50, y: 50 },
    finalImage: null,
  });

  /**
   * 배경 이미지 선택
   * @param imageUrl - 선택된 배경 이미지 URL
   * @author 홍규진
   */
  const handleBackgroundSelect = (imageUrl: string) => {
    setState((prev) => ({ ...prev, selectedBackground: imageUrl }));
  };

  /**
   * 오버레이 이미지 선택
   * 오버레이는 특별하게 이미지 파일이 아닌 이미지 URL로 받아오기 때문에 처리가 다릅니다.
   * @param imageUrl - 선택된 오버레이 이미지 URL
   * @author 홍규진
   */
  const handleOverlaySelect = async (imageUrl: string) => {
    try {
      setState((prev) => ({ ...prev, selectedOverlay: imageUrl }));
    } catch (error) {
      console.error('오버레이 이미지 로드 실패:', error);
    }
  };
  const setStep = (step: number) => {
    setState((prev) => ({ ...prev, step }));
  };

  /**
   * 전시 등록 제출
   * @param combinedImageFile - 합성된 전시 이미지
   * @param title - 전시 제목
   * @author 홍규진
   */
  const handleSubmit = async (combinedImageFile: File, title: string) => {
    if (!title.trim()) {
      toast.error('전시 제목을 입력해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('exhibition_image', combinedImageFile);
    formData.append('title', title);

    const response = await instance.post<TGetResponse<void>>(
      '/api/exhibition',
      formData
    );
    if (response.data.isSuccess) {
      toast.success('전시 등록이 완료되었습니다.');
      navigate('/');
    } else {
      toast.error('전시 등록에 실패했습니다.');
    }
  };

  return {
    ...state,
    setStep,
    handleBackgroundSelect,
    handleOverlaySelect,
    handleSubmit,
  };
};
