import {
  PaymentContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  PaymentButton,
} from './index.style';
import { useKakaoPay } from '@/pages/artBuyerPage/hooks/useKakaoPay';

/**
 * @description 작품 구매자의 결제 내역을 표시하는 컴포넌트
 * @param {number} userId - 사용자 ID
 * @author 노찬영
 */

interface PaymentItem {
  artwork_id: number;
  title: string;
  author: {
    name: string;
  };
  price: number;
  created_at: string;
  status: string;
}

// 결제 내역 목데이터
const mockPayments: PaymentItem[] = [
  {
    artwork_id: 1,
    title: '숲의 빛 (Light of the Forest)',
    author: { name: '김예린' },
    price: 1200000,
    created_at: '2023-12-25T12:00:00Z',
    status: '결제 대기중',
  },
  {
    artwork_id: 2,
    title: '숲속의 정오 (Noon in the Forest)',
    author: { name: '윤지혜' },
    price: 850000,
    created_at: '2023-12-25T10:30:00Z',
    status: '결제 완료',
  },
  {
    artwork_id: 3,
    title: '푸른 시간 (The Blue Hour)',
    author: { name: '정민우' },
    price: 2500000,
    created_at: '2023-12-25T09:45:00Z',
    status: '낙찰',
  },
];

export const Payment = () => {
  const { initiatePayment } = useKakaoPay();

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
          {mockPayments.map((payment) => (
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
