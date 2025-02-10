import IconPlus from '@assets/svg/Icon_Plus.svg?react';

import { Artwork } from '@/components/common/ArtWork';
import {
  ArtworkContainer,
  ArtworkGrid,
  ArtWorksContainer,
  ButtonContainer,
  StyledButton,
} from './index.style';
import { artworksExhibitionsData } from '@/pages/authorPage/constants/artworksExhibitions';

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
