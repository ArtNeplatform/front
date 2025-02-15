import { useState } from 'react';
import {
  ModalBackground,
  ModalSpace,
  ModalWrap,
  ModalContent,
  TopContainer,
  EmptySpace,
  CloseIcon,
  CenterContainer,
  InformContainer,
  InputContainer,
  InputTitle,
  InputBox,
  BottomContainer,
  CloseBtn,
  UploadContainer,
  UploadLabel,
  UploadLabelImg,
  FileInput,
  FilePreview,
} from './index.style.ts';
import { Text } from '@/styles/text';
import Close from '@/assets/svg/icon-close.svg';
import Upload from '@/assets/svg/space-register.svg';

interface MySpaceProps {
  onClose: () => void;
}

export const MySpaceModal = ({ onClose }: MySpaceProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleProfileImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const imageFile = event.target.files?.[0];

    if (!imageFile) return;

    // 🔹 미리보기 이미지 URL 생성
    const previewUrl = URL.createObjectURL(imageFile);
    setImagePreview(previewUrl);
  };

  return (
    <>
      <ModalBackground onClick={onClose} />
      <ModalSpace>
        <ModalWrap>
          <ModalContent>
            <TopContainer>
              <EmptySpace />
              <Text size={20} color="black" weight="regular">
                내 공간 등록
              </Text>
              <CloseIcon src={Close} onClick={onClose} alt="닫기" />
            </TopContainer>
            <CenterContainer>
              <InformContainer>
                <InputContainer>
                  <InputTitle>공간명</InputTitle>
                  <InputBox
                    placeholder="공간명을 입력해주세요"
                    $isName={true}
                  />
                </InputContainer>
                <InputContainer>
                  <InputTitle>공간넓이</InputTitle>
                  <InputBox $isName={false} />
                  <Text size={14} color="font03gray" weight="medium">
                    m
                  </Text>
                </InputContainer>
              </InformContainer>

              {/* 이미지 업로드 */}
              <UploadContainer>
                <UploadLabel htmlFor="file">
                  <UploadLabelImg src={Upload} alt="이미지 업로드" />
                </UploadLabel>
                <FileInput
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                />
                {imagePreview && (
                  <FilePreview src={imagePreview} alt="Preview" />
                )}
              </UploadContainer>
            </CenterContainer>
            <BottomContainer>
              <CloseBtn onClick={onClose} $isCancle={true}>
                <Text size={13} color="black" weight="regular">
                  취소
                </Text>
              </CloseBtn>
              <CloseBtn onClick={onClose} $isCancle={false}>
                <Text size={13} color="white" weight="regular">
                  확인
                </Text>
              </CloseBtn>
            </BottomContainer>
          </ModalContent>
        </ModalWrap>
      </ModalSpace>
    </>
  );
};
