import {
  ProfileContainer,
  ProfileImage,
  ProfileInfo,
  Name,
  EditButton,
} from './index.style';
import RightArrow from '@assets/svg/right-arrow.svg?react';
import NoneProfile from '@assets/svg/Icon_Profile.svg';

import { useGetAuthorMypage } from '@/pages/mypage-author-page/hooks/useGetAuthorMypage';

interface AuthorProfileProps {
  onEditProfile: () => void;
}

/**
 * 작가 프로필 컴포넌트입니다.
 * 프로필 사진, 작가 이름, 작가 소속, 기본정보 수정 버튼을 표시합니다.
 * @param {() => void} onEditProfile - 작가 계정 정보 수정
 * @author 노찬영
 **/

export const AuthorProfile = ({ onEditProfile }: AuthorProfileProps) => {
  const { userMypageData } = useGetAuthorMypage();

  const author = userMypageData.author;

  return (
    <ProfileContainer>
      <ProfileImage
        src={author.profile_image_url || NoneProfile}
        alt={`작가의 프로필 이미지`}
      />
      <ProfileInfo>
        <Name>{author.name}</Name>
        <EditButton onClick={onEditProfile}>
          기본정보 수정 <RightArrow />
        </EditButton>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default AuthorProfile;
