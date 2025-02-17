import AuthorAuction from './Auction';
import ArtworkCollection from './artworkCollection';
import AuthorProfile from './profile';
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
        <AuthorProfile onEditProfile={() => setSelectedMenu('계정설정')} />
      </ProfileContainer>
      <MyPageContainer>
        <ArtworkCollection />
        <AuthorAuction />
      </MyPageContainer>
    </MyPageWrapper>
  );
};

export default MenuMyPage;
