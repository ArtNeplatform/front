import {
  PurchasedWorksContainer,
  SectionTitle,
  ArtworkGrid,
  ArtworkContainer,
} from './index.style';

import { Artwork } from '@/components/common/ArtWork';

import { useGetBuyerMypage } from '../../hooks/useGetBuyerMypage';
import { useNavigate } from 'react-router-dom';

const PurchasedWorks = () => {
  const navigate = useNavigate();
  // 작품 클릭 시 작품 상세 페이지로 이동
  const handleArtworkClick = (artworkId: number) => {
    navigate(`/artwork/${artworkId}`);
  };

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
              onClick={() => handleArtworkClick(artwork.id)}
            />
          ))}
        </ArtworkGrid>
      </ArtworkContainer>
    </PurchasedWorksContainer>
  );
};

export default PurchasedWorks;
