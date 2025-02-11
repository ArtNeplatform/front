import {
  PurchasedWorksContainer,
  SectionTitle,
  ArtworkGrid,
  ArtworkContainer,
} from './index.style';

import { ArtBuyerDataProps } from '@/types/artBuyer';

import { artBuyerData as rawArtBuyerData } from '@/constants/mocks';

import { Artwork } from '@/components/common/ArtWork';

// 명시적으로 ArtBuyerDataProps 타입 지정
const artBuyerData: ArtBuyerDataProps = rawArtBuyerData;
const { artworks } = artBuyerData.result.myCollection;

const PurchasedWorks = () => {
  return (
    <PurchasedWorksContainer>
      <h1>구매 작품</h1>

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
    </PurchasedWorksContainer>
  );
};

export default PurchasedWorks;
