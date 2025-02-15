import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postMySpaceMutation } from '@/constants/mutationKey';
import { TMySpaceFormData } from '@/apis/artwork-detail/type';
import { toast } from 'sonner';
import { useState } from 'react';
import { getAvailableArtworksQuery } from '@/constants/queryKeys';
const useMySpaceForm = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<TMySpaceFormData>({
    images: undefined,
    name: '',
    area: '',
  });

  /**
   * 유효성 검사 함수
   * @param formData 폼 데이터
   * @returns 유효성 검사 결과
   * @author 김서윤
   */
  const validateForm = (formData: TMySpaceFormData) => {
    const { images, name, area } = formData;

    if (!images || !name || !area) {
      toast.error('모든 항목을 입력해주세요. 빈칸이 있습니다.');
      return false;
    }
    return true;
  };

  /**
   * 내 공간 등록 뮤테이션
   * @author 김서윤
   */
  const mutation = useMutation({
    mutationKey: postMySpaceMutation().mutationKey,
    mutationFn: (data: TMySpaceFormData) =>
      postMySpaceMutation().mutationFn(data),
    onSuccess: async () => {
      toast.success('공간 등록이 성공적으로 완료되었습니다.');
      queryClient.invalidateQueries({
        queryKey: postMySpaceMutation().mutationKey,
      });
      await getAvailableArtworksQuery().queryFn();
    },
    onError: (error: Error) => {
      toast.error(`공간 등록 실패: ${error.message}`);
    },
  });

  /**
   * 공간 등록 폼 제출 함수
   * 비어있는 것도 알려주기
   * @param e 폼 제출 이벤트
   * @author 김서윤
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

export default useMySpaceForm;
