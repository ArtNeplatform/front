import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  /* max-width: 1285px; */
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
`;

export const ArtworkItem = styled.div`
  width: 306px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ArtworkImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;
