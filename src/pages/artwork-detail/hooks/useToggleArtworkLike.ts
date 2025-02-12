import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleArtworkLike } from '@/apis/artwork-like/like';
import { TToggleLikeResponse } from '@/apis/artwork-like/type';
import { toast } from 'sonner';

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

  const mutation = useMutation<TToggleLikeResponse, Error, LikeParams>({
    mutationFn: async ({ artworkId, isAuction }) => {
      console.log(isAuction);
      return toggleArtworkLike(artworkId);
    },
    onSuccess: (data, { artworkId }) => {
      toast.success(data.result.message);
      queryClient.invalidateQueries({ queryKey: ['artworkDetail', artworkId] });
    },
    onError: () => {
      toast.error('좋아요를 변경하는 데 실패했습니다.');
    },
  });

  return { toggleLike: mutation.mutate, isPending: mutation.isPending };
};
