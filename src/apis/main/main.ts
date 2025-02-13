import { instance } from '@/apis/axios';
import { TMainResponse } from './type';

/**
 * 메인 페이지 데이터를 조회하는 API 호출 함수
 * @returns 메인 페이지 정보(TMainResponse)
 * @author 김서윤
 **/
export const getMainData = async (): Promise<TMainResponse> => {
  const token = localStorage.getItem('token');
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  try {
    const response = await instance.get<TMainResponse>(`/api/main`, {
      headers,
    });
    return response.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response?.status === 401) {
      console.warn('❌ 인증 오류: 로그인 없이도 호출 가능해야 하는 API입니다.');
    } else {
      console.error('❌ API 호출 오류:', error.message);
    }
    throw error;
  }
};
