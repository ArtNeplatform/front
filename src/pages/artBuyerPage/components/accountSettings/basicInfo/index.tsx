import { useState } from 'react';
import {
  AccountInfo,
  AddressButton,
  BasicField,
  ButtonContainer,
  FormContainer,
  InputContainer,
  InputField,
  ProfileImage,
  ProfileImageContainer,
  SectionTitle,
  StyledButton,
  UserDetails,
} from './index.style';

import EditButton from '@assets/svg/Icon_Edit.svg?react';
import { useUpdateUserInfo } from '@/pages/artBuyerPage/hooks/useUpdateUserInfo';

export const BasicInfo = () => {
  // TODO[찬영] - 작품 구매자 정보 조회 API 연결
  const [nickname, setNickname] = useState('홍길동');
  const [birth, setBirth] = useState('');
  const [address, setAddress] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const { updateUser, isPending } = useUpdateUserInfo();

  const handleSave = () => {
    updateUser(
      { nickname, birth, address },
      {
        onSuccess: () => {
          setIsSaved(true); // 저장 성공 상태 업데이트
        },
      }
    );
  };

  return (
    <FormContainer>
      <h1>계정 설정</h1>

      <AccountInfo>
        <SectionTitle>계정 정보</SectionTitle>
        <ProfileImageContainer>
          <ProfileImage />
          <EditButton style={{ stroke: '#E1E1E1', strokeWidth: '0.833333' }} />
        </ProfileImageContainer>
        <UserDetails>
          <div>
            <span>닉네임</span>
            <span>{nickname}</span>
          </div>
          <div>
            <span>이메일</span>
            <span>artné@gmail.com</span>
          </div>
          <div>
            <span>타입</span>
            <span>작품 구매자</span>
          </div>
        </UserDetails>
      </AccountInfo>

      <InputContainer>
        <SectionTitle>기본 정보</SectionTitle>
        <BasicField>
          <div className="name">이름</div>
          <div className="name">홍길동</div>
        </BasicField>
        <BasicField>
          <span>휴대전화</span>
          <span>010-1234-1234</span>
        </BasicField>
        <InputField>
          <label>닉네임</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </InputField>
        <InputField>
          <label>생년월일</label>
          <input
            type="text"
            placeholder="ex) 1999.01.01"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </InputField>
        <InputField>
          <label>주소</label>
          <div className="address-container">
            <div className="primary-address">
              <input
                type="text"
                placeholder=""
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <AddressButton>주소찾기</AddressButton>
            </div>
            <input type="text" placeholder="상세 주소 입력" />
          </div>
        </InputField>
      </InputContainer>

      <ButtonContainer>
        <StyledButton variant="white">취소</StyledButton>
        <StyledButton variant="black" onClick={handleSave} disabled={isPending}>
          {isPending ? '저장 중...' : '저장하기'}
        </StyledButton>
        {isSaved && (
          <span style={{ marginLeft: '10px', color: 'green' }}>저장 완료!</span>
        )}
      </ButtonContainer>
    </FormContainer>
  );
};
