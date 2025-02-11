import { useState } from 'react';
import {
  ButtonContainer,
  FormContainer,
  InputContainer,
  InputField,
  SectionTitle,
  StyledButton,
} from './index.style';
import { useSaveAuthorBankInfo } from '@/pages/authorPage/hooks/useSaveAuthorBankInfo';

export const Account = () => {
  const [bankName, setBankName] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const { saveBankInfo, isPending } = useSaveAuthorBankInfo();

  const handleSave = () => {
    if (!bankName || !accountHolder || !accountNumber) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    saveBankInfo({
      bank_name: bankName,
      account_holder: accountHolder,
      account_number: accountNumber,
    });
  };

  return (
    <FormContainer>
      <SectionTitle>계좌 관리</SectionTitle>
      <InputContainer>
        <InputField>
          <label>은행명</label>
          <input
            type="text"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />
        </InputField>
        <InputField>
          <label>이름</label>
          <input
            type="text"
            value={accountHolder}
            onChange={(e) => setAccountHolder(e.target.value)}
          />
        </InputField>
        <InputField>
          <label>계좌번호</label>
          <input
            type="text"
            placeholder=" ‘-’를 제외하고 입력해주세요. "
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </InputField>
      </InputContainer>
      <ButtonContainer>
        <StyledButton variant="white">취소</StyledButton>
        <StyledButton variant="black" onClick={handleSave} disabled={isPending}>
          {isPending ? '저장 중...' : '저장하기'}
        </StyledButton>
      </ButtonContainer>
    </FormContainer>
  );
};
