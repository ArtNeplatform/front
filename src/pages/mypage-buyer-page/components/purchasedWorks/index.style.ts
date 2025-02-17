import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const PurchasedWorksContainer = styled.div`
  width: 1080px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: ${theme.colors.black};

  h1 {
    margin: 0;
    padding: 70px 0 20px;
    ${theme.typography['24']}
    font-weight: 600;
    border-bottom: 2px solid ${theme.colors.black};
  }
`;

export const ArtworkContainer = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  ${theme.typography['20']}
  font-weight: 600;
`;

export const ArtworkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px 20px;
  padding: 18px 0 64px;
`;

export const ExhibitionContainer = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
`;

export const ExhibitionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 76px 21px;
  margin: 19px 0 80px;
`;

export const ExhibitionItem = styled.div`
  width: 346px;
  height: 260px;

  h3 {
    color: ${theme.colors.black};
    ${theme.typography['14']}
    font-weight: 600;
  }
`;

export const ExhibitionImage = styled.img`
  width: 346px;
  height: 260px;
  object-fit: cover;
`;
