import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { postAuthRegisterQuery } from '@/constants/queryKeys';
import { TRegisterFormData } from '@/apis/register/type';

export const usePostAuthRegister = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: postAuthRegisterQuery().queryKey,
    mutationFn: (body: TRegisterFormData) =>
      postAuthRegisterQuery().queryFn(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: postAuthRegisterQuery().queryKey,
      }); // 쿼리 무효화
      navigate('/success'); // 성공 페이지로 이동
    },
    onError: (error: Error) => {
      toast.error(error.message); // 오류 메시지 표시
    },
  });
};
