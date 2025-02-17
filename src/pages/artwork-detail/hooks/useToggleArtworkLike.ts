import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleArtworkLike } from '@/apis/artworkLike/like';
import { TToggleLikeResult } from '@/apis/artworkLike/type';
import { toast } from 'sonner';
import { toggleArtworkLikeMutation } from '@/constants/mutationKey';

interface LikeParams {
  artworkId: number;
  isAuction: boolean;
}

/**
 * 작품 좋아요 토글을 위한 커스텀 훅
 * @returns 좋아요 토글 함수
 * @author 김서윤
 */
export const useToggleArtworkLike = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<TToggleLikeResult, Error, LikeParams>({
    ...toggleArtworkLikeMutation, // mutationKey 추가됨
    mutationFn: async ({ artworkId, isAuction }) => {
      console.log(isAuction);
      return toggleArtworkLike(artworkId);
    },
    onSuccess: (data, { artworkId }) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: [...toggleArtworkLikeMutation(artworkId).mutationKey],
      });
    },
    onError: (error: Error) => {
      toast.error(`좋아요 변경에 실패했습니다. ${error.message}`);
    },
  });

  return { toggleLike: mutation.mutate, isPending: mutation.isPending };
};
