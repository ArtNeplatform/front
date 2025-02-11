import styled from '@emotion/styled';
import theme from '@styles/theme.ts';

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 14px;
  border-radius: 100px;
  outline: none;
  border: 1px solid rgba(17, 17, 17, 0.1);
  background-color: ${theme.colors.white};
  gap: 2px;
  cursor: pointer;
`;

export const ArrowIcon = styled.img`
  width: 12px;
  height: 12px;
`;
