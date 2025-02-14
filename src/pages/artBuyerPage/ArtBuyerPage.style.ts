import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 0 245px auto;
  align-items: flex-end;
  margin-bottom: 200px;
  background-color: ${theme.colors.white};
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: ${theme.colors.white};
  padding: 80px 220px 100px 0;
`;
