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

import exhibitionImage1 from '@/assets/png/exhibit-register/exhibition_image_1.png';
import exhibitionImage2 from '@/assets/png/exhibit-register/exhibition_image_2.png';
import exhibitionImage3 from '@/assets/png/exhibit-register/exhibition_image_3.png';
import exhibitionImage4 from '@/assets/png/exhibit-register/exhibition_image_4.png';
import exhibitionImage5 from '@/assets/png/exhibit-register/exhibition_image_5.png';
import exhibitionImage6 from '@/assets/png/exhibit-register/exhibition_image_6.png';
import exhibitionImage7 from '@/assets/png/exhibit-register/exhibition_image_7.png';
import exhibitionImage8 from '@/assets/png/exhibit-register/exhibition_image_8.png';

interface StepOneProps {
  handleBackgroundSelect: (imageUrl: string) => void; // File -> string으로 변경
  selectedBackground: string | null; // File -> string으로 변경
}
interface Gallery {
  id: string;
  name: string;
  imagePath: string;
}

export const StepOne = ({
  handleBackgroundSelect,
  selectedBackground,
}: StepOneProps) => {
  const galleries: Gallery[] = [
    {
      id: '1',
      name: '갤러리 1',
      imagePath: exhibitionImage1,
    },
    {
      id: '2',
      name: '갤러리 2',
      imagePath: exhibitionImage2,
    },
    {
      id: '3',
      name: '갤러리 3',
      imagePath: exhibitionImage3,
    },
    {
      id: '4',
      name: '갤러리 4',
      imagePath: exhibitionImage4,
    },
    {
      id: '5',
      name: '갤러리 5',
      imagePath: exhibitionImage5,
    },
    {
      id: '6',
      name: '갤러리 6',
      imagePath: exhibitionImage6,
    },
    {
      id: '7',
      name: '갤러리 7',
      imagePath: exhibitionImage7,
    },
    {
      id: '8',
      name: '갤러리 8',
      imagePath: exhibitionImage8,
    },
  ];

  return (
    <Container>
      <StepContainer>
        <GalleryList>
          {galleries.map((gallery) => (
            <SelectedGallery
              key={gallery.id}
              onClick={() => handleBackgroundSelect(gallery.imagePath)}
            >
              <GalleryImage
                src={gallery.imagePath}
                alt={gallery.name}
                selected={selectedBackground === gallery.imagePath}
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
