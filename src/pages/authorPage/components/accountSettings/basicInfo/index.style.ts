import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const FormContainer = styled.div`
  width: 1080px;
  margin: 0 auto;
  background-color: ${theme.colors.white};

  h1 {
    margin: 0;
    ${theme.typography['24']}
    font-weight: 600;
    color: ${theme.colors.black};
    padding-bottom: 20px;
    border-bottom: 2px solid ${theme.colors.black};
  }
`;

export const SectionTitle = styled.span`
  ${theme.typography['20']}
  font-weight: 600;
  color: ${theme.colors.black};
`;

export const AccountInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 38px;
  padding: 64px 0 48px 140px;
  border-bottom: 1px solid ${theme.colors.lineLightColor};
`;

export const ProfileImageContainer = styled.div`
  position: relative;

  width: 100px;
  height: 100px;

  svg {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${theme.colors.lightGray};
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: calc(50px - 38px);

  div {
    display: flex;
    width: 257px;
    height: 20px;
    gap: 17px;
    align-items: center;
  }

  span {
    width: 120px;
    ${theme.typography['14']}
    font-weight: 400;
    color: ${theme.colors.black};
  }
`;

export const InputContainer = styled.section`
  display: flex;
  width: 800px;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 64px 0 50px 140px;
  border-bottom: 1px solid ${theme.colors.lineLightColor};

  label {
    width: 120px;
    ${theme.typography['14']}
    font-weight: 400;
  }
`;

export const BasicField = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;

  .name {
    width: 120px;
    margin-bottom: 12px;

    ${theme.typography['14']}
    font-weight: 400;
  }

  span {
    width: 120px;
    ${theme.typography['14']}
    font-weight: 400;
  }
`;

export const PhotoField = styled.div`
  display: inline-flex;
  width: 497px;
  height: 120px;
  align-items: flex-start;
  gap: 17px;

  label {
    width: 120px;
    ${theme.typography['14']}
    font-weight: 400;
  }
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;

  input {
    width: 629px;
    padding: 14px 16px;
    border: 1px solid ${theme.colors.lightGray};
    ${theme.typography['16']}
    font-weight: 400;
  }

  .address-container {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .primary-address {
      display: flex;
      align-items: center;
      gap: 10px;

      input {
        width: 512px;
        padding: 14px 16px;
        border: 1px solid ${theme.colors.lightGray};
        ${theme.typography['16']}
        font-weight: 400;
      }
    }

    input:last-child {
      width: 631px;
      padding: 14px 16px;
      border: 1px solid ${theme.colors.lightGray};
      ${theme.typography['16']}
      font-weight: 400;
    }
  }
`;

export const AddressButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 107px;
  padding: 14px 16px;
  ${theme.typography['16']}
  font-weight: 600;
  cursor: pointer;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.black};
`;

export const StyledButton = styled.button<{ variant: 'black' | 'white' }>`
  width: 106px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: ${({ variant }) =>
    variant === 'white' ? `1px solid ${theme.colors.lightGray}` : 'none'};
  background-color: ${({ variant }) =>
    variant === 'black' ? theme.colors.black : theme.colors.white};
  color: ${({ variant }) =>
    variant === 'black' ? theme.colors.white : theme.colors.black};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 48px;
`;
