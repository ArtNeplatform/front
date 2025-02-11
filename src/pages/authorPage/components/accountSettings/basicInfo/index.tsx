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

import IconCamera from '@assets/svg/Icon_Camera.svg';
import EditButton from '@assets/svg/Icon_Edit.svg?react';
import {
  PhotoFieldContainer,
  PhotoUploadBox,
  Placeholder,
} from '../../managingProfiles/introduce/index.style';

export const BasicInfo = () => {
  const [authorPhoto, setAuthorPhoto] = useState<string | null>(null);
  const [introPhoto, setIntroPhoto] = useState<string | null>(null);

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <FormContainer>
      <h1>계정 설정</h1>

      <AccountInfo>
        <SectionTitle>계정 정보</SectionTitle>
        <ProfileImageContainer>
          <ProfileImage />
          <EditButton />
        </ProfileImageContainer>
        <UserDetails>
          <div>
            <span>닉네임</span>
            <span>홍길동</span>
          </div>
          <div>
            <span>이메일</span>
            <span>artné@gmail.com</span>
          </div>
          <div>
            <span>타입</span>
            <span>작가</span>
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
          <label>활동명</label>
          <input type="text" value="홍길동" />
        </InputField>

        {/* 작가 사진 */}
        <PhotoFieldContainer>
          <label>작가 사진</label>
          <PhotoUploadBox>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, setAuthorPhoto)}
            />
            {authorPhoto ? (
              <img
                src={authorPhoto}
                className="preview"
                alt="작가 사진 미리보기"
              />
            ) : (
              <img src={IconCamera} className="icon" alt="카메라 아이콘" />
            )}
          </PhotoUploadBox>
          <Placeholder>
            <span>작가 사진 최적 사이즈는 000*000입니다</span>
          </Placeholder>
        </PhotoFieldContainer>

        {/* 소개 사진 */}
        <PhotoFieldContainer>
          <label>소개 사진</label>
          <PhotoUploadBox>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, setIntroPhoto)}
            />
            {introPhoto ? (
              <img src={introPhoto} alt="소개 사진 미리보기" />
            ) : (
              <img src={IconCamera} alt="카메라 아이콘" />
            )}
          </PhotoUploadBox>
          <Placeholder>
            <span>소개 사진 최적 사이즈는 000*000입니다</span>
          </Placeholder>
        </PhotoFieldContainer>

        <InputField>
          <label>생년월일</label>
          <input type="text" placeholder="ex) 1999.01.01" />
        </InputField>
        <InputField>
          <label>주소</label>
          <div className="address-container">
            <div className="primary-address">
              <input type="text" placeholder="" />
              {/* TODO[찬영] - 주소찾기 버튼 클릭시 검색 페이지로 이동 */}
              <AddressButton>주소찾기</AddressButton>
            </div>
            <input type="text" placeholder="상세 주소 입력" />
          </div>
        </InputField>
      </InputContainer>

      <ButtonContainer>
        <StyledButton variant="white">취소</StyledButton>
        <StyledButton variant="black">저장하기</StyledButton>
      </ButtonContainer>
    </FormContainer>
  );
};
