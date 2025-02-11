import { Text } from '@/styles/text';
import {
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
        <Text size={18} color="black" weight="semibold">
          {AuthorName}
        </Text>
        <Stats>
          작품 {artworkCount} | 전시 {exhibitionCount}
        </Stats>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default AuthorProfile;
