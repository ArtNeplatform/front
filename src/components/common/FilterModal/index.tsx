import {
  ModalContainer,
  ButtonGroup,
} from '@components/common/FilterModal/index.style.ts';

import { RectangleCheckBox } from '@components/common/RectangleCheckBox';
import { CommonButton } from '@components/common/CommonButton';

interface FilterModalProps {
  checkboxes: { id: string; label: string }[];
  onCancel: () => void;
  onConfirm: () => void;
}

/**
 * 앱 전반적으로 사용되는 FilterModal입니다.
 * checkboxes에 필요한 id, label을 넣어 사용할 수 있습니다.
 * onCancle은 취소, onConfirm은 해당 기능의 함수를 외부에서 주입합니다.
 * @author 김서윤
 */

export const FilterModal = ({
  checkboxes,
  onCancel,
  onConfirm,
}: FilterModalProps) => {
  return (
    <ModalContainer>
      {checkboxes.map(({ id, label }) => (
        <RectangleCheckBox
          key={id}
          id={id}
          label={label}
          onChange={() => {}}
          checked={false}
        />
      ))}
      <ButtonGroup>
        <CommonButton
          onClick={onCancel}
          text="취소"
          color="#111"
          background="#fff"
          borderColor="#E5E5EC"
        />
        <CommonButton
          onClick={onConfirm}
          text="확인"
          color="#fff"
          background="#111"
          borderColor="#111"
        />
      </ButtonGroup>
    </ModalContainer>
  );
};
