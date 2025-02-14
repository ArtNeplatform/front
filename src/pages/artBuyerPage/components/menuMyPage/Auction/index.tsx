import {
  AuctionContainer,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from './index.style';
import { useGetUserMypage } from '@/pages/artBuyerPage/hooks/useGetUserMypage';

interface ArtBuyerAuctionnProps {
  userId: number;
}

/**
 * @description 작품 구매자의 경매 내역을 표시하는 컴포넌트
 * @author 노찬영
 */
export const ArtBuyerAuction = ({ userId }: ArtBuyerAuctionnProps) => {
  const { userMypageData } = useGetUserMypage(userId);

  const { result } = userMypageData;
  const { auctions } = result;

  return (
    <AuctionContainer>
      <h1>경매</h1>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>작품정보</TableHeader>
            <TableHeader>경매 종료일</TableHeader>
            <TableHeader>금액</TableHeader>
            <TableHeader>진행상황</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {auctions.map((auction) => (
            <TableRow key={auction.artwork_id}>
              <TableCell>{`${auction.title} - ${auction.author.name}`}</TableCell>
              <TableCell>
                {new Date(auction.end_date).toLocaleDateString('ko-KR')}
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

export default ArtBuyerAuction;
