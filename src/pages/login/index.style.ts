import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding: 48px 24px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;

  > span:first-of-type {
    display: block;
    margin-bottom: 12px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  font-size: 15px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    opacity: 0.9;
  }
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-bottom: 32px;
`;

export const SocialLoginButton = styled.button<{
  socialType: 'google' | 'kakao';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ socialType }) =>
    socialType === 'kakao' ? '#FEE500' : theme.colors.white};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ socialType }) =>
      socialType === 'kakao' ? '#FDD835' : '#f8f8f8'};
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Divider = styled.div`
  position: relative;
  text-align: center;
  margin: 24px 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: calc(50% - 24px);
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;
