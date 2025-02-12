import { useSuspenseQuery } from '@tanstack/react-query';
import { getArtworks } from '@/apis/artwork/artwork';
import { TArtworkResponse } from '@/apis/artwork/type';
import { toast } from 'sonner';
import { AxiosError } from 'axios';

/**
 * 특정 작품의 상세 정보를 가져오는 React Query 커스텀 훅
 * @author 김서윤
 */
export const useGetArtworks = (page: number, pageSize: number) => {
  const {
    data: artworkData,
    isLoading,
    error,
  } = useSuspenseQuery<TArtworkResponse>({
    queryKey: ['artworks', page, pageSize],
    queryFn: () => getArtworks(page, pageSize),
    staleTime: 1000 * 60 * 30, // 30분
    gcTime: 1000 * 60 * 15, // 15분
  });

  if (error) {
    const axiosError = error as AxiosError<TArtworkResponse>;
    const errorMessage =
      axiosError.response?.data?.message ||
      '작품 상세 정보를 불러오는 데 실패했습니다.';
    toast.error(errorMessage);
  }

  return { artworkData, isLoading, error };
};
