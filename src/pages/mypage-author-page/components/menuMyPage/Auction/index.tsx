import {
  AuctionContainer,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from './index.style';

import { useGetAuthorMypage } from '@/pages/mypage-author-page/hooks/useGetAuthorMypage';

/**
 * @description 작가의 경매 내역을 표시하는 컴포넌트
 * @author 노찬영
 */

export const AuthorAuction = () => {
  const { userMypageData } = useGetAuthorMypage();

  // 작가의 경매 내역 가져오기
  const auctions = userMypageData.auctions;

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
          {auctions.map((auction) => (
            <TableRow key={auction.auction_id}>
              <TableCell>{`${auction.auction.artwork.title} - ${auction.auction.artwork.author.author_name}`}</TableCell>
              <TableCell>
                {new Date(auction.bid_date).toLocaleDateString('ko-KR')}
              </TableCell>
              <TableCell>
                {new Intl.NumberFormat('ko-KR', {
                  style: 'currency',
                  currency: 'KRW',
                }).format(auction.bid_price)}
              </TableCell>
              <TableCell>
                {auction.status === 'BID'
                  ? '경매완료'
                  : auction.status === 'PARTICIPATE'
                  ? '입찰중'
                  : auction.status}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </AuctionContainer>
  );
};

export default AuthorAuction;
