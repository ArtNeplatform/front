import { instance } from '@/apis/axios';
import { TGetExhibitAvailableArtworksResponse } from '@/apis/exhibitRegister/types';
import { TGetResponse } from '@/apis/type';

/**
 * 전시 가능 작품 조회 API
 * @author 홍규진
 * */

export const getExhibitAvailableArtwork =
  async (): Promise<TGetExhibitAvailableArtworksResponse> => {
    const response = await instance.get<
      TGetResponse<TGetExhibitAvailableArtworksResponse>
    >('/api/exhibitions/artworks');
    console.log(response.data);

    return response.data.result;
  };
