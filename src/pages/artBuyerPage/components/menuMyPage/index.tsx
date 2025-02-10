import Auction from './Auction';
import MyCollection from './MyCollection';
import Payment from './Payment';
import Profile from './profile';
import {
  MyPageContainer,
  MyPageWrapper,
  ProfileContainer,
} from './index.style';

export const MenuMyPage = () => {
  return (
    <MyPageWrapper>
      <ProfileContainer>
        <Profile
          myName={'홍길동'}
          profileImage={''}
          pendingPayments={3}
          completedPayments={3}
          receivedPayments={3}
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
