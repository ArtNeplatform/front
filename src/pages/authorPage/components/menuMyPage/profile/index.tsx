import {
  ProfileContainer,
  ProfileImage,
  ProfileInfo,
  Name,
  Affiliation,
  EditButton,
} from './index.style';
import RightArrow from '@assets/svg/right-arrow.svg?react';
import NoneProfile from '@assets/svg/Icon_Profile.svg';
import { useGetUserMypage } from '@/pages/artBuyerPage/hooks/useGetUserMypage';

interface ProfileProps {
  userId: number;
  onEditProfile: () => void;
}

/**
 * 마이페이지 프로필 컴포넌트입니다.
 * 프로필 사진, 작가 이름, 작가 소속, 기본정보 수정 버튼을 표시합니다.
 * @param {number} userId - 사용자 ID
 * @param {() => void} onEditProfile - 작가 계정 정보 수정
 * @author 노찬영
 **/

export const Profile = ({ userId, onEditProfile }: ProfileProps) => {
  const { userMypageData } = useGetUserMypage(userId);
  const { result } = userMypageData;

  // `result`가 `TArtistMypage` 타입인지 확인
  const isArtist = 'author' in result;
  const name = isArtist ? result.author.name : '작가 이름';
  const affiliation = isArtist ? result.author.affiliation : '소속 정보 없음';

  return (
    <ProfileContainer>
      {/* TODO[찬영] - 프로필 사진 데이터 연결 */}
      <ProfileImage src={NoneProfile} alt={`작가의 프로필 이미지`} />
      <ProfileInfo>
        <Name>{name}</Name>
        <Affiliation>{affiliation}</Affiliation>
        <EditButton onClick={onEditProfile}>
          기본정보 수정 <RightArrow />
        </EditButton>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default Profile;
