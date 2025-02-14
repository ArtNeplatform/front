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
  onConfirm: (bidPrice: string) => void;
}

const AuctionModal = ({
  isOpen,
  imageSrc,
  title,
  onClose,
  onConfirm,
}: AuctionModalProps) => {
  const [bidPrice, setBidPrice] = useState<string>('');

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (!bidPrice || isNaN(Number(bidPrice))) {
      // bidPrice가 빈 문자열일 경우만 알림
      alert('handleConfirm 입찰 금액을 입력해주세요.');
      return;
    }
    console.log('handleConfirm' + bidPrice); // 상태 값 확인
    onConfirm(bidPrice);
    setBidPrice('');
  };
  console.log('밖' + bidPrice);

  const handleCancel = () => {
    setBidPrice(''); // 취소 시 input 초기화
    onClose(); // 모달 닫기
  };

  // useEffect(() => {
  //   setBidPrice((currentValue) => currentValue);
  // }, [bidPrice]);

  const formatPrice = (price: string | null) => {
    return price !== null
      ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      : '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, ''); // 쉼표 제거
    console.log(value);
    setBidPrice(value);
  };
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <Text size={20} weight="regular">
            입찰
          </Text>
        </ModalHeader>
        <ModalContent>
          <ModalImageContainer>
            <Image src={imageSrc} alt="모달 이미지" />
            <Title>{title}</Title>
          </ModalImageContainer>

          <InputContainer>
            <Text size={14} weight="medium">
              입찰 금액
            </Text>
            <Input
              type="text"
              placeholder="입찰 금액 입력"
              value={bidPrice !== null ? formatPrice(bidPrice) : ''}
              onChange={handleInputChange}
            />
            <Text size={14} weight="medium">
              원
            </Text>
          </InputContainer>
        </ModalContent>
        <ModalFooter>
          <CommonButton
            onClick={handleCancel}
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
