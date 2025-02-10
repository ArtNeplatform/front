import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const MyCollectionContainer = styled.div`
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
  border-bottom: 1px solid ${theme.colors.borderBottom};
`;

export const ArtworkItem = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: relative;

  div {
    color: ${theme.colors.fontGray};
    ${theme.typography['14']}
    font-weight: 400;
  }
`;

export const ArtworkImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;

  &:hover .overlay {
    opacity: 1;
    visibility: visible;
  }
`;

export const ArtworkImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const ArtworkOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(200px - 22px);
  height: 36px;
  padding: 0 11px;

  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: flex-end;
  align-items: center;

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;

export const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  font-size: 20px;
  color: white;
`;

export const ArtistName = styled.h3`
  width: 100%;
  height: auto;
  margin: 0;

  color: ${theme.colors.black};
  ${theme.typography['14']}
  font-weight: 600;
`;

export const ArtworkName = styled.span`
  width: 176px;
  height: 40px;
  margin-bottom: 8px;

  color: ${theme.colors.black};
  ${theme.typography['14']}
  font-weight: 400;
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
