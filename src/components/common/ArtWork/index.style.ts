import styled from '@emotion/styled';

// 스타일 컴포넌트들 정의
export const ArtworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const ArtworkInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 0;
`;
export const GlassmorphismOverlay = styled.div<{ hoverable: boolean }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

export const HeartButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  svg {
    width: 32px;
    height: 32px;
    transition: all 0.2s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Artist = styled.p`
  ${(theme) => theme.theme.typography['14']}
  margin: 0;
`;

export const Title = styled.p`
  ${(theme) => theme.theme.typography['16']}
  margin: 0;
`;

export const Size = styled.p`
  color: ${(theme) => theme.theme.colors.gray};
  ${(theme) => theme.theme.typography['14']}
  margin: 0;
`;

export const Price = styled.p`
  color: ${(theme) => theme.theme.colors.black};
  ${(theme) => theme.theme.typography['18']}
  margin: 0;
`;
