import styled from '@emotion/styled';
import theme from '@styles/theme.ts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 80px;
  gap: 80px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr;
  gap: 35px;
  max-width: 70%;
`;

export const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SmallImage = styled.img`
  width: 100%;
  min-width: 6vw;
  aspect-ratio: 1 / 1;
  height: auto;
  object-fit: cover;
  border: 1px solid #e1e1e1;
  cursor: pointer;
`;

export const BigImage = styled.img`
  width: 55%;
  min-width: 35vw;
  aspect-ratio: 1 / 1;
  height: auto;
  object-fit: cover;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const LikeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 70px;
  width: fit-content;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${theme.colors.black};
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 80%;
`;

export const AuthorContainer = styled.div`
  width: 100%;
  padding: 22px 20px;
  box-sizing: border-box;
  border: 1px solid #e7e7e7;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Arrow = styled.img`
  width: 16px;
  height: auto;
  cursor: pointer;
`;

export const ArtworkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: flex-start;
  gap: 10px;
  min-height: 250px;
`;

export const ArtworkImage = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;
