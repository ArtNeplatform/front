import Auction from './Auction';
import ArtworkCollection from './artworkCollection';
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
          affiliation={'국립현대 미술관 소속'}
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
