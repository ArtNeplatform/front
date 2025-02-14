import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  height: 74px;
  gap: 16px;
  padding: 24px 31px 27px 14px;

  background-color: ${theme.colors.white};
`;

export const ProfileImage = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 74px;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

export const Name = styled.span`
  display: flex;
  ${(theme) => theme.theme.typography['24']}
  font-weight: 600;
  color: ${theme.colors.black};
`;

export const Stats = styled.span`
  display: flex;
  ${(theme) => theme.theme.typography['16']}
  font-weight: 400;
  color: ${theme.colors.fontGray};
  gap: 8px;
`;
