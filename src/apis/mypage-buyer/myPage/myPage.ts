import { instance } from '@/apis/axios';
import { TBuyerMypage } from './type';
import { TGetResponse } from '@/apis/type';

/**
 * 작품 구매자의 마이페이지 정보를 조회하는 API 호출 함수
 * @returns 사용자 마이페이지 정보(TBuyerMypage)
 * @author 노찬영
 **/
export const getBuyerMypage = async (): Promise<TBuyerMypage> => {
  const BUYER_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh5c29uZzR1QGdtYWlsLmNvbSIsImlhdCI6MTczOTU1MzczMSwiZXhwIjoxNzQyMTQ1NzMxfQ.6ePJhRS1JUNK9BPIOk9oXrYoggois21uBtGsp4gvKrU';

  try {
    // 작품 구매자 토큰 별도 저장
    localStorage.setItem('access_token', BUYER_TOKEN);
    const response = await instance.get<TGetResponse<TBuyerMypage>>(
      `/api/mypage`,
      {
        headers: {
          Authorization: `Bearer ${BUYER_TOKEN}`,
        },
      }
    );
    return response.data.result;
  } finally {
    // 요청 후 localStorage에서 토큰 제거
    localStorage.removeItem('access_token');
  }
};
