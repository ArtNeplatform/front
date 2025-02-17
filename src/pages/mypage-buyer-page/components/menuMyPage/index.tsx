import ArtBuyerAuction from './Auction';
import MyCollection from './MyCollection';
import Payment from './Payment';
import ArtBuyerProfile from './profile';
import {
  MyPageContainer,
  MyPageWrapper,
  ProfileContainer,
} from './index.style';

interface MenuMyPageProps {
  setSelectedMenu: (menu: '마이페이지' | '계정설정' | '구매 작품') => void;
}

export const MenuMyPage = ({ setSelectedMenu }: MenuMyPageProps) => {
  return (
    <MyPageWrapper>
      <ProfileContainer>
        <ArtBuyerProfile onEditProfile={() => setSelectedMenu('계정설정')} />
      </ProfileContainer>
      <MyPageContainer>
        <Payment />
        <ArtBuyerAuction />
        <MyCollection />
      </MyPageContainer>
    </MyPageWrapper>
  );
};
