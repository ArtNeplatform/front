import React, { useRef } from 'react';
import {
  ImageUploaderContainer,
  PictureRegisterWrapper,
  ImageList,
  DeleteButton,
} from './index.style';
import PictureRegister from '@assets/svg/picture-register.svg?react';
import { Text } from '@/styles/text';

interface ImageUploaderProps {
  images: File[];
  setImages: (images: File[]) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ images, setImages }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDeleteImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index)); // 선택한 인덱스의 이미지 삭제
  };
  return (
    <ImageUploaderContainer>
      <Text size={16} color="secondary">
        당신의 작품을 등록해보세요!
      </Text>
      {/* 이미지 업로드 버튼에 연결한 input*/}
      <input
        type="file"
        accept=".png, .jpeg, .jpg"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setImages([...images, file]);
          }
        }}
      />
      {/* 등록한 이미지 리스트 */}
      <ImageList>
        {images.map((image, index) => (
          <div
            key={URL.createObjectURL(image) + `?${Date.now()}`}
            style={{ position: 'relative' }}
          >
            <img
              src={URL.createObjectURL(image)}
              alt={`작품 이미지 ${index + 1}`}
              style={{ width: '100px', height: 'auto', margin: '5px' }}
            />
            <DeleteButton onClick={() => handleDeleteImage(index)}>
              X
            </DeleteButton>
          </div>
        ))}
        <PictureRegisterWrapper onClick={() => fileInputRef.current?.click()}>
          <PictureRegister />
        </PictureRegisterWrapper>
      </ImageList>
    </ImageUploaderContainer>
  );
};

export default ImageUploader;
