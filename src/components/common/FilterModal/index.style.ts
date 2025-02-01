import styled from '@emotion/styled';
import theme from '@styles/theme.ts';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 16px;
  gap: 20px;
  width: 300px;
  height: fit-content;

  background-color: ${theme.colors.white};
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.06);
`;

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;
`;
