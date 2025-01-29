import {
  Name,
  ProfileContainer,
  ProfileImage,
  ProfileInfo,
  Stats,
} from "./index.style";

interface AuthorProfileProps {
  AuthorName: string;
  artworkCount: number;
  exhibitionCount: number;
  profileImage: string;
}

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
