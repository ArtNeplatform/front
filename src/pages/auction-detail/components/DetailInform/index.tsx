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
  startPrice: string | null;
  currentPrice: string | null;
  finalPrice: string | null;
}

// 가격 뒤에 "원"을 붙이는 함수
const formatPrice = (price: string | null) => {
  if (!price) return '정보 없음'; // 가격 정보가 없으면 '정보 없음' 표시

  const numberPrice = parseFloat(price.replace(/,/g, '')); // 천 단위 구분 기호 제거하고 숫자로 변환
  if (isNaN(numberPrice)) return '잘못된 가격'; // 숫자가 아니면 '잘못된 가격' 표시

  return `${numberPrice.toLocaleString()}원`; // 천 단위 구분 기호 추가하고 원화 기호 붙이기
};

export const DetailInform = ({
  authorName,
  artworkTitle,
  year,
  material,
  dimensions,
  size,
  startPrice,
  currentPrice,
  finalPrice,
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
              시작가
            </Text>
          </CategoryTitle>
          <Text size={14} color="font03gray" weight="regular">
            {formatPrice(startPrice)}
          </Text>
        </CategoryContainer>

        <CategoryContainer>
          <CategoryTitle>
            <Text size={14} color="black" weight="medium">
              현재가
            </Text>
          </CategoryTitle>
          <Text size={14} color="font03gray" weight="regular">
            {formatPrice(currentPrice)}
          </Text>
        </CategoryContainer>

        {finalPrice && (
          <CategoryContainer>
            <CategoryTitle>
              <Text size={14} color="black" weight="medium">
                낙찰가
              </Text>
            </CategoryTitle>
            <Text size={14} color="font03gray" weight="regular">
              {formatPrice(finalPrice)}
            </Text>
          </CategoryContainer>
        )}
      </BoxContainer>
    </Container>
  );
};
