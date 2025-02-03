import { ButtonContainer } from '@components/common/CommonButton/index.style.ts';

/**
 * 앱 전반적으로 사용되는 Button입니다.
 * 버튼의 함수, 텍스트, 텍스트색상, 배경색상, 테두리는 외부에서 주입합니다.
 * @author 김서윤
 */
interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  color: string;
  background: string;
  border: string;
}

export const CommonButton = ({
  onClick,
  text,
  color,
  background,
  border,
}: ButtonProps) => {
  return (
    <ButtonContainer
      onClick={onClick}
      $color={color}
      $background={background}
      $border={border}
    >
      {text}
    </ButtonContainer>
  );
};
