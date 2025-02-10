import { Text } from '@/styles/text';
import {
  StepContainer,
  GalleryList,
  SelectedGallery,
  GalleryImage,
  SelectedGalleryDisplay,
  DisplayImage,
  Container,
} from './index.style.ts';

interface StepTwoProps {
  handleOverlaySelect: (url: string) => void;
  selectedOverlay: string | null;
}

export const StepTwo = ({
  handleOverlaySelect,
  selectedOverlay,
}: StepTwoProps) => {
  // API에서 작품 데이터 패칭 가정
  const artworks = [
    { id: '1', name: '작품 1', imageUrl: '/api/artworks/1' },
    { id: '2', name: '작품 2', imageUrl: '/api/artworks/2' },
  ];

  return (
    <Container>
      <StepContainer>
        <GalleryList>
          {artworks.map((artwork) => (
            <SelectedGallery
              key={artwork.id}
              onClick={() => handleOverlaySelect(artwork.imageUrl)}
            >
              <GalleryImage
                src={artwork.imageUrl}
                alt={artwork.name}
                selected={selectedOverlay === artwork.imageUrl}
              />
              <Text size={16} color="black">
                {artwork.name}
              </Text>
            </SelectedGallery>
          ))}
        </GalleryList>
        <SelectedGalleryDisplay>
          {selectedOverlay ? (
            <DisplayImage src={selectedOverlay} alt="선택된 오버레이" />
          ) : (
            <Text size={18} color="gray">
              오버레이 이미지를 선택하세요
            </Text>
          )}
        </SelectedGalleryDisplay>
      </StepContainer>
    </Container>
  );
};
