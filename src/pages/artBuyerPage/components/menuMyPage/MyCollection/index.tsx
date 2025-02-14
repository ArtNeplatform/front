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

import { Artwork } from '@/components/common/ArtWork';

import { useGetBuyerMypage } from '@/pages/artBuyerPage/hooks/useGetBuyerMypage';

/**
 * @description 작품 구매자의 작품과 전시를 표시하는 컴포넌트
 * @author 노찬영
 */
const MyCollection = () => {
  const { userMypageData } = useGetBuyerMypage();

  // 작품 구매자 작품 데이터
  const artworks = userMypageData.myCollection.artworks;

    // 작품 구매자 전시 데이터
  const exhibitions = userMypageData.myCollection.exhibitions;

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
              artworkId={artwork.id}
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
