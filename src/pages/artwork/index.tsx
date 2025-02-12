import { PageLayout } from '@/components/common/PageLayout';
import { PagingButtons } from '@/components/common/PagingButtons';
import { Text } from '@/styles/text';
import { useState } from 'react';
import {
  Container,
  TextWrapper,
  GridContainer,
  ArtworkContainer,
} from './index.style';
import SortingTextButton from '@/components/common/SortingTextButton';
import { useNavigate } from 'react-router-dom';
import { Artwork } from '@/components/common/ArtWork';
import { useGetArtworks } from '@/pages/artwork/hooks/useGetArtworks';

export const ArtWork = () => {
  const [page, setPage] = useState(1);
  const [sortingType, setSortingType] = useState<
    '이름순' | '최신순' | '인기순'
  >('이름순');
  const itemsPerPage = 16;
  const navigate = useNavigate();
  const { artworkData, isLoading } = useGetArtworks(page, itemsPerPage);

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

  const sortedArtworks = artworkData.result.artworks
    ? [...artworkData.result.artworks].sort((a, b) => {
        if (sortingType === '이름순') {
          return a.title.localeCompare(b.title, 'ko');
        }
        if (sortingType === '최신순') {
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        }
        return 0; // 인기순 미구현
      })
    : [];

  return (
    <PageLayout>
      <Container>
        <TextWrapper>
          <Text size={48} color="black" weight="semibold">
            Artwork
          </Text>
        </TextWrapper>
        <SortingTextButton
          selectedSorting={sortingType}
          onSortingSelect={setSortingType}
        />
        <GridContainer>
          {sortedArtworks.map((artwork) => (
            <ArtworkContainer key={artwork.id}>
              <Artwork
                artworkId={artwork.id}
                imageUrl={artwork.thumbnail_image_url}
                artist={artwork.author_name}
                title={artwork.title}
                artworkWidth={parseFloat(artwork.width)}
                artworkHeight={parseFloat(artwork.height)}
                variant="lazy"
                isLiked={artwork.is_liked}
                isAuction={false}
                onClick={() => navigate(`/artwork/${artwork.id}`)}
              />
            </ArtworkContainer>
          ))}
        </GridContainer>
        <PagingButtons
          totalPage={Math.ceil(artworkData.result.total / itemsPerPage)}
          page={page}
          setPage={setPage}
        />
      </Container>
    </PageLayout>
  );
};
