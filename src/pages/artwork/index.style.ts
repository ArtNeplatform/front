import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0 20px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrapper = styled.div`
  padding: 100px 0 64px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FilterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px 0;
  gap: 24px;
  width: 100%;
`;

export const ArtworkContainer = styled.div`
  position: 'relative';
`;

export const StartPrice = styled.span`
  position: 'absolute';
  bottom: '10px';
  right: '10px';
  color: 'white';
  padding: '5px 10px';
`;
