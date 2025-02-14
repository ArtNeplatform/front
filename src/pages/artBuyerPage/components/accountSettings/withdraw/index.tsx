import {
  ButtonContainer,
  FormContainer,
  SectionTitle,
  StyledButton,
} from './index.style';

export const Withdraw = () => {
  return (
    <FormContainer>
      <SectionTitle>회원 탈퇴</SectionTitle>

      <ButtonContainer>
        <StyledButton variant="white">취소</StyledButton>
        <StyledButton variant="black">탈퇴하기</StyledButton>
      </ButtonContainer>
    </FormContainer>
  );
};
