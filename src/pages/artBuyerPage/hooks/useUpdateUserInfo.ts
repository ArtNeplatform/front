import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { updateUserInfo } from '@/apis/mypage-buyer/artBuyer';
import { getUpdateUserInfoQueryKey } from '@/constants/queryKeys';
import { getQueryClient } from '@/contexts/query/getQueryClient';
import { TGetResponse } from '@/apis/type';

const queryClient = getQueryClient();

interface UpdateUserInfoParams {
  nickname?: string;
  address?: string;
  birth?: string;
}

/**
 * 작품 구매자 계정 정보 수정을 위한 React Query 훅
 * @returns mutate 함수와 상태를 반환하여 사용자 정보 수정 요청 가능
 * @example
 * const { mutate: updateUser } = useUpdateUserInfo();
 * updateUser({ nickname: '새 닉네임' });
 * @author 노찬영
 **/
export const useUpdateUserInfo = () => {
  const {
    mutate: updateUser,
    isPending,
    error,
  } = useMutation<
    TGetResponse<null>,
    AxiosError<{ message: string }>,
    UpdateUserInfoParams
  >({
    mutationKey: getUpdateUserInfoQueryKey(),
    mutationFn: updateUserInfo,
    onSuccess: () => {
      toast.success('계정 정보가 성공적으로 업데이트되었습니다.');
      queryClient.invalidateQueries({ queryKey: getUpdateUserInfoQueryKey() });
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || '계정 정보 수정에 실패했습니다.';
      toast.error(errorMessage);
    },
  });

  return { updateUser, isPending, error };
};
