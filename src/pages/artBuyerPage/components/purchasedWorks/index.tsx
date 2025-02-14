import {
  PurchasedWorksContainer,
  SectionTitle,
  ArtworkGrid,
  ArtworkContainer,
} from './index.style';

import { Artwork } from '@/components/common/ArtWork';

import { useGetBuyerMypage } from '../../hooks/useGetBuyerMypage';

const PurchasedWorks = () => {
  const { userMypageData } = useGetBuyerMypage();

  const artworks = userMypageData.myCollection.artworks;

  return (
    <PurchasedWorksContainer>
      <h1>구매 작품</h1>

      <ArtworkContainer>
        <SectionTitle>작품</SectionTitle>
        <ArtworkGrid>
          {artworks?.map((artwork) => (
            <Artwork
              key={artwork.id}
              imageUrl={artwork.thumbnail_image_url}
              title={artwork.title}
              artist={artwork.author?.author_name}
              artworkWidth={artwork.width}
              artworkHeight={artwork.height}
              artworkId={artwork.id}
            />
          ))}
        </ArtworkGrid>
      </ArtworkContainer>
    </PurchasedWorksContainer>
  );
};

export default PurchasedWorks;
