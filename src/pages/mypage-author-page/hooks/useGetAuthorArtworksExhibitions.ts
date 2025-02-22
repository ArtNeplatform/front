import { useSuspenseQuery } from '@tanstack/react-query';
import { getAuthorArtworksExhibitionsQuery } from '@/constants/queryKeys';
import { TAuthorArtworksExhibitions } from '@/apis/mypageAuthor/type';
import { handleError } from '@/utils/handleError';
/**
 * 작가의 작품, 경매 작품, 전시 정보를 가져오는 커스텀 훅
 * React Query의 useSuspenseQuery를 활용해 데이터를 가져옵니다.
 * 오류 발생 시 toast 알림을 통해 사용자에게 에러 메시지를 표시합니다.
 *
 * @returns {object} data, isLoading, error 상태 반환
 * @example const { data } = useGetAuthorArtworksExhibitions();
 * @author 노찬영, 홍규진
 **/
export const useGetAuthorArtworksExhibitions = () => {
  const { data, isLoading, error } =
    useSuspenseQuery<TAuthorArtworksExhibitions>({
      queryKey: getAuthorArtworksExhibitionsQuery().queryKey,
      queryFn: getAuthorArtworksExhibitionsQuery().queryFn,
      staleTime: 1000 * 60 * 30, // 30분
      gcTime: 1000 * 60 * 60, // 1시간
    });

  if (error) {
    handleError(error);
  }

  return { data, isLoading, error };
};
