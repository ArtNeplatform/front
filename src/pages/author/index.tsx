import { PageLayout } from '@/components/common/PageLayout';
import { PagingButtons } from '@/components/common/PagingButtons';
import { Text } from '@/styles/text';
import { useState } from 'react';
import { Container, TextWrapper, GridContainer } from './index.style';
import SortingTextButton from '@/components/common/SortingTextButton';
import { AuthorBox } from './components/AuthorBox';

export const Author = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8; // 한 페이지당 8명씩 표시

  const dummyAuthors = Array.from({ length: 45 }, (_, index) => ({
    artist: `작가 ${index + 1}`,
    artworkCount: Math.floor(Math.random() * 100),
    exhibitionCount: Math.floor(Math.random() * 20),
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqV-EpDA9QlYzrKkI-xVr6FFolVlQaqZQQbw&s',
  }));

  const paginatedAuthors = dummyAuthors.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

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
            <AuthorBox key={index} {...author} />
          ))}
        </GridContainer>
        <PagingButtons
          totalPage={dummyAuthors.length / itemsPerPage}
          page={page}
          setPage={setPage}
        />
      </Container>
    </PageLayout>
  );
};
