import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
  Image,
  Input,
  InputContainer,
  Title,
  ModalImageContainer,
} from './index.style.ts';
import { CommonButton } from '@/components/common/CommonButton';
import { Text } from '@/styles/text.tsx';

import theme from '@/styles/theme.ts';

interface AuctionModalProps {
  isOpen: boolean;
  imageSrc: string | undefined;
  title: string | undefined;
  onClose: () => void;
  onConfirm: (startPrice: number) => void;
}

const AuctionModal = ({
  isOpen,
  imageSrc,
  title,
  onClose,
  onConfirm,
}: AuctionModalProps) => {
  const [startPrice, setStartPrice] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (startPrice === null) {
      alert('시작 금액을 입력해주세요.');
      return;
    }
    onConfirm(startPrice);
  };
  const formatPrice = (price: number | null) => {
    return price !== null
      ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      : '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, ''); // 쉼표 제거
    // 숫자만 허용하고, 빈 문자열일 경우 null로 설정
    const numericValue = value.match(/^\d*$/) ? Number(value) : null;
    setStartPrice(numericValue);
  };
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <Text size={20} weight="regular">
            경매 등록
          </Text>
        </ModalHeader>
        <ModalContent>
          <ModalImageContainer>
            <Image src={imageSrc} alt="모달 이미지" />
            <Title>{title}</Title>
          </ModalImageContainer>

          <InputContainer>
            <Text size={14} weight="medium">
              시작 금액
            </Text>
            <Input
              type="text"
              placeholder="시작 금액 입력"
              value={startPrice !== null ? formatPrice(startPrice) : ''}
              onChange={handleInputChange}
            />
            <Text size={14} weight="medium">
              원
            </Text>
          </InputContainer>
        </ModalContent>
        <ModalFooter>
          <CommonButton
            onClick={onClose}
            text="취소"
            color="black"
            background="white"
            borderColor={theme.colors.lightGray}
            borderRadius="0px"
          />
          <CommonButton
            onClick={handleConfirm}
            text="확인"
            color="white"
            background="black"
            borderColor="black"
            borderRadius="0px"
          />
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default AuctionModal;
