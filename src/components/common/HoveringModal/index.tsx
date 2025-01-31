import {
  HoveringModalContainer,
  Notice,
  PriceInfo,
  PriceBox,
  PriceRow,
} from "./index.style";

interface HoveringModalProps {
  isOpen: boolean;
  startPrice: number;
  currentPrice: number;
}

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
