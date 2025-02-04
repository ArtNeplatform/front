import {
  HoveringModalContainer,
  Notice,
  PriceInfo,
  PriceBox,
  PriceRow,
} from './index.style';

interface HoveringModalProps {
  isOpen: boolean;
  startPrice: number;
  currentPrice: number;
}

/**
 * 작품 가격에 hover 시 나타나는 Modal 컴포넌트입니다.
 * 작품의 시작가와 현재가를 받습니다.
 * isOpen 의 true/false 여부에 따라서 모달 상태가 달라집니다.
 * @author 노찬영
 */

export const HoveringModal = ({
  isOpen,
  startPrice,
  currentPrice,
}: HoveringModalProps) => {
  if (!isOpen) return null;

  return (
    <HoveringModalContainer>
      <PriceInfo>
        <h1>가격 정보</h1>
        <PriceBox>
          <PriceRow>
            <span>시작가</span>
            <span>{startPrice.toLocaleString()}원</span>
          </PriceRow>
          <PriceRow>
            <span>현재가</span>
            <span>{currentPrice.toLocaleString()}원</span>
          </PriceRow>
        </PriceBox>
      </PriceInfo>
      <Notice>
        <h2>유의사항</h2>
        <span>• 해당 가격은 시장 현황 등에 따라 변경될 수 있습니다.</span>
      </Notice>
    </HoveringModalContainer>
  );
};

export default HoveringModal;
