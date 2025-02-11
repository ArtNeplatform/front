import IconPlus from '@assets/svg/Icon_Plus.svg?react';
import { Artwork } from '@/components/common/ArtWork';
import {
  ArtworkContainer,
  ArtworkGrid,
  ArtWorksContainer,
  ButtonContainer,
  StyledButton,
} from './index.style';

import { ArtworksExhibitionsDataProps } from '@/types/author';

import { artworksExhibitionsData as rawArtworksExhibitionData } from '@/pages/authorPage/constants/artworksExhibitions';

// 명시적으로 ArtBuyerDataProps 타입 지정
const artworksExhibitionsData: ArtworksExhibitionsDataProps =
  rawArtworksExhibitionData;
const { auction_artworks } = artworksExhibitionsData.result;

const AuctioningWorks = () => {
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
            />
          ))}
        </ArtworkGrid>
      </ArtworkContainer>

      <ButtonContainer>
        <StyledButton>
          <IconPlus />
          경매 등록
        </StyledButton>
      </ButtonContainer>
    </ArtWorksContainer>
  );
};

export default AuctioningWorks;
