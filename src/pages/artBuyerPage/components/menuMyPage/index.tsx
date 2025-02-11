import Auction from './Auction';
import MyCollection from './MyCollection';
import Payment from './Payment';
import Profile from './profile';
import {
  MyPageContainer,
  MyPageWrapper,
  ProfileContainer,
} from './index.style';

// TODO[찬영] - 작품 구매자 조회 API 연결
import { ArtBuyerDataProps } from '@/types/artBuyer';

import { artBuyerData as rawArtBuyerData } from '@/constants/mocks';

// 명시적으로 ArtBuyerDataProps 타입 지정
const artBuyerData: ArtBuyerDataProps = rawArtBuyerData;

const { paymentCounts } = artBuyerData.result ?? {};

export const MenuMyPage = ({
  setSelectedMenu,
}: {
  setSelectedMenu: (menu: '마이페이지' | '계정설정' | '구매 작품') => void;
}) => {
  return (
    <MyPageWrapper>
      <ProfileContainer>
        <Profile
          myName={'홍길동'}
          profileImage={''}
          pendingPayments={paymentCounts?.pending ?? 0}
          completedPayments={paymentCounts?.completed ?? 0}
          receivedPayments={paymentCounts?.received ?? 0}
          onEditProfile={() => setSelectedMenu('계정설정')}
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
