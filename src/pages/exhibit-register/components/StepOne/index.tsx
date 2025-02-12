import { Text } from '@/styles/text';
import {
  StepContainer,
  GalleryList,
  SelectedGallery,
  GalleryImage,
  SelectedGalleryDisplay,
  DisplayImage,
  Container,
} from './index.style';
import { TGetBackgroundImagesResponse } from '@/apis/exhibitRegister/types';
interface StepOneProps {
  handleBackgroundSelect: (url: string) => void;
  selectedBackground: string | null;
  backgroundImages: TGetBackgroundImagesResponse[];
}

export const StepOne = ({
  handleBackgroundSelect,
  selectedBackground,
  backgroundImages,
}: StepOneProps) => {
  return (
    <Container>
      <StepContainer>
        <GalleryList>
          {backgroundImages.length > 0 ? (
            backgroundImages.map((gallery) => (
              <SelectedGallery
                key={gallery.id}
                onClick={() => handleBackgroundSelect(gallery.background_url)}
              >
                <GalleryImage
                  src={gallery.background_url}
                  alt={gallery.name}
                  selected={selectedBackground === gallery.background_url}
                />
                <Text size={16} color="black">
                  {gallery.name}
                </Text>
              </SelectedGallery>
            ))
          ) : (
            <Text size={18} color="gray">
              배경 이미지를 추가해주세요
            </Text>
          )}
        </GalleryList>
        <SelectedGalleryDisplay>
          {selectedBackground ? (
            <DisplayImage src={selectedBackground} alt="선택된 배경" />
          ) : (
            <Text size={18} color="gray">
              배경 이미지를 선택하세요
            </Text>
          )}
        </SelectedGalleryDisplay>
      </StepContainer>
    </Container>
  );
};
