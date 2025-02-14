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

import { useGetAuthorArtworksExhibitions } from '@/pages/authorPage/hooks/useGetAuthorArtworksExhibitions';

const ArtWorks = () => {
  const navigate = useNavigate();
  const { data } = useGetAuthorArtworksExhibitions();

  const artworks = data?.result?.artworks || [];

  return (
    <ArtWorksContainer>
      <h1>작품</h1>

      <ArtworkContainer>
        {artworks.length > 0 ? (
          <ArtworkGrid>
            {artworks.map((artwork) => (
              <Artwork
                key={artwork.id}
                imageUrl={artwork.thumbnail_image_url}
                title={artwork.title}
                artworkId={artwork.id}
              />
            ))}
          </ArtworkGrid>
        ) : (
          <p>등록된 작품이 없습니다.</p>
        )}
      </ArtworkContainer>

      <ButtonContainer>
        <StyledButton onClick={() => navigate('/artwork-register')}>
          <IconPlus />
          작품 등록
        </StyledButton>
      </ButtonContainer>
    </ArtWorksContainer>
  );
};

export default ArtWorks;
