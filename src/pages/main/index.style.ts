import styled from '@emotion/styled';
// import theme from '@styles/theme.ts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 80px;
  gap: 80px;
`;

export const SubContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  justify-content: space-between;
  align-items: center;
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ArtWorkContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

export const AuthorContainer = styled.div`
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
  background-color: #f8f8fa;
  margin-left: -28px;
`;

export const AuthorInformContainer = styled.div`
  padding: 40px 0 8px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 100px;
`;

export const AuthorArtwork = styled.img`
  width: 50%;
  aspect-ratio: 1118 / 653;
  height: auto;
  object-fit: cover;
`;

export const InformTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const FiveAuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const AuthorName = styled.div<{ $isSelected: boolean }>`
  padding: 6px 0;
  border-bottom: ${({ $isSelected, theme }) =>
    $isSelected ? `1px solid ${theme.colors.black}` : `1px solid #f8f8fa`};
  cursor: pointer;
`;

export const ExhibitContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const ExhibitRightContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 40px;
`;
