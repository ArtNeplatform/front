import { PageLayout } from '@/components/common/PageLayout';
import { PagingButtons } from '@/components/common/PagingButtons';
import { Text } from '@/styles/text';
import { useState } from 'react';
import { Container, TextWrapper, GridContainer } from './index.style';
import SortingTextButton from '@/components/common/SortingTextButton';
import { AuthorBox } from './components/AuthorBox';
import { useNavigate } from 'react-router-dom';
import { useGetAuthorLists } from './hooks/useGetAuthorLists';

export const Author = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8; // 한 페이지당 8명씩 표시
  const navigate = useNavigate();

  // const dummyAuthors = Array.from({ length: 45 }, (_, index) => ({
  //   authorId: `${index + 1}`,
  //   author: `작가 ${index + 1}`,
  //   artworkCount: Math.floor(Math.random() * 100),
  //   exhibitionCount: Math.floor(Math.random() * 20),
  //   imageUrl:
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqV-EpDA9QlYzrKkI-xVr6FFolVlQaqZQQbw&s',
  // }));

  const { data, isLoading, error } = useGetAuthorLists(
    'popularity',
    page,
    itemsPerPage
  );

  // 페이지네이션 관련
  const paginatedAuthors = data?.authorInfos
    ? Object.keys(data.authorInfos).map((key) => ({
        authorId: data.authorInfos[key].author_id,
        author: key,
        artworkCount: data.authorInfos[key].artwork_count,
        exhibitionCount: data.authorInfos[key].exhibition_count,
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqV-EpDA9QlYzrKkI-xVr6FFolVlQaqZQQbw&s',
      }))
    : [];

  if (isLoading) return <div>Loading...</div>; // 로딩 중 표시
  if (error) return <div>작가 목록을 불러오는데 실패했습니다.</div>; // 오류 표시

  return (
    <PageLayout>
      <Container>
        <TextWrapper>
          <Text size={48} color="black" weight="semibold">
            Author
          </Text>
        </TextWrapper>
        <SortingTextButton />
        <GridContainer>
          {paginatedAuthors.map((author, index) => (
            <AuthorBox
              key={index}
              {...author}
              onClick={() => {
                navigate(`/author/${author.authorId}`);
              }}
            />
          ))}
        </GridContainer>
        <PagingButtons
          totalPage={data ? data.totalPages : 1}
          page={page}
          setPage={setPage}
        />
      </Container>
    </PageLayout>
  );
};
