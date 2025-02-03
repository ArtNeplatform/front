import styled from "@emotion/styled";
import theme from "@styles/theme.ts";

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1px;
`;

export const StyledButton = styled.button<{ active: boolean }>`
  width: 32px;
  height: 32px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.white};
  border: none;
  cursor: pointer;
  ${theme.typography["14"]}
  ${(props) =>
    props.active &&
    `
    color: ${theme.colors.black};
    font-weight: 600;
  `}

  ${(props) =>
    !props.active &&
    `
    color: ${theme.colors.gray};
  `}
`;

export const PageButton = styled.div<{ active: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${theme.colors.white};
  ${theme.typography["14"]}
  ${(props) =>
    props.active
      ? `
        font-weight: 600;
        color: ${theme.colors.black};
      `
      : `
        color: ${theme.colors.gray};
      `}
`;

export const IconButton = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
  }
`;
