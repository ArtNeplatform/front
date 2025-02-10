import {
  PurchasedWorksContainer,
  SectionTitle,
  ArtworkGrid,
  ArtworkContainer,
} from './index.style';

import { artBuyerData } from '@/pages/artBuyerPage/constants/artBuyer';
import { Artwork } from '@/components/common/ArtWork';

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
