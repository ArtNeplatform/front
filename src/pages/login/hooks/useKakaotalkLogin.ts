import 'kakao-js-sdk';
import { useCallback } from 'react';
/**
 * 카카오 로그인 커스텀훅입니다.
 * 카카오 로그인 페이지로 이동하고, 로그인 성공 시 토큰을 받아옵니다.
 * 토큰을 받아오면 로그인 상태를 업데이트합니다.
 * @author 홍규진
 */

export const useKakaoLogin = () => {
  const handleKakaoLogin = useCallback(async () => {
    try {
      if (!Kakao.isInitialized()) {
        console.error('Kakao SDK가 초기화되지 않았습니다.');
        return;
      }

      const settings = {
        redirectUri: 'http://localhost:5173/login',
        scope: 'account_email, profile_nickname, profile_image',
        prompts: 'login',
        throughTalk: true,
      };

      const authCode = Kakao.Auth.authorize(settings);
      console.log('인가 코드:', authCode);
    } catch (error) {
      console.error('카카오 로그인 중 오류 발생:', error);
    }
  }, []);

  return { handleKakaoLogin };
};
