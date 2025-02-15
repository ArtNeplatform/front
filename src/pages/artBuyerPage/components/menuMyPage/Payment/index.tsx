import {
  PaymentContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  PaymentButton,
} from './index.style';

import { useGetBuyerMypage } from '@/pages/artBuyerPage/hooks/useGetBuyerMypage';
import { useKakaoPay } from '@/pages/artBuyerPage/hooks/useKakaoPay';

/**
 * @description 작품 구매자의 결제 내역을 표시하는 컴포넌트
 * @author 노찬영
 */
export const Payment = () => {
  const { userMypageData } = useGetBuyerMypage();
  const { initiatePayment } = useKakaoPay();

  const { payments } = userMypageData;

  const handleBtnClick = (paymentId: number) => {
    initiatePayment(paymentId);
  };

  const getPaymentStatus = (status: string) => {
    if (status === 'COMPLETED') return '결제 완료';
    if (status === 'PENDING') return '결제 대기중';
    return status;
  };

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
            <TableHeader></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {payments?.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{`${payment.auction.artwork.title} - ${payment.auction.artwork.author.author_name}`}</TableCell>
              <TableCell>{`₩${payment.payment_price.toLocaleString()}`}</TableCell>
              <TableCell>
                {new Date(payment.created_at).toLocaleDateString('ko-KR')}
              </TableCell>
              <TableCell>{getPaymentStatus(payment.payment_status)}</TableCell>
              <TableCell>
                {payment.payment_status === 'PENDING' && (
                  <PaymentButton onClick={() => handleBtnClick(payment.id)}>
                    결제하기
                  </PaymentButton>
                )}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </PaymentContainer>
  );
};

export default Payment;
