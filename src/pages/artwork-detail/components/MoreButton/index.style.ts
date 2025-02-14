import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 100px;
  outline: none;
  border: none;
  background-color: ${theme.colors.EditButton};
  gap: 4px;
  cursor: pointer;
`;

export const ArrowIcon = styled.img`
  width: 12px;
  height: 12px;
`;
