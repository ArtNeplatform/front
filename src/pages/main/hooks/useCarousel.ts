import { useCallback, useEffect, useMemo, useState } from 'react';
import { imageTextArray } from '@/pages/main/constants/carousel';

export const useCarousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselTransition, setCarouselTransition] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);

  const imageTextSrcArray = useMemo(() => {
    return [...imageTextArray, imageTextArray[0]];
  }, [imageTextArray]);

  const resetIndexAndTransition = useCallback(() => {
    setTimeout(() => {
      setCarouselIndex(0);
      setCarouselTransition('none');
    }, 10);
  }, []);

  const controlTime = useMemo(() => {
    return carouselTransition === 'none' ? 10 : 5000;
  }, [carouselTransition]);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      if (carouselIndex === imageTextSrcArray.length - 1) {
        resetIndexAndTransition();
      }
      setCarouselIndex((prev) => (prev + 1) % imageTextSrcArray.length);
      setCarouselTransition('transform 0.5s ease-in-out');
    }, controlTime);

    return () => clearInterval(timer);
  }, [
    carouselIndex,
    controlTime,
    imageTextSrcArray.length,
    resetIndexAndTransition,
    isPlaying,
  ]);

  const handlePrev = () => {
    setCarouselIndex((prev) =>
      prev === 0 ? imageTextArray.length - 1 : prev - 1
    );
    setCarouselTransition('transform 0.5s ease-in-out');
  };

  const handleNext = () => {
    setCarouselIndex((prev) =>
      prev === imageTextArray.length - 1 ? 0 : prev + 1
    );
    setCarouselTransition('transform 0.5s ease-in-out');
  };

  const handleIndicatorClick = (index: number) => {
    setCarouselIndex(index);
    setCarouselTransition('transform 0.5s ease-in-out');
  };

  const handlePlayPauseToggle = () => {
    setIsPlaying((prev) => !prev);
  };

  const getCarouselStyles = () => {
    return {
      transform: `translateX(-${carouselIndex * 100}%)`,
      transition: `${carouselTransition}`,
    };
  };

  return {
    carouselIndex,
    isPlaying,
    imageTextSrcArray,
    handlePrev,
    handleNext,
    handleIndicatorClick,
    handlePlayPauseToggle,
    getCarouselStyles,
  };
};
