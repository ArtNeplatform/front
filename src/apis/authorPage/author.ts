import { instance } from '@/apis/axios';
import {
  AuthorProfileType,
  TAuthorArtworksExhibitions,
  TAuthorProfile,
  TUpdateAuthorInfo,
} from './type';
import { TGetResponse } from '../type';

export type TAuthorProfileResponse = TGetResponse<TAuthorProfile>;

/**
 * 작가 프로필 조회 API 호출 함수
 * @param type - 조회할 프로필 타입 ('default', 'intro', 'info')
 * @returns API 응답(TAuthorProfileResponse)
 * @throws {Error} API 요청 실패 시 오류 발생
 * @author 노찬영
 **/
export const getAuthorProfile = async (
  type: AuthorProfileType
): Promise<TAuthorProfileResponse> => {
  try {
    const response = await instance.get<TAuthorProfileResponse>(
      `/api/author?type=${type}`
    );
    return response.data;
  } catch (error) {
    console.error('작가 프로필 조회 실패:', error);
    throw error;
  }
};

/**
 * 작가의 작품, 경매 중인 작품, 진행 중인 전시 정보를 조회하는 API
 * @returns {TAuthorArtworksExhibitions} API 응답 데이터
 * @throws {Error} API 요청 실패 시 오류 발생
 * @author 노찬영
 **/
export const getAuthorArtworksExhibitions =
  async (): Promise<TAuthorArtworksExhibitions> => {
    const response = await instance.get<TAuthorArtworksExhibitions>(
      '/api/author/artworks-exhibitions'
    );
    return response.data;
  };

/**
 * 작가 정보 수정 API 호출 함수
 * @param authorId - 작가 ID
 * @param authorInfo - 수정할 작가 정보 (nickname, address, birth, author_image_url, introduction_image_url)
 * @returns API 응답(TGetResponse)
 * @throws {Error} API 요청 실패 시 오류 발생
 * @author 노찬양
 **/
export const updateAuthorInfo = async (
  authorId: number,
  authorInfo: TUpdateAuthorInfo
): Promise<TGetResponse<null>> => {
  try {
    const response = await instance.patch<TGetResponse<null>>(
      `/api/author/update`,
      authorInfo
    );
    return response.data;
  } catch (error) {
    console.error('작가 정보 수정 실패:', error);
    throw error;
  }
};
