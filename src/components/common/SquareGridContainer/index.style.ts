import styled from '@emotion/styled';

interface GridContainerProps {
  $columnCount: number;
}

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: repeat(${({ $columnCount }) => $columnCount}, 1fr);
  gap: 16px;
  width: 100%;
`;

export const GridItem = styled.div`
  aspect-ratio: 1;
  width: 100%;
  position: relative;
`;
