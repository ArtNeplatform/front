import styled from '@emotion/styled';

export const ArtworkItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArtworkImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

export const Title = styled.p`
  margin-top: 20px;
  font-weight: bold;
`;
