import {
  Name,
  ProfileContainer,
  ProfileImage,
  ProfileInfo,
  EditButton,
  PaymentStatus,
  PaymentItem,
  PaymentLabel,
  PaymentCount,
} from './index.style';
import RightArrow from '@assets/svg/right-arrow.svg?react';
import NoneProfile from '@assets/svg/Icon_Profile.svg';

interface ProfileProps {
  myName: string;
  profileImage?: string;
  pendingPayments: number;
  completedPayments: number;
  receivedPayments: number;
  onEditProfile: () => void;
}

/**
 * 마이페이지 프로필 컴포넌트입니다.
 * 프로필 사진, 본인 이름, 기본정보 수정 버튼, 결제 대기/완료/수령 상태를 표시합니다.
 * @param {string} myName - 사용자 이름
 * @param {string} profileImage - 프로필 이미지 url (없으면 기본 이미지)
 * @param {number} pendingPayments - 작품 결제 대기중
 * @param {number} completedPayments - 작품 결제 완료
 * @param {number} receivedPayments - 작품 수령 완료
 * @param {() => void} onEditProfile - 작품 구매자 계정 정보 수정
 * @author 노찬영
 **/

export const Profile = ({
  myName,
  profileImage,
  pendingPayments,
  completedPayments,
  receivedPayments,
  onEditProfile,
}: ProfileProps) => {
  return (
    <ProfileContainer>
      <ProfileImage
        src={profileImage || NoneProfile}
        alt={`${myName}의 프로필 이미지`}
      />
      <ProfileInfo>
        <Name>{myName}</Name>
        <EditButton onClick={onEditProfile}>
          기본정보 수정 <RightArrow />
        </EditButton>
      </ProfileInfo>
      <PaymentStatus>
        <PaymentItem>
          <PaymentLabel>결제 대기중</PaymentLabel>
          <PaymentCount>{pendingPayments}</PaymentCount>
        </PaymentItem>
        <PaymentItem>
          <PaymentLabel>결제 완료</PaymentLabel>
          <PaymentCount>{completedPayments}</PaymentCount>
        </PaymentItem>
        <PaymentItem>
          <PaymentLabel>수령 완료</PaymentLabel>
          <PaymentCount>{receivedPayments}</PaymentCount>
        </PaymentItem>
      </PaymentStatus>
    </ProfileContainer>
  );
};

export default Profile;
