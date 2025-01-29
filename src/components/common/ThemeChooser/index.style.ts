import styled from "@emotion/styled";
import theme from "@styles/theme.ts";

export const Wrapper = styled.div`
  display: flex;
  width: 99.6rem;
  align-items: center;

  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.lineLightColor};
`;

export const ThemeButton = styled.button<{ $isActive: boolean }>`
  width: 100%;
  padding: 1.4rem 1.6rem;
  border: none;
  &:hover {
    cursor: pointer;
  }

  ${theme.typography["16"]}
  text-align: center;
  text-overflow: ellipsis;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.black : "transparent"};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.white : theme.colors.font03gray};
  transition: background-color 0.2s ease, color 0.2s ease;
`;
