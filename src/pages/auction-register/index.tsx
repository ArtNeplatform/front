import { PageLayout } from '@/components/common/PageLayout';
import { SquareGridContainer } from '@/components/common/SquareGridContainer';
import { Artwork } from '@/components/common/ArtWork';
import { useState } from 'react';
import { CommonButton } from '@/components/common/CommonButton';
import CheckIcon from '@assets/svg/check-icon.svg?react';
import { Container, ButtonContainer, ContentHeader } from './index.style.ts';
import Divider from '@/components/common/Divider/index.tsx';
import theme from '@/styles/theme.ts';
import { useGetAvailableArtwork } from './hooks/useGetAvailableArtwork';

export const AuctionRegister = () => {
  const { availableArtworks } = useGetAvailableArtwork();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const toggleImageSelection = (artworkId: string) => {
    setSelectedImages((prev) =>
      prev.includes(artworkId)
        ? prev.filter((id) => id !== artworkId)
        : [...prev, artworkId]
    );
  };

  const handleRegister = () => {
    // 등록 로직 추가
    console.log('등록할 이미지:', selectedImages);
  };

  return (
    <PageLayout>
      <ContentHeader>
        <h1>작품 등록</h1>
        <p>
          작품을 등록하기 위해서는 최소 1개 이상의 이미지를 업로드해야 합니다.
        </p>
      </ContentHeader>
      <Container>
        <SquareGridContainer columnCount={5}>
          {availableArtworks?.map((artwork, index) => (
            <div
              key={artwork.artwork_id + index}
              onClick={() =>
                toggleImageSelection(artwork.artwork_id.toString())
              }
              style={{
                position: 'relative',
                opacity: selectedImages.includes(artwork.artwork_id.toString())
                  ? 0.7
                  : 1,
              }}
            >
              <Artwork
                imageUrl={artwork.thumbnail_image_url}
                artist="작가 이름"
                title="작품 제목"
                hoverable={false}
                variant="eager"
              />
              {selectedImages.includes(artwork.artwork_id.toString()) && (
                <CheckIcon
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    width: '24px',
                    height: '24px',
                  }}
                />
              )}
            </div>
          ))}
        </SquareGridContainer>
        <Divider />
        <ButtonContainer>
          <CommonButton
            text="취소하기"
            color="black"
            background={theme.colors.white}
            borderColor={theme.colors.lightGray}
            borderRadius="2px"
            onClick={() => setSelectedImages([])}
          />
          <CommonButton
            text="등록하기"
            color="white"
            background={theme.colors.black}
            borderColor="black"
            borderRadius="2px"
            onClick={handleRegister}
          />
        </ButtonContainer>
      </Container>
    </PageLayout>
  );
};
