import styled from "@emotion/styled";
import theme from "@styles/theme.ts";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
`;

export const StyledInput = styled.input`
  padding: 10px 16px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.lightGray};
  background: ${theme.colors.white};
  color: ${theme.colors.secondary};
  text-align: left;
  ${theme.typography["16"]}
  flex: 1;
  height: 26px;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
`;
