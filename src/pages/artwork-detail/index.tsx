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
  PlusIcon,
  BottomContainer,
  CategoryContainer,
  AuthorContainer,
  ProfileContainer,
  TitleContainer,
  ArrowContainer,
  Arrow,
  ArtworkContainer,
  ArtworkImage,
  MySpaceContainer,
  SpaceAllContainer,
  SpaceImg,
  SpaceImgContainer,
  SpaceText,
  BigSpaceContainer,
  AreaContainer,
  AreaLine,
  BigSpaceImg,
  BigImageContainer,
  SpaceArtwork,
  // SpaceButtonContainer,
  // ButtonContainer,
} from './index.style.ts';
import { useHandleLink } from '@/hooks/common/useHandleLink.ts';
import { DetailInform } from '@/pages/artwork-detail/components/DetailInform/index.tsx';
import { ArtworkDetailCategory } from '@/pages/artwork-detail/components/ArtworkDetailCategory/index.tsx';
import { AuthorProfile } from '@/pages/artwork-detail/components/AuthorProfile/index.tsx';
import { MoreButton } from '@/pages/artwork-detail/components/MoreButton/index.tsx';
import { useParams } from 'react-router-dom';
import { useGetArtworkDetail } from '@/pages/artwork-detail/hooks/useGetArtworkDetail';
import { useToggleArtworkLike } from '@/pages/artwork-detail/hooks/useToggleArtworkLike';
import { useScrollToSection } from '@/pages/artwork-detail/hooks/useScrollToSection.ts';
import ArrowLeft from '@/assets/svg/arrow-left-black.svg';
import ArrowRight from '@/assets/svg/arrow-right-black.svg';
import Plus from '@/assets/svg/icon-plus.svg';
import DefaultSpace from '@/assets/png/example_space.png';
import ExampleSpace2 from '@/assets/png/example_space_2.png';
import ExampleSpace3 from '@/assets/png/example_space_3.png';
import ExampleSpace4 from '@/assets/png/example_space_4.png';
import ExampleSpace5 from '@/assets/png/example_space_5.png';
import SpaceLeft from '@/assets/svg/space-left.svg';
import SpaceRight from '@/assets/svg/space-right.svg';

export const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { artworkData, isLoading } = useGetArtworkDetail(Number(id));
  const { toggleLike, isPending: isLiking } = useToggleArtworkLike();
  const { sectionRefs, scrollToSection } = useScrollToSection();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;
  const [selectedSpaceIndex, setSelectedSpaceIndex] = useState(0);

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

  const { fixed_info, tab_data } = artworkData;
  const artworks = tab_data.other_artworks || [];
  const userspaces = tab_data.userspace || [];
  const visibleArtworks = artworks.slice(startIndex, startIndex + itemsPerPage);

  const defaultSpaces = [
    { userspace_id: -1, name: '기본 공간', image_url: DefaultSpace, area: '4' },
    {
      userspace_id: -2,
      name: '기본 공간 2',
      image_url: ExampleSpace2,
      area: '2',
    },
    {
      userspace_id: -3,
      name: '기본 공간 3',
      image_url: ExampleSpace3,
      area: '3',
    },
    {
      userspace_id: -4,
      name: '기본 공간 4',
      image_url: ExampleSpace4,
      area: '5',
    },
    {
      userspace_id: -5,
      name: '기본 공간 5',
      image_url: ExampleSpace5,
      area: '4',
    },
  ];

  // 기본 공간 5개 + 유저 공간 추가
  const combinedSpaces = [...defaultSpaces, ...userspaces];

  // 현재 화면에 보일 공간 목록 (최대 5개씩 슬라이드)
  const visibleUserspaces = combinedSpaces.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // 선택된 공간 인덱스가 -1 ~ -5면 기본 공간 중 하나를 선택한 것
  const selectedSpace = combinedSpaces[selectedSpaceIndex] ?? null;

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

  const smallImageList = fixed_info.artwork_image.filter(
    (_, index) => index !== selectedImageIndex
  );

  const handleImageClick = (index: number) => {
    const originalIndex = fixed_info.artwork_image.findIndex(
      (img) => img === smallImageList[index]
    );
    setSelectedImageIndex(originalIndex);
  };

  const handleUserNextClick = () => {
    if (startIndex + itemsPerPage >= userspaces.length) return;
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, userspaces.length - itemsPerPage)
    );
  };

  const handleSpaceClick = (index: number) => {
    setSelectedSpaceIndex(index);
  };

  const artworkSize = fixed_info.size.toString(); // "사이즈"
  const artworkWidth = parseFloat(artworkSize.split(' x ')[0]); // 너비
  const userSpaceWidth = parseFloat(selectedSpace?.area ?? '4'); // 선택된 공간 너비 (m)
  const maxContainerWidth = 995; // BigImageContainer 너비

  // 작품을 공간 크기에 맞게 조정
  const calculatedArtworkWidth =
    (artworkWidth / 10) * (maxContainerWidth / userSpaceWidth);

  return (
    <PageLayout>
      <Container>
        <TopContainer>
          <ImageContainer
            $isSingleImage={fixed_info.artwork_image.length === 1}
          >
            <ImageList $isSingleImage={fixed_info.artwork_image.length === 1}>
              {smallImageList.map((image, index) => (
                <SmallImage
                  key={index}
                  src={image}
                  alt={`작품 이미지 ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </ImageList>
            <BigImage
              src={fixed_info.artwork_image[selectedImageIndex]}
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
              <PlusIcon src={Plus} alt="마이 컬렉션 추가" />
              <Text size={16} color="white" weight="medium">
                마이 컬렉션
              </Text>
            </LikeButton>
          </TextContainer>
        </TopContainer>
        <BottomContainer>
          {/* 선택 섹션 */}
          <ArtworkDetailCategory scrollToSection={scrollToSection} />

          {/* 내 공간 섹션 */}
          <CategoryContainer>
            <MySpaceContainer>
              <Arrow
                $isBig={true}
                src={ArrowLeft}
                alt="이전"
                onClick={handlePrevClick}
                style={{
                  opacity: startIndex === 0 ? 0.5 : 1,
                  cursor: startIndex === 0 ? 'default' : 'pointer',
                }}
              />
              <SpaceAllContainer>
                {visibleUserspaces.map((space, index) => {
                  const actualIndex = startIndex + index; // 전체 리스트 기준 인덱스 계산
                  return (
                    <SpaceImgContainer
                      key={space.userspace_id}
                      $isSelected={selectedSpaceIndex === actualIndex}
                      onClick={() => handleSpaceClick(actualIndex)}
                    >
                      <SpaceImg src={space.image_url} alt={space.name} />
                      {selectedSpaceIndex === actualIndex && (
                        <SpaceText>{space.name}</SpaceText>
                      )}
                    </SpaceImgContainer>
                  );
                })}
              </SpaceAllContainer>

              <Arrow
                $isBig={true}
                src={ArrowRight}
                alt="다음"
                onClick={handleUserNextClick}
                style={{
                  opacity:
                    startIndex + itemsPerPage >= userspaces.length ? 0.5 : 1,
                  cursor:
                    startIndex + itemsPerPage >= userspaces.length
                      ? 'default'
                      : 'pointer',
                }}
              />
            </MySpaceContainer>

            <BigSpaceContainer>
              <AreaContainer>
                <AreaLine src={SpaceLeft} alt="너비" />
                <Text size={14} color="font03gray" weight="medium">
                  {selectedSpace?.area ?? 4}m
                </Text>
                <AreaLine src={SpaceRight} alt="너비" />
              </AreaContainer>
              <BigImageContainer>
                <BigSpaceImg
                  src={selectedSpace ? selectedSpace.image_url : DefaultSpace}
                  alt="내 공간"
                />
                <SpaceArtwork
                  src={fixed_info.artwork_image[selectedImageIndex]}
                  alt="그림"
                  $width={calculatedArtworkWidth}
                />
              </BigImageContainer>
            </BigSpaceContainer>

            {/* TODO[서윤] - 내 공간 등록 구현 */}
            {/* <SpaceButtonContainer>
              <ButtonContainer>
                <Text size={14} color="black" weight="semibold">
                  내 공간 등록
                </Text>
                <Arrow $isBig={false} src={ArrowRight} alt="내 공간 등록" />
              </ButtonContainer>
            </SpaceButtonContainer> */}
          </CategoryContainer>

          {/* 작품 소개 섹션 */}
          <CategoryContainer ref={sectionRefs['작품소개']}>
            <Text size={20} color="black" weight="semibold">
              작품 소개
            </Text>
            <Text size={16} color="font03gray" weight="regular">
              {tab_data.description}
            </Text>
          </CategoryContainer>

          {/* 작가 소개 섹션 */}
          <CategoryContainer ref={sectionRefs['작가소개']}>
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

          {/* 다른 작품 섹션 */}
          <CategoryContainer ref={sectionRefs['다른작품']}>
            <TitleContainer>
              <Text size={20} color="black" weight="semibold">
                다른 작품
              </Text>
              <ArrowContainer>
                <Arrow
                  $isBig={false}
                  src={ArrowLeft}
                  alt="이전"
                  onClick={handlePrevClick}
                  style={{
                    opacity: startIndex === 0 ? 0.5 : 1,
                    cursor: startIndex === 0 ? 'default' : 'pointer',
                  }}
                />
                <Arrow
                  $isBig={false}
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
