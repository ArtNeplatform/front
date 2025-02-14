import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { postAuthRegisterMutation } from '@/constants/mutationKey';
import { TRegisterFormData } from '@/apis/register/type';

export const usePostAuthRegister = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: postAuthRegisterMutation().mutationKey,
    mutationFn: (formData: TRegisterFormData) =>
      postAuthRegisterMutation().mutationFn(formData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: postAuthRegisterMutation().mutationKey,
      }); // 쿼리 무효화
      localStorage.setItem('accessToken', data.token);
      toast.success('회원가입이 완료되었습니다.');
      navigate('/'); // 성공 페이지로 이동
    },
    onError: (error: Error) => {
      toast.error(error.message); // 오류 메시지 표시
    },
  });
};
