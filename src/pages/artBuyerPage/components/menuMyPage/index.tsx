import Auction from './Auction';
import MyCollection from './MyCollection';
import Payment from './Payment';
import Profile from './profile';
import {
  MyPageContainer,
  MyPageWrapper,
  ProfileContainer,
} from './index.style';

import { useGetUserMypage } from '@/pages/artBuyerPage/hooks/useGetUserMypage';

interface UserProps {
  // TODO[찬영] - userId 실제 로그인된 사용자 ID로 변경
  userId: number;
  setSelectedMenu: (menu: '마이페이지' | '계정설정' | '구매 작품') => void;
}

export const MenuMyPage = ({ userId, setSelectedMenu }: UserProps) => {
  const { userMypageData } = useGetUserMypage(userId);

  const { result } = userMypageData || {};
  const paymentCounts = 'paymentCounts' in result ? result.paymentCounts : null;

  return (
    <MyPageWrapper>
      <ProfileContainer>
        <Profile
          // TODO[찬영] - 이름, 사진 데이터 연결
          myName={'홍길동'}
          profileImage={''}
          pendingPayments={paymentCounts?.pending ?? 0}
          completedPayments={paymentCounts?.completed ?? 0}
          receivedPayments={paymentCounts?.received ?? 0}
          onEditProfile={() => setSelectedMenu('계정설정')}
        />
      </ProfileContainer>
      <MyPageContainer>
        <Payment userId={userId} />
        <MyCollection userId={userId} />
        <Auction userId={userId} />
      </MyPageContainer>
    </MyPageWrapper>
  );
};

export default MenuMyPage;
