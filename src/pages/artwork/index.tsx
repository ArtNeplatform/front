import { PageLayout } from '@/components/common/PageLayout';
import { Text } from '@/styles/text';
import { Container } from './index.style.ts';

export const Artwork = () => {
  return (
    <>
      <PageLayout>
        <Container>
          <Text size={20} color="black" weight="semibold">
            아트
          </Text>
        </Container>
      </PageLayout>
    </>
  );
};
