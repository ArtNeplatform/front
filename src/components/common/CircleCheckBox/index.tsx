import { useState } from 'react';
import {
  CheckboxContainer,
  CheckBox,
  HiddenCheckbox,
  CircleIcon,
  Label,
} from '@components/common/CircleCheckBox/index.style.ts';

/**
 * 앱 전반적으로 사용되는 CircleCheckBox입니다.
 * 체크 여부에 따라서, 체크박스가 다르게 보입니다.
 * 라벨 입력이 필수는 아니지만, 가능합니다.
 * @author 김서윤
 */
interface CheckboxProps {
  id: string;
  label?: string | null;
}

export const CircleCheckBox = ({ id, label }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <CheckboxContainer>
      <CheckBox checked={isChecked} htmlFor={id}>
        <HiddenCheckbox
          id={id}
          type="checkbox"
          onChange={handleChange}
          checked={isChecked}
        />
        <CircleIcon />
      </CheckBox>
      {label && (
        <Label htmlFor={id} checked={isChecked}>
          {label}
        </Label>
      )}
    </CheckboxContainer>
  );
};
