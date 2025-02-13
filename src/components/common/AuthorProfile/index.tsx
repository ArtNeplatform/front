import {
  Name,
  ProfileContainer,
  ProfileImage,
  ProfileInfo,
  Stats,
} from './index.style';

interface AuthorProfileProps {
  authorName: string;
  artworkCount: number;
  exhibitionCount: number;
  profileImage: string;
}

export const AuthorProfile = ({
  authorName,
  artworkCount,
  exhibitionCount,
  profileImage,
}: AuthorProfileProps) => {
  return (
    <ProfileContainer>
      <ProfileImage src={profileImage} alt={`${authorName}의 프로필 이미지`} />
      <ProfileInfo>
        <Name>{authorName}</Name>
        <Stats>
          작품 {artworkCount} | 전시 {exhibitionCount}
        </Stats>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default AuthorProfile;
