import { PageLayout } from '@/components/common/PageLayout';
import { PagingButtons } from '@/components/common/PagingButtons';
import { Text } from '@/styles/text';
import { useEffect, useState } from 'react';
import {
  Container,
  TextWrapper,
  GridContainer,
  ArtworkContainer,
} from './index.style';
import SortingTextButton from '@/components/common/SortingTextButton';
import { useNavigate } from 'react-router-dom';
import { Artwork } from '@/components/common/ArtWork';
import { useGetAuctionLists } from './hooks/useGetAuctionLists';
import { TGetAuctionListResponse } from '@/apis/auction/type';

export const Auction = () => {
  const [page, setPage] = useState(1);
  const [selectedSorting, setSelectedSorting] = useState<
    '이름순' | '최신순' | '인기순'
  >('이름순');
  const itemsPerPage = 16;
  const navigate = useNavigate();

  const {
    data: auctions,
    isLoading,
    error,
  } = useGetAuctionLists(
    selectedSorting === '이름순'
      ? 'title'
      : selectedSorting === '최신순'
      ? 'latest'
      : 'popular'
  );

  // const dummyAuctions = Array.from({ length: 45 }, (_, index) => ({
  //   auction_id: index + 1,
  //   status: index % 2 === 0 ? '경매 진행 중' : '경매 완료',
  //   imageUrl: `https://picsum.photos/300/${Math.floor(
  //     250 + Math.random() * 150
  //   )}?random=${Math.random()}`,
  //   artist: `작가 ${index + 1}`,
  //   title: `작품 ${index + 1}`,
  //   artworkHeight: Math.floor(Math.random() * 100) + 10,
  //   artworkWidth: Math.floor(Math.random() * 100) + 10,
  //   size: `${Math.floor(Math.random() * 100) + 10}cm * ${
  //     Math.floor(Math.random() * 100) + 10
  //   }cm`,
  //   startPrice: Math.floor(Math.random() * 100000) + 1000,
  //   price: Math.floor(Math.random() * 100000) + 1000,
  //   is_liked: Math.random() > 0.5,
  // }));

  useEffect(() => {
    // API 호출 시 page 변경사항 반영하도록 추가로 처리할 수 있습니다.
    if (auctions) {
      setPage(1); // 예시로 첫 페이지로 돌아가도록 처리
    }
  }, [selectedSorting, auctions]); // sort가 변경될 때마다 호출됨

  const paginatedAuctions = auctions.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleSortingSelect = (sorting: '이름순' | '최신순' | '인기순') => {
    setSelectedSorting(sorting); // 정렬 기준 변경
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <PageLayout>
      <Container>
        <TextWrapper>
          <Text size={32} color="black" weight="semibold">
            Auction
          </Text>
        </TextWrapper>

        <SortingTextButton
          selectedSorting={selectedSorting}
          onSortingSelect={handleSortingSelect}
        />

        <GridContainer>
          {paginatedAuctions.map(
            (auction: TGetAuctionListResponse, index: number) => (
              <ArtworkContainer key={index}>
                <Artwork
                  artworkId={auction.auction_id}
                  imageUrl={auction.thumbnail_image_url} // thumbnail_image_url을 imageUrl로 매핑
                  artist={auction.author_name}
                  title={auction.title}
                  artworkWidth={auction.width}
                  artworkHeight={auction.height}
                  price={auction.current_price ?? auction.final_price} // 경매 상태에 따라 가격 선택
                  startPrice={auction.start_price}
                  onClick={() => {
                    navigate(`/auction/${auction.auction_id}`);
                  }}
                  isAuction={true}
                  isLiked={auction.is_liked}
                />
              </ArtworkContainer>
            )
          )}
        </GridContainer>
        <PagingButtons
          totalPage={Math.ceil(auctions.length / itemsPerPage)}
          page={page}
          setPage={setPage}
        />
      </Container>
    </PageLayout>
  );
};
