import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 600px;
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

export const ToggleButton = styled.button<{ isActive: boolean }>`
  padding: 10px 20px;
  flex: 1;
  background-color: ${({ isActive }) =>
    isActive ? theme.colors.black : theme.colors.white};
  color: ${({ isActive }) =>
    isActive ? theme.colors.white : theme.colors.black};
  border: 1px solid
    ${({ isActive }) =>
      isActive ? theme.colors.black : theme.colors.lightGray};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? theme.colors.black : theme.colors.lightGray};
  }
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 4px;
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
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    opacity: 0.9;
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
