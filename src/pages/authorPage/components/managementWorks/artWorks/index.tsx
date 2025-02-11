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
import FallbackUI from '@/components/common/FallbackUI';
import DefaultErrorFallbackUI from '@/components/common/Error/DefaultErrorFallbackUI';

const ArtWorks = () => {
  const { data, isLoading, error } = useGetAuthorArtworksExhibitions();

  if (isLoading) return <FallbackUI />;
  if (error)
    return (
      <DefaultErrorFallbackUI
        resetErrorBoundary={() => console.log('에러 초기화')}
        error={error}
      />
    );

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
              />
            ))}
          </ArtworkGrid>
        ) : (
          <p>등록된 작품이 없습니다.</p>
        )}
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
