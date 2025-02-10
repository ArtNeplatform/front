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

export const BasicInfo = () => {
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
            <span>홍길동</span>
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
          <input type="text" value="홍길동" />
        </InputField>
        <InputField>
          <label>생년월일</label>
          <input type="text" placeholder="ex) 1999.01.01" />
        </InputField>
        <InputField>
          <label>주소</label>
          <div className="address-container">
            <div className="primary-address">
              <input type="text" placeholder="" />
              {/* TODO: 주소찾기 버튼 클릭시 검색 페이지로 이동 */}
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
