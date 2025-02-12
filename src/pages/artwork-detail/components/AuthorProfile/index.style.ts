import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Stats = styled.span`
  display: flex;
  ${(theme) => theme.theme.typography['13']}
  font-weight: 400;
  color: ${theme.colors.fontGray};
  gap: 6px;
`;
