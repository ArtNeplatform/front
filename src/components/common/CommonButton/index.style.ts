import styled from '@emotion/styled';

interface ButtonProps {
  $color: string;
  $border: string;
  $background: string;
}

export const ButtonContainer = styled.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 30px;
  ${(theme) => theme.theme.typography['13']};
  color: ${(props) => props.$color};
  border: 1px solid ${(props) => props.$border};
  background-color: ${(props) => props.$background};
  border-radius: 100px;
  width: fit-content;
  cursor: pointer;
`;
