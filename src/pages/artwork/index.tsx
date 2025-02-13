import { PageLayout } from '@/components/common/PageLayout';
import { PagingButtons } from '@/components/common/PagingButtons';
import { Text } from '@/styles/text';
import { useState } from 'react';
import {
  Container,
  TextWrapper,
  ButtonContainer,
  FilterButtonContainer,
  FilterContainer,
  FilterSelectedContainer,
  FilterInitContainer,
  InitIcon,
  MiniLine,
  SelectedFilterContainer,
  GridContainer,
  ArtworkContainer,
} from './index.style';
import SortingTextButton from '@/components/common/SortingTextButton';
import { useNavigate } from 'react-router-dom';
import { Artwork } from '@/components/common/ArtWork';
import { FilterButton } from '@/pages/artwork/components/FilterButton';
import { SelectedFilter } from '@/pages/artwork/components/SelectedFilter';
import { useGetArtworks } from '@/pages/artwork/hooks/useGetArtworks';
import IconInit from '@/assets/svg/icon-init.svg';

export const ArtWork = () => {
  const [page, setPage] = useState(1);
  const [sortingType, setSortingType] = useState<
    '이름순' | '최신순' | '인기순'
  >('이름순');
  const itemsPerPage = 16;

  const navigate = useNavigate();
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedForms, setSelectedForms] = useState<string[]>([]);

  const { artworkData, isLoading } = useGetArtworks(
    page,
    itemsPerPage,
    selectedThemes,
    selectedSizes,
    selectedForms,
    sortingType
  );

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

  const selectedFilters = [
    ...selectedThemes,
    ...selectedSizes,
    ...selectedForms,
  ];

  const removeFilter = (filter: string) => {
    setSelectedThemes((prev) => prev.filter((item) => item !== filter));
    setSelectedSizes((prev) => prev.filter((item) => item !== filter));
    setSelectedForms((prev) => prev.filter((item) => item !== filter));
  };

  const clearAllFilters = () => {
    setSelectedThemes([]);
    setSelectedSizes([]);
    setSelectedForms([]);
  };

  const sortedArtworks =
    sortingType === '이름순'
      ? [...artworkData.result.artworks].sort((a, b) =>
          a.title.localeCompare(b.title, 'ko')
        )
      : artworkData.result.artworks;

  return (
    <PageLayout>
      <Container>
        <TextWrapper>
          <Text size={48} color="black" weight="semibold">
            Artwork
          </Text>
        </TextWrapper>
        <ButtonContainer>
          <FilterContainer>
            <FilterButtonContainer>
              <FilterButton
                title="테마"
                checkboxes={[
                  { id: '풍경', label: '풍경' },
                  { id: '인물', label: '인물' },
                  { id: '정물', label: '정물' },
                  { id: '동물', label: '동물' },
                  { id: '추상', label: '추상' },
                  { id: '팝아트', label: '팝아트' },
                  { id: '오브제', label: '오브제' },
                ]}
                selectedFilters={selectedThemes}
                setSelectedFilters={setSelectedThemes}
              />
              <FilterButton
                title="크기"
                checkboxes={[
                  { id: '1~10호', label: '1~10호' },
                  { id: '~30호', label: '~30호' },
                  { id: '~60호', label: '~60호' },
                  { id: '~80호', label: '~80호' },
                  { id: '~100호', label: '~100호' },
                  { id: '100호 +', label: '100호 +' },
                ]}
                selectedFilters={selectedSizes}
                setSelectedFilters={setSelectedSizes}
              />
              <FilterButton
                title="형태"
                checkboxes={[
                  { id: '정방향', label: '정방향' },
                  { id: '가로형', label: '가로형' },
                  { id: '세로형', label: '세로형' },
                  { id: '원형', label: '원형' },
                  { id: '셋트', label: '셋트' },
                  { id: '입체/설치', label: '입체/설치' },
                  { id: '미디어', label: '미디어' },
                ]}
                selectedFilters={selectedForms}
                setSelectedFilters={setSelectedForms}
              />
            </FilterButtonContainer>
            <FilterSelectedContainer>
              <FilterInitContainer onClick={clearAllFilters}>
                <InitIcon src={IconInit} alt="초기화" />
                <Text size={14} color="fontGray" weight="medium">
                  초기화
                </Text>
              </FilterInitContainer>
              <MiniLine />
              <SelectedFilterContainer>
                <SelectedFilter
                  filters={selectedFilters}
                  onRemoveFilter={removeFilter}
                />
              </SelectedFilterContainer>
            </FilterSelectedContainer>
          </FilterContainer>
          <SortingTextButton
            selectedSorting={sortingType}
            onSortingSelect={setSortingType}
          />
        </ButtonContainer>
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
