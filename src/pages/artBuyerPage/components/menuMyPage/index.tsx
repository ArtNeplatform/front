import Auction from './Auction';
import MyCollection from './MyCollection';
import Payment from './Payment';
import Profile from './profile';
import {
  MyPageContainer,
  MyPageWrapper,
  ProfileContainer,
} from './index.style';

import { ArtBuyerDataProps } from '@/types/artBuyer';

import { artBuyerData as rawArtBuyerData } from '@/pages/artBuyerPage/constants/artBuyer';

// 명시적으로 ArtBuyerDataProps 타입 지정
const artBuyerData: ArtBuyerDataProps = rawArtBuyerData;

const { paymentCounts } = artBuyerData.result ?? {};

export const MenuMyPage = () => {
  return (
    <MyPageWrapper>
      <ProfileContainer>
        <Profile
          myName={'홍길동'}
          profileImage={''}
          pendingPayments={paymentCounts?.pending ?? 0}
          completedPayments={paymentCounts?.completed ?? 0}
          receivedPayments={paymentCounts?.received ?? 0}
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
