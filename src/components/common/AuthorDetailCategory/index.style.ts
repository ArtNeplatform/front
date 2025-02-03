import styled from "@emotion/styled";
import theme from "@styles/theme.ts";

type MenuProps = {
  isActive: boolean;
};

export const Container = styled.div`
  background: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Menu = styled.div<MenuProps>`
  padding: 20px 32px;
  color: ${({ isActive }) =>
    isActive ? theme.colors.black : theme.colors.gray};
  ${theme.typography["16"]}
  line-height: 26px;
  font-weight: ${({ isActive }) => (isActive ? 500 : 400)};
  border-bottom: ${({ isActive }) =>
    isActive ? `1px solid ${theme.colors.black}` : "none"};
  cursor: pointer;
`;
