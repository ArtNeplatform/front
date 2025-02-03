import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  display: inline-flex;
  width: 100%;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  background-color: ${theme.colors.white};
`;

export const Button = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${theme.colors.black};
  ${(theme) => theme.theme.typography['16']}
  border: none;
  background: white;
  cursor: pointer;
`;
