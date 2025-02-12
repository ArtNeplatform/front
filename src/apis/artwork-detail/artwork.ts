import { instance } from '@/apis/axios';
import { TArtworkDetailResponse } from './type';

/**
 * 특정 작품의 상세 정보를 가져오는 API 함수
 * @param artworkId 작품 ID
 * @returns 작품 상세 정보
 * @author 김서윤
 */
export const getArtworkDetail = async (
  artworkId: number
): Promise<TArtworkDetailResponse> => {
  const token = localStorage.getItem('token');
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  try {
    const response = await instance.get<TArtworkDetailResponse>(
      `/api/artworks/${artworkId}`,
      {
        headers,
      }
    );
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('🚨 작품 상세 정보 가져오기 실패:', error.message);
    throw error;
  }
};
