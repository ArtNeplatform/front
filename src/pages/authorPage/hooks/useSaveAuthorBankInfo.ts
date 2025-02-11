import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { saveAuthorBankInfo } from '@/apis/authorPage/account';
import { TGetResponse } from '@/apis/type';

interface SaveBankInfoParams {
  bank_name: string;
  account_holder: string;
  account_number: string;
}

/**
 * 작가 계좌 정보 저장을 위한 React Query 훅
 * @returns mutate 함수와 상태 반환
 * @author 노찬영
 */
export const useSaveAuthorBankInfo = () => {
  const {
    mutate: saveBankInfo,
    isPending,
    error,
  } = useMutation<
    TGetResponse<SaveBankInfoParams>,
    AxiosError<{ message: string }>,
    SaveBankInfoParams
  >({
    mutationFn: saveAuthorBankInfo,
    onSuccess: () => {
      toast.success('계좌 정보가 성공적으로 저장되었습니다.');
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || '계좌 정보 저장에 실패했습니다.';
      toast.error(errorMessage);
    },
  });

  return { saveBankInfo, isPending, error };
};
