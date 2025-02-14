import { instance } from '@/apis/axios';
import { TArtworkResponse } from './type';

/**
 * 특정 작품의 상세 정보를 가져오는 API 함수
 * @author 김서윤
 */
export const getArtworks = async (
  page: number,
  pageSize: number,
  themes: string[],
  sizes: string[],
  forms: string[],
  sortingKey?: 'latest' | 'popular'
): Promise<TArtworkResponse> => {
  // 선택된 필터들을 콤마(,)로 구분된 문자열로 변환
  const queryParams = {
    page,
    pageSize,
    themes: themes.length > 0 ? themes.join(',') : undefined,
    sizes: sizes.length > 0 ? sizes.join(',') : undefined,
    forms: forms.length > 0 ? forms.join(',') : undefined,
    sort: sortingKey,
  };

  try {
    const response = await instance.get<TArtworkResponse>('/api/artworks', {
      params: queryParams,
    });

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('작품 리스트 API 호출 오류:', error);
    throw error;
  }
};
