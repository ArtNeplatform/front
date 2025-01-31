import { useEffect, useState } from 'react';
import { StyledImage } from '@components/common/CustomImageContainer/index.style.ts';

interface ImageProps {
  imageUrl: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}

/**
 * 이 이미지는 페이지가 뜨자마자
 * 바로 보여지는 화면에 빌드된 Image에 사용합니다.
 * @author 홍규진
 */
export const EagerLoadImage = ({
  imageUrl,
  alt,
  width,
  height,
  className,
}: ImageProps) => {
  return (
    <StyledImage
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      isLoaded={true}
    />
  );
};

/**
 * 이 이미지는 페이지가 뜨자마자
 * 바로 보여지는 화면에 빌드된 Image에 사용합니다.
 * @author 홍규진
 */
export const LazyLoadImage = ({
  imageUrl,
  alt,
  width,
  height,
  className,
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsLoaded(true);

    return () => {
      img.onload = null;
    };
  }, [imageUrl]);

  return (
    <StyledImage
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      isLoaded={isLoaded}
    />
  );
};
