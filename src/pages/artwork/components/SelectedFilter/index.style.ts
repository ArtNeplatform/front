import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 8px;
  outline: none;
  border: none;
  background-color: ${theme.colors.buttonBackground};
  gap: 8px;
  width: max-content;
`;

export const CloseIcon = styled.img`
  width: 10px;
  height: 10px;
  cursor: pointer;
`;
