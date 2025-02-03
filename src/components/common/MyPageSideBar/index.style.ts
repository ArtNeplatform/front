import styled from "@emotion/styled";
import theme from "@styles/theme.ts";

export const Container = styled.div`
  width: 250px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.div<{ isActive: boolean }>`
  padding: 12px 24px;
  cursor: pointer;
  ${theme.typography["14"]}
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.lightGray};
  box-shadow: ${({ isActive }) =>
    isActive ? `inset 2px 0 0 ${theme.colors.black}` : "none"};
`;
