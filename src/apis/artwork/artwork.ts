import { instance } from '@/apis/axios';
import { TArtworkResponse } from './type';

/**
 * 특정 작품의 상세 정보를 가져오는 API 함수
 * @author 김서윤
 */
export const getArtworks = async (
  page: number,
  pageSize: number
): Promise<TArtworkResponse> => {
  const token = localStorage.getItem('token');
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  try {
    const response = await instance.get<TArtworkResponse>('/api/artworks', {
      headers,
      params: { page, pageSize },
    });

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('작품 리스트 API 호출 오류:', error);
    throw error;
  }
};
