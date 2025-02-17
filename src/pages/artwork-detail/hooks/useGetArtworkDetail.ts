import { useSuspenseQuery } from '@tanstack/react-query';
import { TArtworkDetailResult } from '@/apis/artworkDetail/type';
import { getArtworkDetailQuery } from '@/constants/queryKeys';
import { handleError } from '@/utils/handleError';
/**
 * 특정 작품의 상세 정보를 가져오는 React Query 커스텀 훅
 * @param artworkId 작품 ID
 * @returns {object} artworkData, isLoading, error 상태 반환
 * @author 김서윤, 홍규진
 */
export const useGetArtworkDetail = (artworkId: number) => {
  const {
    data: artworkData,
    isLoading,
    error,
  } = useSuspenseQuery<TArtworkDetailResult>({
    queryKey: [...getArtworkDetailQuery(artworkId).queryKey],
    queryFn: getArtworkDetailQuery(artworkId).queryFn,
    staleTime: 1000 * 60 * 30, // 30분
    gcTime: 1000 * 60 * 15, // 15분
  });

  if (error) {
    handleError(error);
  }

  return { artworkData, isLoading, error };
};
