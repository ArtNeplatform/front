import {
  Name,
  ProfileContainer,
  ProfileImage,
  ProfileInfo,
  Stats,
} from './index.style';
import DefaultImage from '@assets/svg/Icon_Profile.svg';

interface AuthorProfileProps {
  authorName: string;
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
  authorName,
  artworkCount,
  exhibitionCount,
  profileImage,
}: AuthorProfileProps) => {
  return (
    <ProfileContainer>
      <ProfileImage
        src={profileImage || DefaultImage}
        alt={`${authorName}의 프로필 이미지`}
      />
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
