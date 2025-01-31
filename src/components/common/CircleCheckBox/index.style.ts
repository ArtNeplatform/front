import styled from "@emotion/styled";
import theme from "@styles/theme.ts";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const CheckBox = styled.label<{ checked: boolean }>`
  width: 19px;
  height: 19px;
  border-radius: 50%;
  border: ${({ checked }) => (checked ? `1px solid #111` : `1px solid ${theme.colors.lightGray}`)};
  background: ${({ checked }) => (checked ? `#111` : `${theme.colors.white}`)};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

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

export const CircleIcon = styled.div`
  width: 8.636px;
  height: 8.636px;
  border-radius: 50%;
  background-color: ${theme.colors.white};
`;

export const Label = styled.label<{ checked: boolean }>`
  width: max-content;
  text-overflow: ellipsis;
  cursor: pointer;
  ${(theme) => theme.theme.typography["14"]}
  color: ${({ checked }) => (checked ? `#111` : `#767676`)};
`;
