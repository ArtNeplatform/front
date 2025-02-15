import { useEffect, useState } from 'react';
import { PageLayout } from '@/components/common/PageLayout';
import { Text } from '@/styles/text';
import {
  Container,
  TopContainer,
  ImageContainer,
  ImageList,
  SmallImage,
  BigImage,
  TextContainer,
  BottomContainer,
  CategoryContainer,
  Button,
} from './index.style.ts';
import { useParams } from 'react-router-dom';
import { DetailInform } from './components/DetailInform/index.tsx';
import AuctionModal from './components/AuctionModal/index.tsx';
import useWebSocket from './hooks/useWebSocket.ts';
import { usePostAuctionBid } from './hooks/usePostAuctionBid.ts';
import { useGetAuctionDetail } from './hooks/useGetAuctionDtail.ts';
// import { toast } from 'sonner';

export const AuctionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const auctionId = id ? parseInt(id, 10) : 0;
  console.log(auctionId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { data, isLoading, error } = useGetAuctionDetail(auctionId);
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const { artwork } = data ?? {};
  const { currentPrice, error: socketError } = useWebSocket(auctionId);
  const [currentPriceState, setCurrentPriceState] = useState<string | null>(
    data?.current_price || null
  );
  const allImages = [artwork.thumbnail_image_url, ...artwork.images];

  const {
    handleSubmit,
    formData,
    setFormData,
    // isError,
    // error: bidError,
  } = usePostAuctionBid();
  console.log(currentPrice);

  useEffect(() => {
    if (data?.remaining_time) {
      // 남은 시간을 초 단위로 계산
      const timeParts = data.remaining_time.split(' ');
      const days = parseInt(timeParts[0], 10) * 86400; // 1일 = 86400초
      const hours = parseInt(timeParts[1], 10) * 3600; // 1시간 = 3600초
      const minutes = parseInt(timeParts[2], 10) * 60; // 1분 = 60초
      const seconds = parseInt(timeParts[3], 10); // 초

      setRemainingTime(days + hours + minutes + seconds);

      const interval = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval); // 시간이 0 이하가 되면 인터벌을 중지
            return 0;
          }
          return prevTime - 1; // 1초씩 차감
        });
      }, 1000); // 1초마다 업데이트

      return () => clearInterval(interval);
    }
  }, [data]);

  useEffect(() => {
    if (currentPrice) {
      setCurrentPriceState(currentPrice); // 웹소켓을 통해 받은 currentPrice로 상태 업데이트
    }
  }, [currentPrice]);

  // 입찰 실패 시 오류 메시지 표시
  // useEffect(() => {
  //   if (isError && bidError?.response?.data?.message) {
  //     toast.error(`입찰 실패: ${bidError.response.data.message}`);
  //   }
  // }, [isError, bidError]);

  if (!auctionId) {
    return (
      <PageLayout>
        <Container>
          <Text size={20} color="black" weight="semibold">
            유효하지 않은 경매 ID입니다.
          </Text>
        </Container>
      </PageLayout>
    );
  }
  const formatRemainingTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
  };

  const handleOpenModal = () => {
    setFormData({ ...formData, auction_id: auctionId });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalConfirm = async (price: string) => {
    // 바로 handleSubmit에 필요한 데이터를 전달하도록 수정
    const updatedFormData = {
      ...formData,
      bid_price: price,
      auction_id: auctionId,
    };

    try {
      await handleSubmit(updatedFormData); // formData 상태 업데이트 없이 직접 handleSubmit 실행
      setIsModalOpen(false); // 모달 닫기
    } catch (error) {
      console.error('입찰 실패', error);
      alert('입찰에 실패했습니다. 다시 시도해주세요.');
    }
  };

  if (isLoading) {
    return (
      <PageLayout>
        <Container>
          <Text size={20} color="black" weight="semibold">
            로딩 중...
          </Text>
        </Container>
      </PageLayout>
    );
  }

  if (error || socketError) {
    return (
      <PageLayout>
        <Container>
          <Text size={20} color="black" weight="semibold">
            경매 상세 정보를 불러오는 데 실패했습니다.
          </Text>
        </Container>
      </PageLayout>
    );
  }
  console.log('웹' + currentPrice, '데이터' + data.current_price);
  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <PageLayout>
      <Container>
        <TopContainer>
          <ImageContainer>
            <ImageList>
              {allImages.map((image, index) => (
                <SmallImage
                  key={index}
                  src={image}
                  alt={`작품 이미지 ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </ImageList>
            <BigImage
              src={allImages[selectedImageIndex]}
              alt="작품 메인 이미지"
            />
          </ImageContainer>
          <TextContainer>
            <DetailInform
              authorName={data.artwork.author_name}
              artworkTitle={data.artwork.title}
              year={data.artwork.year}
              material={data.artwork.material}
              dimensions={data.artwork.size}
              size={data.artwork.size}
              startPrice={data.start_price}
              currentPrice={currentPriceState}
              finalPrice={data.final_price}
              remaining_time={data.remaining_time}
            />
            <Button onClick={handleOpenModal}>입찰</Button>
            <Text size={16} color="red" weight="regular">
              {formatRemainingTime(remainingTime)}
            </Text>
          </TextContainer>
        </TopContainer>
        <BottomContainer>
          <CategoryContainer>
            <Text size={20} color="black" weight="semibold">
              작품 소개
            </Text>
            <Text size={16} color="font03gray" weight="regular">
              {artwork.description || '상세 설명이 없습니다.'}
            </Text>
          </CategoryContainer>
        </BottomContainer>
      </Container>
      <AuctionModal
        isOpen={isModalOpen}
        title={artwork.title}
        imageSrc={artwork.thumbnail_image_url}
        onClose={handleCloseModal}
        onConfirm={(price) => handleModalConfirm(price)}
      />
    </PageLayout>
  );
};
