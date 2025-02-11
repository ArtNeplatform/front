import styled from '@emotion/styled';

interface CarouselIndexProps {
  $isActive: boolean;
}

export const CarouselContainer = styled.div`
  width: 100vw;
  aspect-ratio: 1920 / 1037;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-left: -28px;
  position: relative;
`;

export const CarouselImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  transition: transform 0.5s ease-in-out;
`;

export const CarouselItem = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  flex-shrink: 0;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const CarouselIndexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CarouselIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CarouselIndex = styled.div<CarouselIndexProps>`
  width: 40px;
  height: 2px;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.white : 'rgba(255, 255, 255, 0.2)'};
  transition: background-color 0.5s ease-in-out;
  cursor: pointer;
`;

export const CarouselAnimate = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  left: 120px;
`;

export const ArrowBox = styled.div`
  width: 56px;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`;

export const ArrowBoxLeft = styled(ArrowBox)`
  left: 0;
`;

export const ArrowBoxRight = styled(ArrowBox)`
  right: 0;
`;

export const Arrow = styled.img`
  width: 36px;
  height: 36px;
`;
