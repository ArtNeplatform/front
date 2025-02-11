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

import { ArtBuyerDataProps } from '@/types/artBuyer';

import { artBuyerData as rawArtBuyerData } from '@/constants/mocks';

import { Artwork } from '@/components/common/ArtWork';

// 명시적으로 ArtBuyerDataProps 타입 지정
const artBuyerData: ArtBuyerDataProps = rawArtBuyerData;
const { artworks, exhibitions } = artBuyerData.result.myCollection;

const ArtworkCollection = () => {
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
              artist={artwork.author.name}
              artworkWidth={artwork.width}
              artworkHeight={artwork.height}
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
