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
import { useGetUserMypage } from '@/pages/artBuyerPage/hooks/useGetUserMypage';

const ArtworkCollection = ({ userId }: { userId: number }) => {
  const { userMypageData } = useGetUserMypage(userId);
  const { result } = userMypageData;

  // 구매자일 경우 작품 & 전시 데이터 가져오기
  const artworks = 'myCollection' in result ? result.myCollection.artworks : [];
  const exhibitions =
    'myCollection' in result ? result.myCollection.exhibitions : [];

  return (
    <MyCollectionContainer>
      <h1>작품 보관함</h1>

      <ArtworkContainer>
        <SectionTitle>작품</SectionTitle>
        <ArtworkGrid>
          {artworks.map((artwork) => (
            <Artwork
              key={artwork.id}
              imageUrl={artwork.image_url}
              title={artwork.title}
              artist={artwork.author?.name}
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

export default ArtworkCollection;
