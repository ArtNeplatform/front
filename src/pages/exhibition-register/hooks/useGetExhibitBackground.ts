import { getExhibitBackgroundImagesQuery } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { handleError } from '@/utils/handleError';
/**
 * 전시 등록시 최초 배경 이미지 조회 훅
 * @author 홍규진
 * */
export const useGetExhibitBackgroundImages = () => {
  const { data, error } = useSuspenseQuery({
    queryKey: getExhibitBackgroundImagesQuery().queryKey,
    queryFn: getExhibitBackgroundImagesQuery().queryFn,
    staleTime: 1000 * 60 * 60 * 2, // 2시간
    gcTime: 1000 * 60 * 60 * 1.5, // 1.5시간
  });
  if (error) {
    handleError(error);
  }
  return {
    data,
  };
};
