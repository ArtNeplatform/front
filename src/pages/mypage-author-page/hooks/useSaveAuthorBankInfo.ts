import { useMutation, useQueryClient } from '@tanstack/react-query';
import { saveAuthorBankInfoMutation } from '@/constants/queryKeys';
import { toast } from 'sonner';

/**
 * 작가 계좌 정보 저장을 위한 커스텀 뮤테이션 훅
 * @returns 뮤테이션 객체와 상태(onSuccess, onError 핸들링 포함)
 * @author 노찬영, 홍규진
 */
export const useSaveAuthorBankInfo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: saveAuthorBankInfoMutation().mutationKey,
    mutationFn: saveAuthorBankInfoMutation().mutationFn,
    onSuccess: () => {
      // 저장 성공 시, 관련 쿼리 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ['authorProfile'] });
      toast.success('계좌 정보가 성공적으로 저장되었습니다.');
    },
    onError: (error) => {
      toast.error(`계좌 정보 저장 중 오류 발생: ${error.message}`);
    },
  });
};
