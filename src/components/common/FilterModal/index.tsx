import { useState } from 'react';
import {
  ModalContainer,
  ButtonGroup,
} from '@components/common/FilterModal/index.style.ts';

import { RectangleCheckBox } from '@components/common/RectangleCheckBox';
import { CommonButton } from '@components/common/CommonButton';

interface FilterModalProps {
  checkboxes: { id: string; label: string }[];
  selectedFilters: string[];
  onCancel: () => void;
  onConfirm: (selected: string[]) => void;
}

/**
 * 앱 전반적으로 사용되는 FilterModal입니다.
 * checkboxes에 필요한 id, label을 넣어 사용할 수 있습니다.
 * onCancle은 취소, onConfirm은 해당 기능의 함수를 외부에서 주입합니다.
 * @author 김서윤
 */

export const FilterModal = ({
  checkboxes,
  selectedFilters,
  onCancel,
  onConfirm,
}: FilterModalProps) => {
  const [selected, setSelected] = useState<string[]>(selectedFilters);

  const handleCheckboxChange = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <ModalContainer>
      {checkboxes.map(({ id, label }) => (
        <RectangleCheckBox
          key={id}
          id={id}
          label={label}
          onChange={() => handleCheckboxChange(id)}
          checked={selected.includes(id)}
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
          onClick={() => onConfirm(selected)}
          text="확인"
          color="#fff"
          background="#111"
          borderColor="#111"
        />
      </ButtonGroup>
    </ModalContainer>
  );
};
