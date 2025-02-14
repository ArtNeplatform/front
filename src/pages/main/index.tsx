import { useState } from 'react';
import { PageLayout } from '@/components/common/PageLayout';
import { Text } from '@/styles/text';
import {
  Container,
  SubContainer,
  BoxContainer,
  ArtWorkContainer,
  AuthorContainer,
  AuthorInformContainer,
  AuthorArtwork,
  InformTopContainer,
  FiveAuthorContainer,
  AuthorName,
  ExhibitContainer,
  ExhibitRightContainer,
} from './index.style.ts';
import { Carousel } from '@/pages/main/components/Carousel/index.tsx';
import { MainTitle } from '@/pages/main/components/MainTitle/index.tsx';
import { AuthorProfile } from '@/pages/main/components/AuthorProfile/index.tsx';
import { ExhibitCard } from '@/pages/main/components/ExhibitCard/index.tsx';
import { CategoryList } from '@pages/main/constants/category.ts';
import { Artwork } from '@components/common/ArtWork';
import CarouselImageEx from '@/assets/png/main-carousel-1.png';
import { useGetMainData } from '@/pages/main/hooks/useGetMainData';
import { useHandleLink } from '@/hooks/common/useHandleLink.ts';

export const Main = () => {
  const { mainData, isLoading } = useGetMainData();

  const authors = mainData?.authors || [];
  const [selectedAuthorId, setSelectedAuthorId] = useState<number | null>(
    authors.length > 0 ? authors[0].author_id : null
  );

  const artworks = mainData?.artworks || [];
  const ongoingAuctions = mainData?.ongoingAuctions || [];
  const ongoingExhibitions = mainData?.ongoingExhibitions || [];

  const selectedAuthor = authors.find(
    (author) => author.author_id === selectedAuthorId
  );
  const artworkImageUrl = selectedAuthor?.artwork_image_url || CarouselImageEx;

  if (isLoading || !mainData) return <div>로딩 중...</div>;

  return (
    <PageLayout>
      <Carousel />
      <Container>
        {/* 인기 작품 섹션 */}
        <BoxContainer>
          <MainTitle category={CategoryList[0]} />
          <ArtWorkContainer>
            {artworks.map((artwork) => (
              <Artwork
                artworkId={artwork.artwork_id}
                key={artwork.artwork_id}
                imageUrl={artwork.thumbnail_image_url}
                artist={artwork.author_name}
                title={artwork.title}
                artworkWidth={artwork.width}
                artworkHeight={artwork.height}
                variant="lazy"
                isLiked={artwork.is_like}
                isAuction={false}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                onClick={useHandleLink(`/artwork/${artwork.artwork_id}`)}
              />
            ))}
          </ArtWorkContainer>
        </BoxContainer>

        {/* 경매 작품 섹션 */}
        <BoxContainer>
          <MainTitle category={CategoryList[1]} />
          <ArtWorkContainer>
            {ongoingAuctions.map((auction) => (
              <Artwork
                artworkId={auction.auction_id}
                key={auction.auction_id}
                imageUrl={auction.thumbnail_image_url}
                artist={auction.author_name}
                title={auction.title}
                artworkWidth={auction.width}
                artworkHeight={auction.height}
                price={auction.current_price}
                startPrice={auction.start_price}
                variant="lazy"
                isLiked={auction.is_like}
                isAuction={true}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                onClick={useHandleLink(`/auction/${auction.auction_id}`)}
              />
            ))}
          </ArtWorkContainer>
        </BoxContainer>
      </Container>

      {/* 인기 작가 섹션 */}
      {authors.length > 0 && (
        <AuthorContainer>
          <SubContainer>
            <AuthorInformContainer>
              <InformTopContainer>
                <Text size={38} color="black" weight="semibold">
                  인기 작가의 작품
                </Text>
                <FiveAuthorContainer>
                  {authors.map((author) => (
                    <AuthorName
                      key={author.author_id}
                      onClick={() => setSelectedAuthorId(author.author_id)}
                      $isSelected={selectedAuthorId === author.author_id}
                    >
                      <Text
                        size={15}
                        color={
                          selectedAuthorId === author.author_id
                            ? 'black'
                            : 'fontGray'
                        }
                        weight="medium"
                      >
                        {author.author_name}
                      </Text>
                    </AuthorName>
                  ))}
                </FiveAuthorContainer>
              </InformTopContainer>
              {selectedAuthor && (
                <AuthorProfile
                  authorId={selectedAuthor.author_id}
                  AuthorName={selectedAuthor.author_name}
                  artworkCount={selectedAuthor.artwork_count}
                  exhibitionCount={selectedAuthor.exhibition_count}
                  profileImage={selectedAuthor.author_image_url}
                />
              )}
            </AuthorInformContainer>
            <AuthorArtwork src={artworkImageUrl} alt="인기 작가의 작품" />
          </SubContainer>
        </AuthorContainer>
      )}

      <Container>
        {/* 진행 전시 섹션 */}
        {ongoingExhibitions.length > 0 && (
          <BoxContainer>
            <MainTitle category={CategoryList[2]} />
            <ExhibitContainer>
              <ExhibitCard
                isBig={true}
                exhibitionId={ongoingExhibitions[0].exhibition_id}
                imageUrl={ongoingExhibitions[0].image_url}
                title={ongoingExhibitions[0].title}
              />
              <ExhibitRightContainer>
                {ongoingExhibitions.slice(1).map((exhibit) => (
                  <ExhibitCard
                    key={exhibit.exhibition_id}
                    isBig={false}
                    exhibitionId={exhibit.exhibition_id}
                    imageUrl={exhibit.image_url}
                    title={exhibit.title}
                  />
                ))}
              </ExhibitRightContainer>
            </ExhibitContainer>
          </BoxContainer>
        )}
      </Container>
    </PageLayout>
  );
};
