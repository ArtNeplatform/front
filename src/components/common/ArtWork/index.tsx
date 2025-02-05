import {
  EagerLoadImage,
  LazyLoadImage,
} from '@components/common/CustomImageContainer';
import {
  Artist,
  ArtworkContainer,
  ArtworkInfo,
  GlassmorphismOverlay,
  HeartButton,
  ImageContainer,
  Price,
  Size,
  Title,
} from '@components/common/ArtWork/index.style.ts';
import { useState } from 'react';
import EmptyHeart from '@assets/svg/empty-heart.svg?react';
import theme from '@styles/theme.ts';
interface ArtworkProps {
  imageUrl: string;
  artist: string;
  title: string;
  artworkWidth?: number;
  artworkHeight?: number;
  price?: number;
  variant?: 'eager' | 'lazy';
  hoverable?: boolean;
  border?: string;
}
/**
 * 이는 가장 많이 사용되는 컴포넌트입니다.
 * 기존의 EagerLoadImage 와 LazyLoadImage 를 사용합니다. 사용자의 화면에 최초로 보이는 곳인지, 드래그 해야 보이는지 여부에 따라 variant를 정합니다.
 * title 및 size, price를 받습니다. price가 필요없는 경우가 있기에 price는 optional로 둡니다.
 * price 의 존재 여부에 따라서 컴포넌트가 달라집니다.
 * @param {string} imageUrl - 이미지 url
 * @param {string} artist - 작가 이름
 * @param {string} title - 작품 이름
 * @param {number} artworkWidth - 작품 너비
 * @param {number} artworkHeight - 작품 높이
 * @param {number} price - 작품 가격
 * @param {string} variant - 이미지 로딩 방식
 * @param {boolean} hoverable - 마우스 오버 여부
 * @param {string} border - 테두리 색상
 * @author 홍규진
 * */
export const Artwork = ({
  imageUrl,
  artist,
  title,
  artworkWidth,
  artworkHeight,
  price,
  variant = 'eager',
  hoverable = true, // 기본값은 true로 설정
  border,
}: ArtworkProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const formattedSize =
    artworkWidth && artworkHeight
      ? `${artworkWidth}cm * ${artworkHeight}cm`
      : null;
  let formattedPrice = null;
  if (price) {
    formattedPrice = `${price.toLocaleString()} 원`;
  }

  return (
    <ArtworkContainer $border={border ?? 'none'}>
      <ImageContainer>
        {variant === 'eager' ? (
          <EagerLoadImage imageUrl={imageUrl} alt={title} />
        ) : (
          <LazyLoadImage imageUrl={imageUrl} alt={title} />
        )}
        {hoverable && (
          <GlassmorphismOverlay hoverable={hoverable}>
            <HeartButton
              onClick={() => setIsLiked(!isLiked)}
              aria-label={isLiked ? '좋아요 취소' : '좋아요'}
            >
              {isLiked ? (
                <EmptyHeart fill={theme.colors.white} />
              ) : (
                <EmptyHeart />
              )}
            </HeartButton>
          </GlassmorphismOverlay>
        )}
      </ImageContainer>
      <ArtworkInfo>
        <Artist>{artist}</Artist>
        <Title>{title}</Title>
        {formattedSize && <Size>{formattedSize}</Size>}
        {formattedPrice && <Price>{formattedPrice}</Price>}
        {/* 가격이 있을 때만 표시 */}
      </ArtworkInfo>
    </ArtworkContainer>
  );
};
