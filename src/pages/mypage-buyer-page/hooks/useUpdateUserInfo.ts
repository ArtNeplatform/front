import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateUserInfoMutation } from '@/constants/mutationKey';
import { getQueryClient } from '@/contexts/query/getQueryClient';
import { TUpdateUserInfo } from '@/apis/mypageBuyer/type';
const queryClient = getQueryClient();

/**
 * 작품 구매자 계정 정보 수정을 위한 React Query 훅
 * @returns mutate 함수와 상태를 반환하여 사용자 정보 수정 요청 가능
 * @example
 * const { mutate: updateUser } = useUpdateUserInfo();
 * updateUser({ nickname: '새 닉네임' });
 * @author 노찬영, 홍규진
 **/
export const useUpdateUserInfo = () => {
  const {
    mutate: updateUser,
    isPending,
    error,
  } = useMutation({
    mutationKey: updateUserInfoMutation().mutationKey,
    mutationFn: (userInfo: TUpdateUserInfo) =>
      updateUserInfoMutation().mutationFn(userInfo),
    onSuccess: () => {
      toast.success('계정 정보가 성공적으로 업데이트되었습니다.');
      queryClient.invalidateQueries({
        queryKey: updateUserInfoMutation().successMutationKey,
      });
    },
    onError: (error) => {
      toast.error(`계정 정보 수정에 실패했습니다. ${error.message}`);
    },
  });

  return { updateUser, isPending, error };
};
