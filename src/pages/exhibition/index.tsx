import { PageLayout } from '@/components/common/PageLayout';
import { Container, GridContainer, TextWrapper } from './index.style';
import { Text } from '@/styles/text';
import SortingTextButton from '@/components/common/SortingTextButton';
import { ExhibitionItem } from '@/components/common/ExhibitionItem';
import { useNavigate } from 'react-router-dom';
import { PagingButtons } from '@/components/common/PagingButtons';
import { useState } from 'react';

export const Exhibition = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const dummyExhibitions = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: `Exhibition ${index + 1}`,
    imageUrl: `https://picsum.photos/327/${Math.floor(
      250 + Math.random() * 150
    )}?random=${Math.random()}`,
  }));

  const paginatedExhibitions = dummyExhibitions.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  return (
    <PageLayout>
      <Container>
        <TextWrapper>
          <Text size={48} color="black" weight="semibold">
            Exhibition
          </Text>
        </TextWrapper>
        <SortingTextButton />
        <GridContainer>
          {paginatedExhibitions.map((exhibition, index) => (
            <ExhibitionItem
              key={index}
              {...exhibition}
              onClick={() => {
                navigate(`/exhibition/${exhibition.id}`);
              }}
            />
          ))}
        </GridContainer>
        <PagingButtons
          totalPage={Math.ceil(dummyExhibitions.length / itemsPerPage)}
          page={page}
          setPage={setPage}
        />
      </Container>
    </PageLayout>
  );
};
