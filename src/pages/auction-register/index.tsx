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
import { Text } from '@/styles/text.tsx';
import AuctionModal from '@/pages/auction-register/components/AuctionModal';
import useAuctionRegisterForm from './hooks/useAuctionRegisterForm';

export const AuctionRegister = () => {
  const { availableArtworks } = useGetAvailableArtwork();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const { handleSubmit, formData, setFormData } = useAuctionRegisterForm();

  const handleOpenModal = (artworkId: number) => {
    setFormData({ ...formData, artwork_id: artworkId });
    setSelectedImages((prev) => [...prev, artworkId.toString()]);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleModalConfirm = (price: number) => {
    setFormData({ ...formData, start_price: price });
    setModalOpen(false);
  };

  return (
    <PageLayout>
      <ContentHeader>
        <Text size={24} weight="semibold">
          경매 등록
        </Text>
        <Divider />
      </ContentHeader>
      <Container>
        <SquareGridContainer columnCount={5}>
          {availableArtworks?.map((artwork, index) => (
            <div
              key={artwork.artwork_id + index}
              onClick={() => handleOpenModal(artwork.artwork_id)}
              style={{
                position: 'relative',
                opacity: selectedImages.includes(artwork.artwork_id.toString())
                  ? 0.7
                  : 1,
              }}
            >
              <Artwork
                imageUrl={artwork.thumbnail_image_url}
                title={artwork.title}
                hoverable={false}
                variant="eager"
                artworkId={artwork.artwork_id}
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
            onClick={handleSubmit}
            disabled={
              formData.artwork_id === null || formData.start_price === null
            }
          />
        </ButtonContainer>
      </Container>

      <AuctionModal
        isOpen={isModalOpen}
        title={
          formData.artwork_id
            ? availableArtworks?.find(
                (artwork) => artwork.artwork_id === formData.artwork_id
              )?.title
            : ''
        }
        imageSrc={
          formData.artwork_id
            ? availableArtworks?.find(
                (artwork) => artwork.artwork_id === formData.artwork_id
              )?.thumbnail_image_url
            : ''
        }
        onClose={handleCloseModal}
        onConfirm={(price) => handleModalConfirm(price)}
      />
    </PageLayout>
  );
};