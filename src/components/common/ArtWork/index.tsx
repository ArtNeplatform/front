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
  Period,
  Price,
  Size,
  Title,
  StartPrice,
  PriceContainer,
} from '@components/common/ArtWork/index.style.ts';
import { useState } from 'react';
import EmptyHeart from '@assets/svg/empty-heart.svg?react';
import theme from '@styles/theme.ts';
import { useToggleArtworkLike } from '@/pages/artwork-detail/hooks/useToggleArtworkLike';
interface ArtworkProps {
  artworkId: number;
  imageUrl: string;
  artist?: string;
  title: string;
  auctionPeriod?: string;
  artworkWidth?: string;
  artworkHeight?: string;
  price?: number;
  startPrice?: number;
  variant?: 'eager' | 'lazy';
  hoverable?: boolean;
  border?: string;
  isLiked?: boolean;
  isAuction?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
/**
 * 이는 가장 많이 사용되는 작품 정보 컴포넌트입니다.
 * 기존의 EagerLoadImage 와 LazyLoadImage 를 사용합니다. 사용자의 화면에 최초로 보이는 곳인지, 드래그 해야 보이는지 여부에 따라 variant를 정합니다.
 * title 및 imageUrl을 받습니다. 다른 속성들은 필요없는 경우가 있기에 optional로 둡니다.
 * price 의 존재 여부에 따라서 컴포넌트가 달라집니다.
 * @param {number} artworkId - 작품 ID
 * @param {string} imageUrl - 이미지 url
 * @param {string} artist - 작가 이름
 * @param {string} title - 작품 이름
 * @param {string} artworkWidth - 작품 너비
 * @param {string} artworkHeight - 작품 높이
 * @param {number} auctionPeriod - 경매 진행 기간
 * @param {number} price - 작품 가격
 * @param {number} startPrice - (경매 시) 작품 시작 가격
 * @param {string} variant - 이미지 로딩 방식
 * @param {boolean} hoverable - 마우스 오버 여부
 * @param {string} border - 테두리 색상
 * @param {boolean} isLiked - 좋아요 값
 * @param {boolean} isAuction - 경매 작품 여부 (API 구분용)
 * @param {onClick} onClick - 클릭 이벤트 (페이지 이동)
 * @author 홍규진, 노찬영, 김서윤, 이하늘
 * */
export const Artwork = ({
  artworkId,
  imageUrl,
  artist,
  title,
  artworkWidth,
  artworkHeight,
  auctionPeriod,
  price,
  startPrice,
  variant = 'eager',
  hoverable = true, // 기본값은 true로 설정
  border,
  isLiked: initialLiked,
  isAuction = false, // 기본값은 fasle로 설정
  onClick,
}: ArtworkProps) => {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const { toggleLike, isPending } = useToggleArtworkLike();

  const handleLikeToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // 링크 이동 버블링 방지
    if (isPending) return;
    toggleLike({ artworkId, isAuction });
    setIsLiked((prev) => !prev);
  };

  const formattedSize =
    artworkWidth && artworkHeight
      ? `${artworkWidth}cm * ${artworkHeight}cm`
      : null;
  let formattedPrice = null;
  if (price) {
    formattedPrice = `${price.toLocaleString()}원`;
  }

  return (
    <ArtworkContainer onClick={onClick} $border={border ?? 'none'}>
      <ImageContainer>
        {variant === 'eager' ? (
          <EagerLoadImage imageUrl={imageUrl} alt={title} />
        ) : (
          <LazyLoadImage imageUrl={imageUrl} alt={title} />
        )}
        {hoverable && (
          <GlassmorphismOverlay hoverable={hoverable}>
            <HeartButton
              onClick={handleLikeToggle}
              aria-label={isLiked ? '좋아요 취소' : '좋아요'}
              disabled={isPending}
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
        {artist && <Artist>{artist}</Artist>}
        <Title>{title}</Title>
        {formattedSize && <Size>{formattedSize}</Size>}
        <PriceContainer>
          {formattedPrice && <Price>{formattedPrice}</Price>}
          {/* 가격이 있을 때만 표시 */}
          {startPrice && <StartPrice>{startPrice.toLocaleString()}</StartPrice>}
        </PriceContainer>
        {auctionPeriod && <Period>{auctionPeriod}</Period>}
        {formattedPrice && <Price>{formattedPrice}</Price>}
      </ArtworkInfo>
    </ArtworkContainer>
  );
};
