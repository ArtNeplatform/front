import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postArtworkRegisterMutation } from '@/constants/mutationKey';
import { TArtworkRegisterFormData } from '@/apis/artworkRegister/type';
import { toast } from 'sonner';
import { useState } from 'react';
import { getAvailableArtworksQuery } from '@/constants/queryKeys';
import { useNavigate } from 'react-router-dom';
const useArtworkRegisterForm = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
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
      toast.error('모든 항목을 입력해주세요. 빈칸이 있습니다.');
      return false;
    }
    return true;
  };

  /**
   * 작품 등록 뮤테이션
   * @author 홍규진
   */
  const mutation = useMutation({
    mutationKey: postArtworkRegisterMutation().mutationKey,
    mutationFn: (data: TArtworkRegisterFormData) =>
      postArtworkRegisterMutation().mutationFn(data),
    onSuccess: async () => {
      toast.success('작품 등록이 성공적으로 완료되었습니다.');
      queryClient.invalidateQueries({
        queryKey: postArtworkRegisterMutation().mutationKey,
      });
      await getAvailableArtworksQuery().queryFn();
      navigate('/');
    },
    onError: (error: Error) => {
      toast.error(`작품 등록 실패: ${error.message}`);
    },
  });

  /**
   * 작품 등록 폼 제출 함수
   * 비어있는 것도 알려주기
   * @param e 폼 제출 이벤트
   * @author 홍규진
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm(formData)) {
      await mutation.mutateAsync(formData);
    } else {
      //어차피 위에서 토스트 메시지 띄워줬으니 여기서는 리턴
      return;
    }
  };

  return {
    formData,
    setFormData,
    handleSubmit,
    isLoading: mutation.isPending,
    isError: mutation.isError,
  };
};

export default useArtworkRegisterForm;
