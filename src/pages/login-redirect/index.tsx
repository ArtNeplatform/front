import { PageLayout } from '@/components/common/PageLayout';
import { useEffect } from 'react';
import { Container } from '../login/index.style';
import { Text } from '@/styles/text';
import { useOauthLoginMutation } from '../login/hooks/useOauthLogin';
export const LoginRedirect = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code'); // URL에서 인가 코드 추출
  const provider = urlParams.get('social_type');
  const { mutate: oauthLoginMutation } = useOauthLoginMutation(
    code as string,
    provider as string
  );
  useEffect(() => {
    console.log('code', code);
    console.log('provider', provider);
    // 소셜 로그인 처리
    oauthLoginMutation();
  }, []);

  return (
    <PageLayout>
      <Container>
        <Text size={24} weight="semibold">
          소셜 로그인중...
        </Text>
      </Container>
    </PageLayout>
  );
};
