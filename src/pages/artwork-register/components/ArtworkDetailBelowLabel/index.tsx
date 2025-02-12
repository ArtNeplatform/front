/**
 * 기존의 Text 컴포넌트를 이용해 라벨을 띄워주고
 * 하단의 children에 따라 각기 다른 컴포넌트를 렌더링합니다.
 * @author 홍규진
 */

import { Text } from '@/styles/text';
import { Container } from './index.style';

export const ArtworkDetailBelowLabel = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <Container>
      <Text size={16} color="secondary">
        {label}
      </Text>
      {children}
    </Container>
  );
};
