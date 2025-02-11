import { instance } from '@/apis/axios';
import { TAuthorArtworksExhibitionsResponseTypes } from './type';

/**
 * 작가의 작품, 경매 중인 작품, 진행 중인 전시 정보를 조회하는 API
 * @returns {TAuthorArtworksExhibitionsResponseTypes} API 응답 데이터
 * @throws {Error} API 요청 실패 시 오류 발생
 * @author 노찬영
 **/
export const getAuthorArtworksExhibitions =
  async (): Promise<TAuthorArtworksExhibitionsResponseTypes> => {
    const response =
      await instance.get<TAuthorArtworksExhibitionsResponseTypes>(
        '/api/author/artworks-exhibitions'
      );
    return response.data;
  };
