import styled from '@emotion/styled';
import theme from '@styles/theme.ts';

interface ButtonProps {
  $isCancle: boolean;
}

interface InputBoxProps {
  $isName: boolean;
}

export const ModalWrap = styled.div`
  width: 420px;
  z-index: 2;
  background-color: ${theme.colors.white};
  box-shadow: 16px 16px 30px 0 rgba(0, 0, 0, 0.06);
`;

export const ModalSpace = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.6);
  top: 0;
  left: 0;
  z-index: 1;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 20px;
`;

export const EmptySpace = styled.div`
  width: 24px;
  height: 24px;
`;

export const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const CenterContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 12px 32px 32px;
  gap: 24px;
`;

export const InformContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InputTitle = styled.div`
  ${(theme) => theme.theme.typography['14']};
  color: ${theme.colors.font03gray};
  font-weight: 500;
  width: 62px;
`;

export const InputBox = styled.input<InputBoxProps>`
  width: ${({ $isName }) => ($isName ? `250px` : `220px`)};
  padding: 14px 16px;
  border: 1px solid ${theme.colors.lightGray};
  outline: none;
  background-color: ${theme.colors.white};
`;

export const BottomContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 16px 32px 24px;
`;

export const CloseBtn = styled.div<ButtonProps>`
  padding: 9px 38.5px;
  background-color: ${({ $isCancle }) =>
    $isCancle ? `${theme.colors.white}` : `${theme.colors.black}`};
  border: ${({ $isCancle }) =>
    $isCancle
      ? `1px solid ${theme.colors.lightGray}`
      : `1px solid ${theme.colors.black}`};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* 이미지 업로드 스타일 */
export const UploadContainer = styled.div`
  width: 356px;
  height: 215px;
  position: relative;
`;

export const UploadLabel = styled.label`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  color: white;
  font-size: 14px;
`;

export const UploadLabelImg = styled.img`
  width: 356px;
  height: 215px;
`;

export const FileInput = styled.input`
  display: none;
`;

export const FilePreview = styled.img`
  width: 356px;
  height: 215px;
  position: relative;
  object-fit: cover;
  z-index: 10;
`;
