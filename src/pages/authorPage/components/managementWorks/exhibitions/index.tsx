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
import FallbackUI from '@/components/common/FallbackUI';
import DefaultErrorFallbackUI from '@/components/common/Error/DefaultErrorFallbackUI';

const Exhibitions = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetAuthorArtworksExhibitions();

  if (isLoading) return <FallbackUI />;
  if (error)
    return (
      <DefaultErrorFallbackUI
        resetErrorBoundary={() => console.log('에러 초기화')}
        error={error}
      />
    );

  const exhibitions = data?.result?.exhibitions || [];

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
        <StyledButton onClick={() => navigate('/exhibit-register')}>
          <IconPlus />
          전시 등록
        </StyledButton>
      </ButtonContainer>
    </ArtWorksContainer>
  );
};

export default Exhibitions;
