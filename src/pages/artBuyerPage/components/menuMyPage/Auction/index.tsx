import {
  AuctionButton,
  AuctionContainer,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from './index.style';
import { useNavigate } from 'react-router-dom';
import { useGetBuyerMypage } from '@/pages/artBuyerPage/hooks/useGetBuyerMypage';

/**
 * @description 작품 구매자의 경매 내역을 표시하는 컴포넌트
 * @author 노찬영
 */
export const ArtBuyerAuction = () => {
  const { userMypageData } = useGetBuyerMypage();
  const navigate = useNavigate();

  const { auctions } = userMypageData;

  const handleBtnClick = (auctionId: number) => {
    navigate(`/auction/${auctionId}`);
  };

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
            <TableHeader></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {auctions?.map((auction) => (
            <TableRow key={auction.auction_id}>
              <TableCell>{`${auction.auction.artwork.title} - ${auction.auction.artwork.author.author_name}`}</TableCell>
              <TableCell>
                {new Date(auction.bid_date).toLocaleDateString('ko-KR')}
              </TableCell>
              <TableCell>{`₩${auction.bid_price.toLocaleString()}`}</TableCell>
              <TableCell>{auction.status}</TableCell>
              <TableCell>
                {auction.status === '응찰중' && (
                  <AuctionButton
                    onClick={() => handleBtnClick(auction.auction_id)}
                  >
                    입찰하기
                  </AuctionButton>
                )}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </AuctionContainer>
  );
};

export default ArtBuyerAuction;
