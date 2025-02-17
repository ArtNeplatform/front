import { useNavigate } from 'react-router-dom';
import IconPlus from '@assets/svg/Icon_Plus.svg?react';
import { Artwork } from '@/components/common/ArtWork';
import {
  ArtworkContainer,
  ArtworkGrid,
  ArtWorksContainer,
  ButtonContainer,
  StyledButton,
} from './index.style';

import { useGetAuthorArtworksExhibitions } from '@/pages/mypage-author-page/hooks/useGetAuthorArtworksExhibitions';

const AuctioningWorks = () => {
  const navigate = useNavigate();

  const { data } = useGetAuthorArtworksExhibitions();

  const auction_artworks = data?.auction_artworks || [];

  return (
    <ArtWorksContainer>
      <h1>경매 중인 작품</h1>

      <ArtworkContainer>
        <ArtworkGrid>
          {auction_artworks.map((auctionArtwork) => (
            <Artwork
              key={auctionArtwork.auction_id}
              imageUrl={auctionArtwork.artwork.thumbnail_image_url}
              title={auctionArtwork.artwork.title}
              auctionPeriod={auctionArtwork.auction_period}
              artworkId={auctionArtwork.artwork.id}
            />
          ))}
        </ArtworkGrid>
      </ArtworkContainer>

      <ButtonContainer>
        <StyledButton onClick={() => navigate('/auction-register')}>
          <IconPlus />
          경매 등록
        </StyledButton>
      </ButtonContainer>
    </ArtWorksContainer>
  );
};

export default AuctioningWorks;
