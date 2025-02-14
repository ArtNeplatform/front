import styled from '@emotion/styled'; // macro 제거
import { Theme } from './theme';

interface TextProps {
  size: keyof Theme['typography'];
  color?: keyof Theme['colors'];
  weight?: 'regular' | 'medium' | 'semibold';
}
/**
 * 텍스트 스타일링을 위한 컴포넌트입니다.
 * 텍스트의 크기, 색상, 무게를 설정할 수 있습니다.
 * @param size 텍스트 크기
 * @param color 텍스트 색상
 * @param weight 텍스트 볼드 정도
 * @author 홍규진
 */
export const Text = styled.span<TextProps>`
  ${({ size, theme }) => theme.typography[size]};
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.black};
  font-weight: ${({ weight }) =>
    weight === 'semibold' ? 600 : weight === 'medium' ? 500 : 400};
`;
