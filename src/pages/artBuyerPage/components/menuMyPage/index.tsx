import Auction from './Auction';
import MyCollection from './MyCollection';
import Payment from './Payment';
import Profile from './profile';
import {
  MyPageContainer,
  MyPageWrapper,
  ProfileContainer,
} from './index.style';

import { artBuyerData } from '@/pages/artBuyerPage/constants/artBuyer';

const { paymentCounts } = artBuyerData.result;

export const MenuMyPage = () => {
  return (
    <MyPageWrapper>
      <ProfileContainer>
        <Profile
          myName={'홍길동'}
          profileImage={''}
          pendingPayments={paymentCounts.pending}
          completedPayments={paymentCounts.completed}
          receivedPayments={paymentCounts.received}
        />
      </ProfileContainer>
      <MyPageContainer>
        <Payment />
        <MyCollection />
        <Auction />
      </MyPageContainer>
    </MyPageWrapper>
  );
};

export default MenuMyPage;
