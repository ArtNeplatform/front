import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { postAuctionUnlikeMutation } from '@/constants/mutationKey';
import { postAuctionUnlike } from '@/apis/auction/postAuctionUnlike';

/**
 * 경매 좋아요 취소 커스텀 훅
 * @returns null
 * @author 이하늘, 홍규진
 */
export const useAuctionUnlike = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<null, Error, { auctionId: number }>({
    mutationKey: postAuctionUnlikeMutation().mutationKey, // 고유 키
    mutationFn: ({ auctionId }) => postAuctionUnlike(auctionId), // API 호출
    onSuccess: () => {
      toast.success(`좋아요 변경 성공`);
      queryClient.invalidateQueries({
        queryKey: postAuctionUnlikeMutation().successMutationKey,
      });
    },
    onError: (error) => {
      toast.error(`좋아요 변경에 실패했습니다. ${error.message}`);
    },
  });

  return {
    auctionUnike: mutation.mutate,
    isAuctionUnikePending: mutation.isPending,
  };
};
