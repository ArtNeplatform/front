import { Text } from '@/styles/text';
import { ButtonContainer, CloseIcon } from './index.style.ts';
import Close from '@/assets/svg/icon-close.svg';

interface SelectedFilterProps {
  filters: string[];
  onRemoveFilter: (filter: string) => void;
}

export const SelectedFilter = ({
  filters,
  onRemoveFilter,
}: SelectedFilterProps) => {
  return (
    <>
      {filters.map((filter) => (
        <ButtonContainer key={filter}>
          <Text size={14} color="black" weight="medium">
            {filter}
          </Text>
          <CloseIcon
            src={Close}
            alt="닫기"
            onClick={() => onRemoveFilter(filter)}
          />
        </ButtonContainer>
      ))}
    </>
  );
};
