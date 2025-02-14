import {
  PurchasedWorksContainer,
  SectionTitle,
  ArtworkGrid,
  ArtworkContainer,
} from './index.style';

import { useGetUserMypage } from '@/pages/artBuyerPage/hooks/useGetUserMypage';

import { Artwork } from '@/components/common/ArtWork';

interface PurchasedWorksProps {
  userId: number;
}

const PurchasedWorks = ({ userId }: PurchasedWorksProps) => {
  const { userMypageData } = useGetUserMypage(userId);
  if (!userMypageData) return null;

  const { result } = userMypageData;

  if (!('myCollection' in result)) return null;
  const artworks = result.myCollection.artworks;

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
              artist={artwork.author?.name}
              artworkSize={artwork.size}
              artworkId={artwork.id}
            />
          ))}
        </ArtworkGrid>
      </ArtworkContainer>
    </PurchasedWorksContainer>
  );
};

export default PurchasedWorks;