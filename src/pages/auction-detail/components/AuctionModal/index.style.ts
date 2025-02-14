import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background: ${theme.colors.white};
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 20px;
`;

export const ModalHeader = styled.div`
  margin-bottom: 15px;
  text-align: center;
`;

export const ModalContent = styled.div`
  margin-bottom: 15px;
`;

export const ModalImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const Input = styled.input`
  width: 80%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid ${theme.colors.lightGray};
  text-align: right;
`;
export const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  opacity: 1;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: flex-start;
  ${(theme) => theme.theme.typography['14']}
`;
