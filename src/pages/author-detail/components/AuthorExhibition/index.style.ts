import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 두 개씩 한 줄에 배치 */
  gap: 20px;
`;
