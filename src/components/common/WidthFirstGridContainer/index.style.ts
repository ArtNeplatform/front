import styled from '@emotion/styled';

interface GridContainerProps {
  $columnCount: number;
}

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: repeat(${({ $columnCount }) => $columnCount}, 1fr);
  gap: 1rem;
  width: 100%;
`;
