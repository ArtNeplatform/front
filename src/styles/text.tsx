import styled from '@emotion/styled'; // macro 제거
import { Theme } from './theme';

interface TextProps {
  size: keyof Theme['typography'];
  color?: keyof Theme['colors'];
}

export const Text = styled.span<TextProps>`
  ${({ size, theme }) => theme.typography[size]}px;
  color: ${({ color, theme }) => (color ? theme.colors[color] : theme.colors.black)};
`;
