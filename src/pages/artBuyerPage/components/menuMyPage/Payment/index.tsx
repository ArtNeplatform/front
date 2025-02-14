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
          {payments.map((payment) => (
            <TableRow key={payment.artwork_id}>
              <TableCell>{`${payment.title} - ${payment.author.name}`}</TableCell>
              <TableCell>{`₩${payment.price.toLocaleString()}`}</TableCell>
              <TableCell>
                {new Date(payment.created_at).toLocaleDateString('ko-KR')}
              </TableCell>
              <TableCell>{payment.status}</TableCell>
              <TableCell>
                {payment.status === '결제 대기중' && (
                  <PaymentButton
                    onClick={() => handleBtnClick(payment.artwork_id)}
                  >
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
