import FallbackUI from '@/components/common/FallbackUI';
import {
  PaymentContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
} from './index.style';
import DefaultErrorFallbackUI from '@/components/common/Error/DefaultErrorFallbackUI';

import { ArtBuyerDataProps } from '@/types/artBuyer';

import { artBuyerData as rawArtBuyerData } from '@/pages/artBuyerPage/constants/artBuyer';

/**
 * @description 작품 구매자의 결제 내역을 표시하는 컴포넌트
 * @param {number} userId - 사용자 ID
 * @author 노찬영
 */

// 명시적으로 ArtBuyerDataProps 타입 지정
const artBuyerData: ArtBuyerDataProps = rawArtBuyerData;

const { payments } = artBuyerData.result;

export const Payment = () => {
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
    <PaymentContainer>
      <h1>결제</h1>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>작품정보</TableHeader>
            <TableHeader>금액</TableHeader>
            <TableHeader>입찰정보</TableHeader>
            <TableHeader>진행상황</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <TableRow key={payment.artwork_id}>
              <TableCell>{`${payment.title} - ${payment.author.name}`}</TableCell>
              <TableCell>{`₩${payment.price.toLocaleString()}`}</TableCell>
              <TableCell>
                {new Date(payment.created_at).toLocaleDateString('ko-KR')}
              </TableCell>
              <TableCell>{payment.status}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </PaymentContainer>
  );
};

export default Payment;
