import styled from '@emotion/styled';

interface ButtonProps {
  $color: string;
  $borderColor: string;
  $background: string;
  $borderRadius: string;
  $disabled: boolean;
}

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 30px;
  ${(theme) => theme.theme.typography['13']};
  color: ${(props) => props.$color};
  border: 1px solid ${(props) => props.$borderColor};
  background-color: ${(props) => props.$background};
  border-radius: ${(props) => props.$borderRadius};
  width: fit-content;
  cursor: pointer;
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.$disabled ? 'none' : 'auto')};
`;
