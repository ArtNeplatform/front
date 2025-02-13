import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  background: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
`;

export const ProfileImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

export const ArtistName = styled.p`
  ${(theme) => theme.theme.typography['20']}
  font-weight: bold;
  margin: 0;
`;

export const InfoText = styled.p`
  ${(theme) => theme.theme.typography['14']}
  color: gray;
  margin: 0;
`;
