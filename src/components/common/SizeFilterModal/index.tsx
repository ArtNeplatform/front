import { ModalContainer, ButtonGroup } from "@components/common/SizeFilterModal/index.style.ts";

import { RectangleCheckBox } from "@components/common/RectangleCheckBox";
import { CommonButton } from "@components/common/CommonButton";

/**
 * 앱 전반적으로 사용되는 SizeFilterModal입니다.
 * @author 김서윤
 */

export const SizeFilterModal = () => {
  const sampleClose = () => {
    alert("닫기 버튼이 클릭되었습니다.");
  };

  return (
    <ModalContainer>
      <RectangleCheckBox id="10" label="1~10호" />
      <RectangleCheckBox id="30" label="~30호" />
      <RectangleCheckBox id="60" label="~60호" />
      <RectangleCheckBox id="80" label="~80호" />
      <RectangleCheckBox id="100" label="~100호" />
      <RectangleCheckBox id="120" label="100호 +" />
      <ButtonGroup>
        <CommonButton onClick={sampleClose} text="취소" color="#111" background="#fff" border="#E5E5EC" />
        <CommonButton onClick={sampleClose} text="확인" color="#fff" background="#111" border="#111" />
      </ButtonGroup>
    </ModalContainer>
  );
};
