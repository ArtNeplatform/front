import { instance } from '@/apis/axios';
import { TBuyerMypage } from './type';
import { TGetResponse } from '@/apis/type';

/**
 * 작품 구매자의 마이페이지 정보를 조회하는 API 호출 함수
 * @returns 사용자 마이페이지 정보(TBuyerMypage)
 * @author 노찬영
 **/
export const getBuyerMypage = async (): Promise<TBuyerMypage> => {
  const DUMMY_ACCESS_TOKEN = localStorage.getItem('accessToken'); // 기존 토큰 저장
  const BUYER_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh5c29uZzR1QGdtYWlsLmNvbSIsImlhdCI6MTczOTU1MzczMSwiZXhwIjoxNzQyMTQ1NzMxfQ.6ePJhRS1JUNK9BPIOk9oXrYoggois21uBtGsp4gvKrU';

  try {
    // 기존 토큰 삭제 후 구매자 토큰 저장
    localStorage.removeItem('accessToken');
    localStorage.setItem('accessToken', BUYER_TOKEN);

    const response = await instance.get<TGetResponse<TBuyerMypage>>(
      `/api/mypage`
    );

    return response.data.result;
  } finally {
    // 원래 있던 DUMMY_ACCESS_TOKEN으로 복원
    localStorage.setItem('accessToken', DUMMY_ACCESS_TOKEN ?? '');
  }
};
