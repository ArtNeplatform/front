import { Text } from '@/styles/text';
import {
  Container,
  BoxContainer,
  FlexConatainer,
  MiniLine,
  UnderLine,
  CategoryContainer,
  CategoryTitle,
} from './index.style.ts';

interface DetailInformProps {
  authorName: string;
  artworkTitle: string;
  year: string;
  material: string;
  dimensions: string;
  size: string;
  category: string;
  genre: string;
}

export const DetailInform = ({
  authorName,
  artworkTitle,
  year,
  material,
  dimensions,
  size,
  category,
  genre,
}: DetailInformProps) => {
  return (
    <Container>
      <BoxContainer>
        <Text size={18} color="black" weight="regular">
          {authorName}
        </Text>
        <Text size={28} color="black" weight="medium">
          {artworkTitle}
        </Text>
      </BoxContainer>
      <BoxContainer>
        <FlexConatainer>
          <Text size={14} color="font03gray" weight="regular">
            {year}
          </Text>
          <MiniLine />
          <Text size={14} color="font03gray" weight="regular">
            {material}
          </Text>
        </FlexConatainer>
        <Text size={14} color="font03gray" weight="regular">
          {dimensions} ({size}호)
        </Text>
      </BoxContainer>
      <UnderLine />
      <BoxContainer>
        <CategoryContainer>
          <CategoryTitle>
            <Text size={14} color="black" weight="medium">
              카테고리
            </Text>
          </CategoryTitle>
          <Text size={14} color="font03gray" weight="regular">
            {category}
          </Text>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>
            <Text size={14} color="black" weight="medium">
              장르
            </Text>
          </CategoryTitle>
          <Text size={14} color="font03gray" weight="regular">
            {genre}
          </Text>
        </CategoryContainer>
      </BoxContainer>
    </Container>
  );
};
