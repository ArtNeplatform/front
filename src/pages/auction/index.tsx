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

export const Auction = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 16;
  const navigate = useNavigate();

  const dummyAuctions = Array.from({ length: 45 }, (_, index) => ({
    auction_id: index + 1,
    status: index % 2 === 0 ? '경매 진행 중' : '경매 완료',
    imageUrl: `https://picsum.photos/300/${Math.floor(
      250 + Math.random() * 150
    )}?random=${Math.random()}`,
    artist: `작가 ${index + 1}`,
    title: `작품 ${index + 1}`,
    artworkHeight: Math.floor(Math.random() * 100) + 10,
    artworkWidth: Math.floor(Math.random() * 100) + 10,
    size: `${Math.floor(Math.random() * 100) + 10}cm * ${
      Math.floor(Math.random() * 100) + 10
    }cm`,
    startPrice: Math.floor(Math.random() * 100000) + 1000,
    price: Math.floor(Math.random() * 100000) + 1000,
    is_liked: Math.random() > 0.5,
  }));

  const paginatedAuctions = dummyAuctions.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <PageLayout>
      <Container>
        <TextWrapper>
          <Text size={48} color="black" weight="semibold">
            Auction
          </Text>
        </TextWrapper>
        <SortingTextButton />
        <GridContainer>
          {paginatedAuctions.map((auction, index) => (
            <ArtworkContainer key={index}>
              <Artwork
                {...auction}
                onClick={() => {
                  navigate(`/auction/${auction.auction_id}`);
                }}
              />
            </ArtworkContainer>
          ))}
        </GridContainer>
        <PagingButtons
          totalPage={Math.ceil(dummyAuctions.length / itemsPerPage)}
          page={page}
          setPage={setPage}
        />
      </Container>
    </PageLayout>
  );
};
