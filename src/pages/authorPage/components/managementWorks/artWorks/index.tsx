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
const { artworks } = artworksExhibitionsData.result;

const ArtWorks = () => {
  return (
    <ArtWorksContainer>
      <h1>작품</h1>

      <ArtworkContainer>
        <ArtworkGrid>
          {artworks.map((artwork) => (
            <Artwork
              key={artwork.id}
              imageUrl={artwork.thumbnail_image_url}
              title={artwork.title}
            />
          ))}
        </ArtworkGrid>
      </ArtworkContainer>
      <ButtonContainer>
        <StyledButton>
          <IconPlus />
          작품 등록
        </StyledButton>
      </ButtonContainer>
    </ArtWorksContainer>
  );
};

export default ArtWorks;
