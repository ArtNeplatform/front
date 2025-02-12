import { useState } from 'react';
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
  LikeButton,
  BottomContainer,
  CategoryContainer,
  AuthorContainer,
  ProfileContainer,
  TitleContainer,
  ArrowContainer,
  Arrow,
  ArtworkContainer,
  ArtworkImage,
} from './index.style.ts';
import { useHandleLink } from '@/hooks/common/useHandleLink.ts';
import { DetailInform } from '@/pages/artwork-detail/components/DetailInform/index.tsx';
import { ArtworkDetailCategory } from '@/pages/artwork-detail/components/ArtworkDetailCategory/index.tsx';
import { AuthorProfile } from '@/pages/artwork-detail/components/AuthorProfile/index.tsx';
import { MoreButton } from '@/pages/artwork-detail/components/MoreButton/index.tsx';
import { useParams } from 'react-router-dom';
import { useGetArtworkDetail } from '@/pages/artwork-detail/hooks/useGetArtworkDetail';
import { useToggleArtworkLike } from '@/pages/artwork-detail/hooks/useToggleArtworkLike';
import ArrowLeft from '@/assets/svg/arrow-left-black.svg';
import ArrowRight from '@/assets/svg/arrow-right-black.svg';

export const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { artworkData, isLoading } = useGetArtworkDetail(Number(id));
  const { toggleLike, isPending: isLiking } = useToggleArtworkLike();

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  if (isLoading || !artworkData) {
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

  const { fixed_info, tab_data } = artworkData.result;
  const artworks = tab_data.other_artworks || [];
  const visibleArtworks = artworks.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevClick = () => {
    if (startIndex === 0) return;
    setStartIndex((prevIndex) => Math.max(0, prevIndex - itemsPerPage));
  };

  const handleNextClick = () => {
    if (startIndex + itemsPerPage >= artworks.length) return;
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, artworks.length - itemsPerPage)
    );
  };

  return (
    <PageLayout>
      <Container>
        <TopContainer>
          <ImageContainer>
            <ImageList>
              {fixed_info.artwork_image.map((image, index) => (
                <SmallImage
                  key={index}
                  src={image}
                  alt={`작품 이미지 ${index + 1}`}
                />
              ))}
            </ImageList>
            <BigImage
              src={fixed_info.artwork_image[0]}
              alt="작품 메인 이미지"
            />
          </ImageContainer>
          <TextContainer>
            <DetailInform
              authorName={fixed_info.author_name}
              artworkTitle={fixed_info.artwork_title}
              year={fixed_info.year}
              material={fixed_info.material}
              dimensions={fixed_info.dimensions}
              size={fixed_info.size.toString()}
              category={fixed_info.category}
              genre={fixed_info.genre}
            />
            <LikeButton
              onClick={() =>
                toggleLike({ artworkId: Number(id), isAuction: false })
              }
              disabled={isLiking}
            >
              <Text size={16} color="white" weight="medium">
                마이 컬렉션
              </Text>
            </LikeButton>
          </TextContainer>
        </TopContainer>
        <BottomContainer>
          {/* TODO[서윤] - 카테고리 선택시 스크롤 구현 */}
          <ArtworkDetailCategory />
          {/* TODO[서윤] - 내 공간 구현 */}
          <CategoryContainer>
            <Text size={20} color="black" weight="semibold">
              작품 소개
            </Text>
            <Text size={16} color="font03gray" weight="regular">
              {tab_data.description}
            </Text>
          </CategoryContainer>
          <CategoryContainer>
            <Text size={20} color="black" weight="semibold">
              작가 소개
            </Text>
            <AuthorContainer>
              <ProfileContainer>
                <AuthorProfile
                  authorId={tab_data.author_id}
                  AuthorName={tab_data.author_name}
                  artworkCount={tab_data.artwork_count}
                  exhibitionCount={tab_data.exhibition_count}
                  profileImage={tab_data.author_image}
                />
                <MoreButton authorId={tab_data.author_id} />
              </ProfileContainer>
              <Text size={16} color="font03gray" weight="regular">
                {/* 작가 설명이 없는 경우 기본 메시지 표시 */}
                {tab_data.work_style
                  ? tab_data.work_style
                  : '작가 소개 정보가 없습니다.'}
              </Text>
            </AuthorContainer>
          </CategoryContainer>
          <CategoryContainer>
            <TitleContainer>
              <Text size={20} color="black" weight="semibold">
                다른 작품
              </Text>
              <ArrowContainer>
                <Arrow
                  src={ArrowLeft}
                  alt="이전"
                  onClick={handlePrevClick}
                  style={{
                    opacity: startIndex === 0 ? 0.5 : 1,
                    cursor: startIndex === 0 ? 'default' : 'pointer',
                  }}
                />
                <Arrow
                  src={ArrowRight}
                  alt="다음"
                  onClick={handleNextClick}
                  style={{
                    opacity:
                      startIndex + itemsPerPage >= artworks.length ? 0.5 : 1,
                    cursor:
                      startIndex + itemsPerPage >= artworks.length
                        ? 'default'
                        : 'pointer',
                  }}
                />
              </ArrowContainer>
            </TitleContainer>
            <ArtworkContainer>
              {visibleArtworks.map((artwork) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const handleArtworkClick = useHandleLink(
                  `/artwork/${artwork.id}`
                );
                return (
                  <ArtworkImage
                    key={artwork.id}
                    src={artwork.thumbnail}
                    alt={artwork.title}
                    onClick={handleArtworkClick}
                  />
                );
              })}
            </ArtworkContainer>
          </CategoryContainer>
        </BottomContainer>
      </Container>
    </PageLayout>
  );
};
