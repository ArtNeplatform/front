import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { postAuctionLikeMutation } from '@/constants/mutationKey';
import { postAuctionLike } from '@/apis/auction/postAuctionLike';

/**
 * 경매 좋아요 커스텀 훅
 * @returns null
 * @author 이하늘
 */
export const useAuctionLike = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<null, Error, { auctionId: number }>({
    mutationKey: postAuctionLikeMutation().mutationKey, // 고유 키
    mutationFn: ({ auctionId }) => postAuctionLike(auctionId), // API 호출
    onSuccess: () => {
      toast.success(`좋아요 변경 성공`);
      queryClient.invalidateQueries({
        queryKey: ['auctionDetails'],
      });
    },
    onError: () => {
      toast.error('좋아요를 변경하는 데 실패했습니다.');
    },
  });

  return {
    auctionLike: mutation.mutate,
    isAuctionLikePending: mutation.isPending,
  };
};
