/**
 * 구글 로그인 커스텀훅입니다.
 * 구글 로그인 페이지로 이동하고, 로그인 성공 시 토큰을 받아옵니다.
 * 토큰을 받아오면 로그인 상태를 업데이트합니다.
 * @author 홍규진
 */

import { useCallback } from 'react';

export const useGoogleLogin = () => {
  const handleGoogleLogin = useCallback(async () => {
    try {
      const settings = {
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        redirect_uri: 'http://localhost:5173/register',
        scope: 'email profile',
        response_type: 'code',
      };

      const authUrl = `https://accounts.google.com/o/oauth2/auth?${new URLSearchParams(
        settings
      ).toString()}`;
      console.log('구글 로그인 페이지로 이동:', authUrl);
      window.location.href = authUrl;
    } catch (error) {
      console.error('구글 로그인 중 오류 발생:', error);
    }
  }, []);

  return { handleGoogleLogin };
};
