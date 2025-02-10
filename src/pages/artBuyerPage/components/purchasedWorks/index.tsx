import {
  PurchasedWorksContainer,
  SectionTitle,
  ArtworkGrid,
  ArtworkContainer,
} from './index.style';

import { myCollection } from '@/pages/artBuyerPage/constants/myCollection';
import { Artwork } from '@/components/common/ArtWork';

const PurchasedWorks = () => {
  return (
    <PurchasedWorksContainer>
      <h1>구매 작품</h1>

      <ArtworkContainer>
        <SectionTitle>작품</SectionTitle>
        <ArtworkGrid>
          {myCollection.artworks.map((artwork) => (
            <Artwork
              key={artwork.id}
              imageUrl={artwork.image_url}
              title={artwork.title}
              artist={artwork.artist.name}
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
