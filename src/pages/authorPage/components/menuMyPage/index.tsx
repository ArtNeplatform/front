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
  // TODO[찬영] - 실제 로그인된 사용자 ID로 변경
  const userId = 1;

  return (
    <MyPageWrapper>
      <ProfileContainer>
        <AuthorProfile
          onEditProfile={() => setSelectedMenu('계정설정')}
          userId={userId}
        />
      </ProfileContainer>
      <MyPageContainer>
        <ArtworkCollection userId={userId} />
        <AuthorAuction userId={userId} />
      </MyPageContainer>
    </MyPageWrapper>
  );
};

export default MenuMyPage;
