/**
 * 전시 등록 API 호출
 * @author 홍규진
 */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TPostExhibitionRegisterFormData } from '@/apis/exhibitRegister/types';
import { postExhibitionRegisterMutation } from '@/constants/mutationKey';
import { toast } from 'sonner';
/**
 * 전시 등록 관련 Mutation 훅
 * @author 홍규진
 */
export const usePostExhibitionRegisterMutation = () => {
  const queryClient = useQueryClient();
  const {
    mutate: postExhibitionRegister,
    isPending,
    error,
  } = useMutation({
    mutationKey: postExhibitionRegisterMutation().mutationKey,
    mutationFn: (formData: TPostExhibitionRegisterFormData) =>
      postExhibitionRegisterMutation().mutationFn(formData),
    onSuccess: () => {
      toast.success('전시 등록이 완료되었습니다.');
      queryClient.invalidateQueries({
        queryKey: postExhibitionRegisterMutation().successMutationKey,
      });
    },
    onError: (error) => {
      toast.error(`전시 등록에 실패했습니다. ${error.message}`);
    },
  });

  return { postExhibitionRegister, isPending, error };
};
