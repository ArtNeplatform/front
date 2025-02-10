import {
  ButtonContainer,
  FormContainer,
  InputContainer,
  InputField,
  SectionTitle,
  StyledButton,
} from './index.style';

export const Account = () => {
  return (
    <FormContainer>
      <SectionTitle>계좌 관리</SectionTitle>
      <InputContainer>
        <InputField>
          <label>은행명</label>
          <input type="text" value="" />
        </InputField>
        <InputField>
          <label>이름</label>
          <input type="text" value="" />
        </InputField>
        <InputField>
          <label>계좌번호</label>
          <input type="text" placeholder=" ‘-’를 제외하고 입력해주세요. " />
        </InputField>
      </InputContainer>
      <ButtonContainer>
        <StyledButton variant="white">취소</StyledButton>
        <StyledButton variant="black">저장하기</StyledButton>
      </ButtonContainer>
    </FormContainer>
  );
};
