import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TGetExhibitAvailableArtworksResponse } from './types';
/**
 * 전시 가능 작품 조회 API
 * @author 홍규진
 * */
export const getExhibitAvailableArtwork = async (): Promise<
  TGetExhibitAvailableArtworksResponse[]
> => {
  const response = await instance.get<
    TGetResponse<TGetExhibitAvailableArtworksResponse[]>
  >('/api/author/artworks');
  return response.data.result;
};
