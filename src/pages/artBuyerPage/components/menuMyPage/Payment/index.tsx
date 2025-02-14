import {
  PaymentContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  PaymentButton,
} from './index.style';
import { useGetUserMypage } from '@/pages/artBuyerPage/hooks/useGetUserMypage';

interface PaymentProps {
  userId: number;
}

/**
 * @description 작품 구매자의 결제 내역을 표시하는 컴포넌트
 * @param {number} userId - 사용자 ID
 * @author 노찬영
 */
export const Payment = ({ userId }: PaymentProps) => {
  const { userMypageData } = useGetUserMypage(userId);

  const { result } = userMypageData;

  // result가 TBuyerMypage인지 확인
  if (!('payments' in result)) {
    return <p>결제 정보가 없습니다.</p>;
  }

  const { payments } = result;

  const handleBtnClick = (paymentId: number) => {
    // TODO: 카카오페이 결제 API 연결
    console.log(`결제하기 버튼 클릭: 결제자 ID ${paymentId}`);
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
                <PaymentButton
                  onClick={() => handleBtnClick(payment.artwork_id)}
                >
                  결제하기
                </PaymentButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </PaymentContainer>
  );
};

export default Payment;
