import FallbackUI from '@/components/common/FallbackUI';

import DefaultErrorFallbackUI from '@/components/common/Error/DefaultErrorFallbackUI';
import {
  AuctionContainer,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from './index.style';

/**
 * @description 작품 구매자의 경매 내역을 표시하는 컴포넌트
 * @param {number} userId - 사용자 ID
 * @author 노찬영
 */

interface AuctionItem {
  artwork_id: number;
  title: string;
  author: {
    name: string;
  };
  price: number;
  created_at: string;
  status: string;
}

// 경매 내역 목데이터
const mockAuctions: AuctionItem[] = [
  {
    artwork_id: 1,
    title: '숲의 빛 (Light of the Forest)',
    author: { name: '김예린' },
    price: 1200000,
    created_at: '2023-12-25T12:00:00Z',
    status: '응찰중',
  },
  {
    artwork_id: 2,
    title: '숲속의 정오 (Noon in the Forest)',
    author: { name: '윤지혜' },
    price: 850000,
    created_at: '2023-12-25T10:30:00Z',
    status: '입찰중',
  },
  {
    artwork_id: 3,
    title: '푸른 시간 (The Blue Hour)',
    author: { name: '정민우' },
    price: 2500000,
    created_at: '2023-12-25T09:45:00Z',
    status: '응찰중',
  },
];

export const Auction = () => {
  const isLoading = false;
  const error = null;

  if (isLoading) return <FallbackUI />;
  if (error)
    return (
      <DefaultErrorFallbackUI
        resetErrorBoundary={() => console.log('에러 초기화')}
        error={error}
      />
    );

  return (
    <AuctionContainer>
      <h1>경매</h1>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>작품정보</TableHeader>
            <TableHeader>경매정보</TableHeader>
            <TableHeader>금액</TableHeader>
            <TableHeader>진행상황</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {mockAuctions.map((auction) => (
            <TableRow key={auction.artwork_id}>
              <TableCell>{`${auction.title} - ${auction.author.name}`}</TableCell>
              <TableCell>
                {new Date(auction.created_at).toLocaleDateString('ko-KR')}
              </TableCell>
              <TableCell>{`₩${auction.price.toLocaleString()}`}</TableCell>
              <TableCell>{auction.status}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </AuctionContainer>
  );
};

export default Auction;
