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
import { TGetExhibitAvailableArtworksResponse } from '@/apis/exhibitRegister/types';
interface StepTwoProps {
  handleOverlaySelect: (url: string) => void;
  selectedOverlay: string | null;
  availableArtworks: TGetExhibitAvailableArtworksResponse | undefined;
}

export const StepTwo = ({
  handleOverlaySelect,
  selectedOverlay,
  availableArtworks,
}: StepTwoProps) => {
  // API에서 작품 데이터 패칭 가정
  const artworks = availableArtworks?.artworks || [];

  return (
    <Container>
      <StepContainer>
        <GalleryList>
          {artworks.length > 0 ? (
            artworks.map((artwork) => (
              <SelectedGallery
                key={artwork.id}
                onClick={() => handleOverlaySelect(artwork.image_url)}
              >
                <GalleryImage
                  src={artwork.image_url}
                  alt={artwork.title}
                  selected={selectedOverlay === artwork.image_url}
                />
                <Text size={16} color="black">
                  {artwork.title}
                </Text>
              </SelectedGallery>
            ))
          ) : (
            <Text size={18} color="gray">
              전시 가능 작품이 없습니다.
            </Text>
          )}
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
