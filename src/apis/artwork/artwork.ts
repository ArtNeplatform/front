import { instance } from '@/apis/axios';
import { TArtWorkResult } from './type';
import { TGetResponse } from '@apis/type';

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
): Promise<TArtWorkResult> => {
  // 선택된 필터들을 콤마(,)로 구분된 문자열로 변환
  const queryParams = {
    page,
    pageSize,
    themes: themes.length > 0 ? themes.join(',') : undefined,
    sizes: sizes.length > 0 ? sizes.join(',') : undefined,
    forms: forms.length > 0 ? forms.join(',') : undefined,
    sort: sortingKey,
  };

  const response = await instance.get<TGetResponse<TArtWorkResult>>(
    '/api/artworks',
    {
      params: queryParams,
    }
  );

  return response.data.result;
};
