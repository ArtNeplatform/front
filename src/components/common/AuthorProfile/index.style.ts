import styled from "@emotion/styled";
import theme from "@/styles/theme";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2.4rem 3.1rem 2.7rem 1.4rem;
  width: 25.3rem;
  gap: 1.6rem;

  background-color: ${theme.colors.white};
`;

export const ProfileImage = styled.img`
  width: 7.4rem;
  height: 7.4rem;
  border-radius: 74px;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Name = styled.p`
  display: flex;
  ${(theme) => theme.theme.typography["16"]}
  font-weight: 600;
  color: ${theme.colors.black};
`;

export const Stats = styled.p`
  display: flex;
  ${(theme) => theme.theme.typography["16"]}
  font-weight: 400;
  color: ${theme.colors.fontGray};
`;
