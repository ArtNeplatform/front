import { useSuspenseQuery } from '@tanstack/react-query';
import { getArtworks } from '@/apis/artwork/artwork';
import { TArtWorkResult } from '@/apis/artwork/type';

/**
 * 특정 작품의 상세 정보를 가져오는 React Query 커스텀 훅
 * @author 김서윤
 */
export const useGetArtworks = (
  page: number,
  pageSize: number,
  themes: string[],
  sizes: string[],
  forms: string[],
  sortingType: '이름순' | '최신순' | '인기순'
) => {
  const sortingKey =
    sortingType === '최신순'
      ? 'latest'
      : sortingType === '인기순'
      ? 'popular'
      : undefined;

  const {
    data: artworkData,
    isLoading,
    error,
  } = useSuspenseQuery<TArtWorkResult>({
    queryKey: ['artworks', page, pageSize, themes, sizes, forms, sortingKey],
    queryFn: () =>
      getArtworks(page, pageSize, themes, sizes, forms, sortingKey),
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 15,
  });

  return { artworkData, isLoading, error };
};
