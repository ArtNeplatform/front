import { TGetArtistListRequestParams, TGetArtistListResponse } from '@apis/Example/type.ts';
import { getArtistListQuery } from '@constants/queryKeys.ts';
import { useSuspenseQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { getArtistList } from '@apis/Example/artist.ts';

export const useGetArtistList = ({ page, keyword }: TGetArtistListRequestParams) => {
  const {
    data: artistListData,
    isLoading,
    error,
  } = useSuspenseQuery<TGetArtistListResponse>({
    queryKey: getArtistListQuery().queryKey,
    queryFn: () => getArtistList({ page, keyword }),
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 40, // 40분
  });

  if (error) {
    toast.error(error.message);
  }

  return { artistListData, isLoading, error };
};
