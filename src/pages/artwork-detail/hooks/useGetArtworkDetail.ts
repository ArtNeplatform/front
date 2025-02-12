import { useSuspenseQuery } from '@tanstack/react-query';
import { getArtworkDetail } from '@/apis/artwork-detail/artwork';
import { TArtworkDetailResponse } from '@/apis/artwork-detail/type';
import { toast } from 'sonner';
import { AxiosError } from 'axios';

/**
 * 특정 작품의 상세 정보를 가져오는 React Query 커스텀 훅
 * @param artworkId 작품 ID
 * @returns {object} artworkData, isLoading, error 상태 반환
 * @author 김서윤
 */
export const useGetArtworkDetail = (artworkId: number) => {
  const {
    data: artworkData,
    isLoading,
    error,
  } = useSuspenseQuery<TArtworkDetailResponse>({
    queryKey: ['artworkDetail', artworkId],
    queryFn: () => getArtworkDetail(artworkId),
    staleTime: 1000 * 60 * 30, // 30분
    gcTime: 1000 * 60 * 15, // 15분
  });

  if (error) {
    const axiosError = error as AxiosError<TArtworkDetailResponse>;
    const errorMessage =
      axiosError.response?.data?.message ||
      '작품 상세 정보를 불러오는 데 실패했습니다.';
    toast.error(errorMessage);
  }

  return { artworkData, isLoading, error };
};
