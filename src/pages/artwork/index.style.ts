import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = styled.div`
  padding: 0 20px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrapper = styled.div`
  padding: 70px 0;
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

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;
`;

export const FilterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FilterSelectedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const FilterInitContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
`;

export const InitIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const MiniLine = styled.div`
  width: 1px;
  height: 14px;
  background-color: ${theme.colors.grayLine};
`;

export const SelectedFilterContainer = styled.div`
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
