import { Text } from '@/styles/text';
import {
  CarouselContainer,
  CarouselImageContainer,
  CarouselItem,
  CarouselImage,
  CarouselIndexContainer,
  CarouselIndicator,
  CarouselIndex,
  CarouselAnimate,
  TextContainer,
  ArrowBoxLeft,
  ArrowBoxRight,
  Arrow,
} from './index.style';
import { imageTextArray } from '@/pages/main/constants/carousel';
import { useCarousel } from '@/pages/main/hooks/useCarousel';
import ArrowLeft from '@/assets/svg/arrow-left.svg';
import ArrowRight from '@/assets/svg/arrow-right.svg';
import IconStop from '@/assets/svg/icon-stop.svg';
import IconPlay from '@/assets/svg/icon-play.svg';

export const Carousel = () => {
  const {
    carouselIndex,
    isPlaying,
    imageTextSrcArray,
    handlePrev,
    handleNext,
    handleIndicatorClick,
    handlePlayPauseToggle,
    getCarouselStyles,
  } = useCarousel();

  return (
    <CarouselContainer>
      <ArrowBoxLeft onClick={handlePrev}>
        <Arrow src={ArrowLeft} alt="이전" />
      </ArrowBoxLeft>
      <CarouselImageContainer style={getCarouselStyles()}>
        {imageTextSrcArray.map((item, index) => (
          <CarouselItem key={index}>
            <CarouselImage src={item.image} alt={`carousel-${index}`} />
            <TextContainer>
              <Text size={16} color="white" weight="regular">
                {item.title}
              </Text>
              <Text
                size={56}
                color="white"
                weight="semibold"
                style={{ paddingBottom: '26px' }}
              >
                {item.heading.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </Text>
              <Text
                size={18}
                color="white"
                weight="regular"
                style={{ paddingBottom: '64px' }}
              >
                {item.description.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </Text>
              <CarouselIndexContainer>
                <CarouselIndicator>
                  {imageTextArray.map((_, i) => (
                    <CarouselIndex
                      key={i}
                      $isActive={carouselIndex === i}
                      onClick={() => handleIndicatorClick(i)}
                    />
                  ))}
                </CarouselIndicator>
                <CarouselAnimate
                  src={isPlaying ? IconStop : IconPlay}
                  alt={isPlaying ? '정지' : '재생'}
                  onClick={handlePlayPauseToggle}
                />
              </CarouselIndexContainer>
            </TextContainer>
          </CarouselItem>
        ))}
      </CarouselImageContainer>
      <ArrowBoxRight onClick={handleNext}>
        <Arrow src={ArrowRight} alt="다음" />
      </ArrowBoxRight>
    </CarouselContainer>
  );
};
