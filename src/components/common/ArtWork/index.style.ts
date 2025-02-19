import theme from '@/styles/theme';
import styled from '@emotion/styled';

// 스타일 컴포넌트들 정의
export const ArtworkContainer = styled.div<{ $border: string }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: ${(props) => props.$border};
  cursor: pointer;
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ArtworkInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GlassmorphismOverlay = styled.div<{ hoverable: boolean }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 36px;
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
  bottom: 0;
  height: 36px;
  height: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
    padding: 4px;
    transition: all 0.2s ease;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Artist = styled.p`
  color: ${theme.colors.black};
  ${theme.typography['14']}
  font-weight: 600;
  margin: 0;
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  width: 176px;
  height: 40px;
  padding-bottom: 8px;
  color: ${theme.colors.black};
  ${theme.typography['14']}
  font-weight: 600;
  margin: 0;
`;

export const Size = styled.p`
  color: ${theme.colors.fontGray};
  ${theme.typography['14']}
  font-weight: 400;
  margin: 0;
`;

export const Period = styled.p`
  color: ${theme.colors.fontGray};
  ${theme.typography['13']}
  font-weight: 400;
  margin: 0;
`;

export const Price = styled.span`
  color: ${(theme) => theme.theme.colors.black};
  ${(theme) => theme.theme.typography['18']}
  margin: 0;
  margin-right: 10px;
`;

export const StartPrice = styled.span`
  color: ${(theme) => theme.theme.colors.fontGray};
  ${(theme) => theme.theme.typography['16']}
  margin: 0;
  text-decoration: line-through;
`;

export const PriceContainer = styled.div`
  display: 'flex';
  gap: '8px';
  align-items: 'center';
`;
