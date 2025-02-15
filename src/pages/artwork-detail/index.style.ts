import styled from '@emotion/styled';
import theme from '@styles/theme.ts';

interface ImageSingleProps {
  $isSingleImage: boolean;
}

interface ArrowProps {
  $isBig: boolean;
}

interface SpaceImageProps {
  $isSelected: boolean;
}

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

export const ImageContainer = styled.div<ImageSingleProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$isSingleImage ? '1fr' : '1fr 12fr'};
  gap: 35px;
  max-width: 70%;
`;

export const ImageList = styled.div<ImageSingleProps>`
  display: ${(props) => (props.$isSingleImage ? 'none' : 'flex')};
  flex-direction: column;
  gap: 20px;
`;

export const SmallImage = styled.img`
  width: 100%;
  min-width: 6vw;
  aspect-ratio: 1 / 1;
  height: auto;
  object-fit: cover;
  border: 1px solid ${theme.colors.imageBorder};
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
  min-width: 25%;
`;

export const LikeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px 70px;
  width: fit-content;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${theme.colors.black};
`;

export const PlusIcon = styled.img`
  width: 14px;
  height: 14px;
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
  border: 1px solid ${theme.colors.profileBox};

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

export const Arrow = styled.img<ArrowProps>`
  width: ${(props) => (props.$isBig ? '24px' : '16px')};
  height: auto;
  cursor: pointer;
`;

export const ArtworkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: flex-start;
  gap: 10px;
  min-height: 250px;
`;

export const ArtworkImage = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

// 내 공간 섹션
export const MySpaceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SpaceAllContainer = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  gap: 8px;
`;

export const SpaceImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SpaceImgContainer = styled.div<SpaceImageProps>`
  width: 100%;
  aspect-ratio: 125 / 75;
  height: auto;
  cursor: pointer;

  box-sizing: border-box;
  border: ${(props) =>
    props.$isSelected
      ? `1.5px solid ${theme.colors.black}`
      : `1.5px solid ${theme.colors.white}`};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) =>
      props.$isSelected ? `rgba(0, 0, 0, 0.4)` : `none`};
    pointer-events: none;
  }
`;

export const SpaceText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 가운데 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  ${(theme) => theme.theme.typography['14']};
  font-weight: medium;
  white-space: nowrap;
`;

export const BigSpaceContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AreaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
`;

export const AreaLine = styled.img`
  width: calc(50% - 32px);
  height: auto;
`;

export const BigSpaceImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BigImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 995 / 600;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpaceArtwork = styled.img<{ $width: number }>`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ $width }) => `${$width}px`};
  max-width: 20%;
  height: auto;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.15);
`;

export const SpaceButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 77px;
  outline: none;
  border: 1px solid ${theme.colors.lightGray};
  background-color: ${theme.colors.white};
  gap: 4px;
  cursor: pointer;
`;
