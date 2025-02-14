import { PageLayout } from '@/components/common/PageLayout';
import { Container, GridContainer, TextWrapper } from './index.style';
import { Text } from '@/styles/text';
import SortingTextButton from '@/components/common/SortingTextButton';
import { ExhibitionItem } from '@/components/common/ExhibitionItem';
import { useNavigate } from 'react-router-dom';
import { PagingButtons } from '@/components/common/PagingButtons';
import { useEffect, useState } from 'react';
import { useGetExhibitionList } from './hooks/useGetExhibitionList';
import { TExhibition } from '@/apis/exhibition/type';

export const Exhibition = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedSorting, setSelectedSorting] = useState<
    '이름순' | '최신순' | '인기순'
  >('이름순');

  const { data, isLoading, error } = useGetExhibitionList(
    selectedSorting === '이름순'
      ? 'title'
      : selectedSorting === '최신순'
      ? 'latest'
      : 'popular'
  );

  // const dummyExhibitions = Array.from({ length: 12 }, (_, index) => ({
  //   id: index + 1,
  //   title: `Exhibition ${index + 1}`,
  //   imageUrl: `https://picsum.photos/327/${Math.floor(
  //     250 + Math.random() * 150
  //   )}?random=${Math.random()}`,
  // }));

  console.log(data);

  const paginatedExhibitions = data?.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  useEffect(() => {
    // API 호출 시 page 변경사항 반영하도록 추가로 처리할 수 있습니다.
    if (data) {
      setPage(1); // 예시로 첫 페이지로 돌아가도록 처리
    }
  }, [selectedSorting, data]);

  const handleSortingSelect = (sorting: '이름순' | '최신순' | '인기순') => {
    setSelectedSorting(sorting); // 정렬 기준 변경
  };

  if (isLoading) return <div>Loading...</div>; // 로딩 중 표시
  if (error) return <div>전시 목록을 불러오는데 실패했습니다.</div>; // 오류 표시

  return (
    <PageLayout>
      <Container>
        <TextWrapper>
          <Text size={48} color="black" weight="semibold">
            Exhibition
          </Text>
        </TextWrapper>
        <SortingTextButton
          selectedSorting={selectedSorting}
          onSortingSelect={handleSortingSelect}
        />
        <GridContainer>
          {paginatedExhibitions?.map((exhibition: TExhibition) => (
            <ExhibitionItem
              key={exhibition.exhibition_id}
              imageUrl={exhibition.image_url}
              title={exhibition.title}
              onClick={() =>
                navigate(`/exhibition/${exhibition.exhibition_id}`)
              }
            />
          ))}
        </GridContainer>
        <PagingButtons
          totalPage={Math.ceil(data?.length / itemsPerPage)}
          page={page}
          setPage={setPage}
        />
      </Container>
    </PageLayout>
  );
};
