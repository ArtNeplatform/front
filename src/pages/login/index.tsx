import { PageLayout } from '@/components/common/PageLayout';
import { Text } from '@/styles/text';
import {
  Container,
  Header,
  SocialLoginButton,
  SocialLoginContainer,
} from './index.style';
import GoogleIcon from '@assets/svg/google.svg?react';
import KakaoIcon from '@assets/svg/kakao_talk.svg?react';
import { useKakaoLogin } from './hooks/useKakaotalkLogin';
import { useGoogleLogin } from './hooks/useGoogleLogin';
export const Login = () => {
  const { handleKakaoLogin } = useKakaoLogin();
  const { handleGoogleLogin } = useGoogleLogin();
  return (
    <PageLayout>
      <Container>
        <Header>
          <Text size={32} color="black" weight="semibold">
            회원가입
          </Text>
          <Text size={16} color="secondary">
            ArtNé에 오신 것을 환영해요!
          </Text>
        </Header>

        <SocialLoginContainer>
          <SocialLoginButton
            type="button"
            socialType="google"
            onClick={handleGoogleLogin}
          >
            <GoogleIcon />
            <Text size={16} color="primary">
              구글로 시작하기
            </Text>
          </SocialLoginButton>

          <SocialLoginButton
            type="button"
            socialType="kakao"
            onClick={handleKakaoLogin}
          >
            <KakaoIcon />
            <Text size={16} color="primary">
              카카오로 시작하기
            </Text>
          </SocialLoginButton>
        </SocialLoginContainer>
      </Container>
    </PageLayout>
  );
};
