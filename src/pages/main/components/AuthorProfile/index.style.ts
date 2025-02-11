import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Stats = styled.span`
  display: flex;
  ${(theme) => theme.theme.typography['18']}
  font-weight: 400;
  color: ${theme.colors.black};
  gap: 8px;
`;
