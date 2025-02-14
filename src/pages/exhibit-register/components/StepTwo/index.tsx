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
import { TGetExhibitAvailableArtworksResponse } from '@/apis/exhibit-register/types';

interface StepTwoProps {
  handleOverlaySelect: (url: string) => void;
  selectedBackground: string | null;
  selectedOverlay: string | null;
  availableArtworks: TGetExhibitAvailableArtworksResponse[] | undefined;
}

/**
 * 전시 등록 페이지 2단계 컴포넌트
 * @author 홍규진
 * */
export const StepTwo = ({
  handleOverlaySelect,
  selectedBackground,
  selectedOverlay,
  availableArtworks,
}: StepTwoProps) => {
  const artworks = availableArtworks;
  console.log(artworks);
  return (
    <Container>
      <StepContainer>
        <GalleryList>
          {artworks?.map((artwork) => (
            <SelectedGallery
              key={artwork.id}
              onClick={() => handleOverlaySelect(artwork.thumbnail_image_url)}
            >
              <GalleryImage
                src={artwork.thumbnail_image_url}
                alt={artwork.title}
                selected={selectedOverlay === artwork.thumbnail_image_url}
              />
              <Text size={16} color="black">
                {artwork.title}
              </Text>
            </SelectedGallery>
          ))}
        </GalleryList>
        <SelectedGalleryDisplay>
          {selectedBackground ? (
            <DisplayImage src={selectedBackground} alt="선택된 오버레이" />
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
