import { postOauthLoginWithCode } from '@/apis/register/oAuthLogin';
import { useMutation } from '@tanstack/react-query';
import { handleError } from '@/utils/handleError';
import { toast } from 'sonner';
/**
 * 소셜 로그인 뮤테이션 훅입니다.
 * 인가 코드를 사용하여 소셜 로그인 요청을 처리합니다.
 * @returns {object} mutate, isLoading, isError 상태 반환
 * @author 홍규진
 */
export const useOauthLoginMutation = (code: string, social_type: string) => {
  const mutation = useMutation({
    mutationKey: ['oauthLogin'],
    mutationFn: () => postOauthLoginWithCode({ code, social_type }),
    onSuccess: (data) => {
      // 로그인 성공 시 처리
      localStorage.setItem('accessToken', data.token);
      // 홈으로 리디렉션
      if (data.isComplete === false) {
        window.location.href = '/register';
      } else {
        toast.success('로그인 성공!');
        window.location.href = '/';
      }
    },
    onError: (error: Error) => {
      // 로그인 실패 시 처리
      handleError(error);
    },
  });

  return mutation;
};
