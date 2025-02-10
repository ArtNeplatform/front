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

interface StepOneProps {
  handleBackgroundSelect: (url: string) => void;
  selectedBackground: string | null;
}

export const StepOne = ({
  handleBackgroundSelect,
  selectedBackground,
}: StepOneProps) => {
  // API에서 갤러리 데이터 패칭 가정
  const galleries = [
    { id: '1', name: '갤러리 1', imageUrl: '/api/galleries/1' },
    { id: '2', name: '갤러리 2', imageUrl: '/api/galleries/2' },
  ];

  return (
    <Container>
      <StepContainer>
        <GalleryList>
          {galleries.map((gallery) => (
            <SelectedGallery
              key={gallery.id}
              onClick={() => handleBackgroundSelect(gallery.imageUrl)}
            >
              <GalleryImage
                src={gallery.imageUrl}
                alt={gallery.name}
                selected={selectedBackground === gallery.imageUrl}
              />
              <Text size={16} color="black">
                {gallery.name}
              </Text>
            </SelectedGallery>
          ))}
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
