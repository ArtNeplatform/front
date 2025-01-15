import { TArtist } from '@/types/artist';

export type TGetArtistListResponse = TArtist[];

export type TGetArtistListRequestParams = {
  page?: number;
  keyword?: string;
};
