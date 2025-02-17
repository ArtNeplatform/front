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

import { useGetBuyerMypage } from '@/pages/mypage-buyer-page/hooks/useGetBuyerMypage';

interface ArtBuyerProfileProps {
  onEditProfile: () => void;
}

/**
 * 작품 구매자 프로필 컴포넌트입니다.
 * 프로필 사진, 본인 이름, 기본정보 수정 버튼, 결제 대기/완료/수령 상태를 표시합니다.
 * @param {() => void} onEditProfile - 작품 구매자 계정 정보 수정
 * @author 노찬영
 **/

export const ArtBuyerProfile = ({ onEditProfile }: ArtBuyerProfileProps) => {
  const { userMypageData } = useGetBuyerMypage();

  const { buyer, paymentCounts } = userMypageData;
  const paymentData = paymentCounts?.[0] ?? {
    pending: 0,
    completed: 0,
    received: 0,
  };

  return (
    <ProfileContainer>
      <ProfileImage
        src={buyer.profile_image_url || NoneProfile}
        alt={`${buyer.name}의 프로필 이미지`}
      />
      <ProfileInfo>
        <Name>{buyer.name}</Name>
        <EditButton onClick={onEditProfile}>
          기본정보 수정 <RightArrow />
        </EditButton>
      </ProfileInfo>
      <PaymentStatus>
        <PaymentItem>
          <PaymentLabel>결제 대기중</PaymentLabel>
          <PaymentCount>{paymentData.pending}</PaymentCount>
        </PaymentItem>
        <PaymentItem>
          <PaymentLabel>결제 완료</PaymentLabel>
          <PaymentCount>{paymentData.completed}</PaymentCount>
        </PaymentItem>
        <PaymentItem>
          <PaymentLabel>수령 완료</PaymentLabel>
          <PaymentCount>{paymentData.received}</PaymentCount>
        </PaymentItem>
      </PaymentStatus>
    </ProfileContainer>
  );
};

export default ArtBuyerProfile;
