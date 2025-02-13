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
import { useGetAuctionDetail } from './hooks/useGetAuctionDtail.ts';
import { DetailInform } from './components/DetailInform/index.tsx';

export const AuctionDetail = () => {
  const { id } = useParams<{ id: string }>(); // 경매 ID를 URL에서 가져옴
  const auctionId = id ? parseInt(id, 10) : 0; // id가 없으면 null을 사용

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { data, isLoading, error } = useGetAuctionDetail(auctionId);
  const [remainingTime, setRemainingTime] = useState<number>(0); // 남은 시간을 초로 저장

  useEffect(() => {
    if (data?.remaining_time) {
      // 남은 시간을 초 단위로 계산
      const timeParts = data.remaining_time.split(' ');
      const days = parseInt(timeParts[0], 10) * 86400; // 1일 = 86400초
      const hours = parseInt(timeParts[1], 10) * 3600; // 1시간 = 3600초
      const minutes = parseInt(timeParts[2], 10) * 60; // 1분 = 60초
      const seconds = parseInt(timeParts[3], 10); // 초

      const totalRemainingTime = days + hours + minutes + seconds; // 총 남은 시간 (초 단위)
      setRemainingTime(totalRemainingTime); // 초로 설정

      const interval = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval); // 시간이 0 이하가 되면 인터벌을 중지
            return 0;
          }
          return prevTime - 1; // 1초씩 차감
        });
      }, 1000); // 1초마다 업데이트

      return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 종료
    }
  }, [data]);

  // 남은 시간을 'd h m s' 형식으로 변환하는 함수
  const formatRemainingTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400); // 1일 = 86400초
    const hours = Math.floor((seconds % 86400) / 3600); // 1시간 = 3600초
    const minutes = Math.floor((seconds % 3600) / 60); // 1분 = 60초
    const remainingSeconds = seconds % 60;

    return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
  };

  // id가 없으면 처리
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

  if (error) {
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

  const { artwork } = data;

  // 이미지 클릭 시 큰 이미지 변경
  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <PageLayout>
      <Container>
        <TopContainer>
          <ImageContainer>
            <ImageList>
              {artwork.images.map((image, index) => (
                <SmallImage
                  key={index}
                  src={image}
                  alt={`작품 이미지 ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </ImageList>
            <BigImage
              src={artwork.images[selectedImageIndex]}
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
              currentPrice={data.current_price}
              finalPrice={data.final_price}
            />
            <Button>입찰</Button>
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
    </PageLayout>
  );
};
