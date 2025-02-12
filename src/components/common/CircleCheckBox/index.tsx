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
 * 부모 컴포넌트에서 체크박스의 상태를 관리할 수 있게 합니다.
 * @author 김서윤, 홍규진
 */
interface CheckboxProps {
  id: string;
  label?: string | null;
  onChange: (id: string) => void;
  checked: boolean;
}

export const CircleCheckBox = ({
  id,
  label,
  onChange,
  checked,
}: CheckboxProps) => {
  const handleChange = () => {
    onChange(id);
  };

  return (
    <CheckboxContainer>
      <CheckBox checked={checked} htmlFor={id}>
        <HiddenCheckbox
          id={id}
          type="checkbox"
          onChange={handleChange}
          checked={checked}
        />
        <CircleIcon />
      </CheckBox>
      {label && (
        <Label htmlFor={id} checked={checked}>
          {label}
        </Label>
      )}
    </CheckboxContainer>
  );
};
