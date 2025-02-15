import styled from '@emotion/styled';
import theme from '@styles/theme.ts';

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const CheckBox = styled.label<{ checked: boolean }>`
  width: 19px;
  height: 19px;
  border: ${({ checked }) =>
    checked
      ? `1px solid ${theme.colors.black}`
      : `1px solid ${theme.colors.lightGray}`};
  background: ${({ checked }) =>
    checked ? `${theme.colors.black}` : `${theme.colors.white}`};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 5px;

  & > svg {
    position: absolute;
  }
`;

export const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CheckIconSvg = styled.img`
  width: 10px;
  fill: ${theme.colors.white};
`;

export const Label = styled.label<{ checked: boolean }>`
  width: max-content;
  text-overflow: ellipsis;
  cursor: pointer;
  ${(theme) => theme.theme.typography['14']}
  color: ${({ checked }) =>
    checked ? `${theme.colors.black}` : `${theme.colors.fontGray}`};
`;
