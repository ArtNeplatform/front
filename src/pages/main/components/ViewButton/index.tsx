import { Text } from '@/styles/text';
import { ButtonContainer, ArrowIcon } from './index.style.ts';
import Arrow from '@/assets/svg/arrow-right-black.svg';

interface ViewButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ViewButton = ({ onClick }: ViewButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      <Text size={14} color="black" weight="regular">
        View All
      </Text>
      <ArrowIcon src={Arrow} alt="보러가기" />
    </ButtonContainer>
  );
};
