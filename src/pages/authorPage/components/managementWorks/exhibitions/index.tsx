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

const { exhibitions } = artworksExhibitionsData.result;

const Exhibitions = () => {
  return (
    <ArtWorksContainer>
      <h1>진행 중인 전시</h1>

      <ArtworkContainer>
        <ArtworkGrid>
          {exhibitions.map((exhibition) => (
            <Artwork
              key={exhibition.id}
              imageUrl={exhibition.image_url}
              title={exhibition.title}
            />
          ))}
        </ArtworkGrid>
      </ArtworkContainer>

      <ButtonContainer>
        <StyledButton>
          <IconPlus />
          전시 등록
        </StyledButton>
      </ButtonContainer>
    </ArtWorksContainer>
  );
};

export default Exhibitions;
