import { instance } from '../axios';
import { TGetResponse } from '../type';
import { TOauthLoginWithCode } from './type';
type TAuthResponse = {
  isComplete: boolean;
  token: string;
};

/**
 * 카카오 로그인 창 열기
 * @author 홍규진
 */
export const initiateKakaoLogin = () => {
  window.location.href = `${
    import.meta.env.VITE_APP_SERVER_URL
  }/auth/oauth/kakao`;
};

/**
 * 구글 로그인 창 열기
 * @author 홍규진
 */
export const initiateGoogleLogin = () => {
  window.location.href = `${
    import.meta.env.VITE_APP_SERVER_URL
  }/auth/oauth/google`;
};

/**
 * 로그인 후 인가 코드로 사용자 정보 요청
 * @param data 인가 코드와 소셜 타입
 * @author 홍규진
 */
export const postOauthLoginWithCode = async (
  data: TOauthLoginWithCode
): Promise<TAuthResponse> => {
  const response = await instance.post<TGetResponse<TAuthResponse>>(
    '/auth/login',
    data
  );
  console.log('response', response.data.result);
  return response.data.result; // 토큰 또는 미완성 토큰 반환
};
