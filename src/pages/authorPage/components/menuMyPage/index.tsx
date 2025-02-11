import Auction from './Auction';
import ArtworkCollection from './artworkCollection';
import Profile from './profile';
import {
  MyPageContainer,
  MyPageWrapper,
  ProfileContainer,
} from './index.style';

export const MenuMyPage = ({
  setSelectedMenu,
}: {
  setSelectedMenu: (
    menu: '마이페이지' | '프로필 관리' | '계정설정' | '작품/전시 관리'
  ) => void;
}) => {
  return (
    <MyPageWrapper>
      <ProfileContainer>
        <Profile
          myName={'홍길동'}
          profileImage={''}
          affiliation={'국립현대 미술관 소속'}
          onEditProfile={() => setSelectedMenu('계정설정')}
        />
      </ProfileContainer>
      <MyPageContainer>
        <ArtworkCollection />
        <Auction />
      </MyPageContainer>
    </MyPageWrapper>
  );
};

export default MenuMyPage;
