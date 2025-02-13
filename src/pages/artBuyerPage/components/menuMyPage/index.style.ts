import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const MyPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${theme.colors.white};
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-right: 100px;
  background-color: ${theme.colors.white};
`;

export const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 1080px;
  gap: 80px;
  background-color: ${theme.colors.white};
`;

