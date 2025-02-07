import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
`;

export const ImageRegisterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: center;
  margin-bottom: 40px;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 12px;
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 4px;
  width: 100%;
`;
export const ArtworkSizeDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
`;

export const TextArea = styled.textarea`
  padding: 12px;
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 4px;
  width: 100%;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: flex-end;
`;
export const Button = styled.button`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
