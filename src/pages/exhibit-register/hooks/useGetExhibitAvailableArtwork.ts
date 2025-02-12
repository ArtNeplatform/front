import { getExhibitAvailableArtworkQuery } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

/**
 * 전시 등록시 등록 가능 작품 조회 훅
 * @author 홍규진
 * */
export const useGetExhibitAvailableArtwork = () => {
  const { data, error } = useQuery({
    queryKey: getExhibitAvailableArtworkQuery().queryKey,
    queryFn: getExhibitAvailableArtworkQuery().queryFn,
    staleTime: 1000 * 60 * 60 * 2, // 2시간
    gcTime: 1000 * 60 * 60 * 1.5, // 1.5시간
  });
  if (error) {
    toast.error(error.message);
  }
  return {
    data,
  };
};
