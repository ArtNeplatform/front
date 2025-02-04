import {
  Name,
  ProfileContainer,
  ProfileImage,
  ProfileInfo,
  Stats,
} from './index.style';

interface AuthorProfileProps {
  AuthorName: string;
  artworkCount: number;
  exhibitionCount: number;
  profileImage: string;
}

/**
 * 작가 프로필 컴포넌트입니다.
 * 프로필 사진, 작가의 이름, 작품 수와 전시 수를 받습니다.
 * @author 노찬영
 */

export const AuthorProfile = ({
  AuthorName,
  artworkCount,
  exhibitionCount,
  profileImage,
}: AuthorProfileProps) => {
  return (
    <ProfileContainer>
      <ProfileImage src={profileImage} alt={`${AuthorName}의 프로필 이미지`} />
      <ProfileInfo>
        <Name>{AuthorName}</Name>
        <Stats>
          작품 {artworkCount} | 전시 {exhibitionCount}
        </Stats>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default AuthorProfile;
