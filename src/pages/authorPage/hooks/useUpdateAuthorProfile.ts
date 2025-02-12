import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { updateAuthorProfile } from '@/apis/authorPage/profile';
import { TGetResponse } from '@/apis/type';
import { TUpdateAuthorProfile } from '@/apis/authorPage/type';
import { getUpdateupdateAuthorProfileQueryKey } from '@/constants/queryKeys';

/**
 * 작가 프로필 개별 정보를 수정하는 React Query 훅
 * @returns mutate 함수와 상태를 반환하여 작가 정보 수정 요청 가능
 * @author 노찬영
 **/
export const useUpdateAuthorProfile = () => {
  const {
    mutate: updateProfile,
    isPending,
    error,
  } = useMutation<
    TGetResponse<{ attribute: string; value: string }>,
    AxiosError<{ message: string }>,
    TUpdateAuthorProfile
  >({
    mutationKey: getUpdateupdateAuthorProfileQueryKey(),
    mutationFn: updateAuthorProfile,
    onSuccess: (data) => {
      toast.success(
        `"${data.result?.attribute}" 정보가 성공적으로 업데이트되었습니다.`
      );
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || '작가 프로필 수정에 실패했습니다.';
      toast.error(errorMessage);
    },
  });

  return { updateProfile, isPending, error };
};
