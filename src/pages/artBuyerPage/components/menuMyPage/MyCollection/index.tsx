import {
  MyCollectionContainer,
  SectionTitle,
  ArtworkGrid,
  ExhibitionGrid,
  ExhibitionItem,
  ExhibitionImage,
  ArtworkContainer,
  ExhibitionContainer,
} from './index.style';

import { useGetUserMypage } from '@/pages/artBuyerPage/hooks/useGetUserMypage';

import { Artwork } from '@/components/common/ArtWork';

interface MyCollectionProps {
  userId: number;
}

/**
 * @description 작품 구매자의 작품과 전시를 표시하는 컴포넌트
 * @author 노찬영
 */
const MyCollection = ({ userId }: MyCollectionProps) => {
  const { userMypageData } = useGetUserMypage(userId);

  const { result } = userMypageData;

  // 구매자와 작가 데이터 구분
  const isBuyer = !('author' in result);

  // 구매자와 작가의 작품 및 전시 데이터 추출
  const artworks = isBuyer
    ? result.myCollection.artworks
    : result.storage.artworks;
  const exhibitions = isBuyer
    ? result.myCollection.exhibitions
    : result.storage.exhibitions;

  return (
    <MyCollectionContainer>
      <h1>마이컬렉션</h1>

      <ArtworkContainer>
        <SectionTitle>작품</SectionTitle>
        <ArtworkGrid>
          {artworks.map((artwork) => (
            <Artwork
              key={artwork.id}
              imageUrl={artwork.image_url}
              title={artwork.title}
              artist={artwork.author?.name || '작가 미상'}
              artworkSize={artwork.size}
            />
          ))}
        </ArtworkGrid>
      </ArtworkContainer>

      <ExhibitionContainer>
        <SectionTitle>전시</SectionTitle>
        <ExhibitionGrid>
          {exhibitions.map((exhibition) => (
            <ExhibitionItem key={exhibition.exhi_id}>
              <ExhibitionImage
                src={exhibition.image_url}
                alt={exhibition.title}
              />
              <h3>{exhibition.title}</h3>
            </ExhibitionItem>
          ))}
        </ExhibitionGrid>
      </ExhibitionContainer>
    </MyCollectionContainer>
  );
};

export default MyCollection;
