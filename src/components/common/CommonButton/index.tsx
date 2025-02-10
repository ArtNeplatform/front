import { ButtonContainer } from '@components/common/CommonButton/index.style.ts';

/**
 * 앱 전반적으로 사용되는 Button입니다.
 * 버튼의 함수, 텍스트, 텍스트색상, 배경색상, 테두리는 외부에서 주입합니다.
 * 다양한 상황에서도 사용할 수 있도록 버튼의 테두리 반지름을 조절할 수 있습니다.
 * @author 김서윤, 홍규진
 */
interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  color: string;
  background: string;
  borderColor: string;
  borderRadius?: string;
  disabled?: boolean;
}

export const CommonButton = ({
  onClick,
  text,
  color,
  background,
  borderColor,
  borderRadius,
  disabled,
}: ButtonProps) => {
  return (
    <ButtonContainer
      onClick={onClick}
      $color={color}
      $background={background}
      $borderColor={borderColor}
      $borderRadius={borderRadius ?? '100px'}
      $disabled={disabled ?? false}
    >
      {text}
    </ButtonContainer>
  );
};
