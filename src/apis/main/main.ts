import { instance } from '@/apis/axios';
import { TMainResult } from './type';
import { TGetResponse } from '@apis/type';

/**
 * 메인 페이지 데이터를 조회하는 API 호출 함수
 * @returns 메인 페이지 정보(TMainResponse)
 * @author 김서윤
 **/
export const getMainData = async (): Promise<TMainResult> => {
  const response = await instance.get<TGetResponse<TMainResult>>(`/api/main`);
  return response.data.result;
};
