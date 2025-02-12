import { ModalWrapper, SortingOption } from './index.style';

const sortingOptions: ('이름순' | '최신순' | '인기순')[] = [
  '이름순',
  '최신순',
  '인기순',
];

interface SortingChooseModalProps {
  selectedSorting: '이름순' | '최신순' | '인기순';
  onSortingSelect: (sorting: '이름순' | '최신순' | '인기순') => void;
}

const SortingChooseModal = ({
  selectedSorting,
  onSortingSelect,
}: SortingChooseModalProps) => {
  return (
    <ModalWrapper>
      {sortingOptions.map((option) => (
        <SortingOption
          key={option}
          $isSelected={selectedSorting === option}
          onClick={() => onSortingSelect(option)}
        >
          {option}
        </SortingOption>
      ))}
    </ModalWrapper>
  );
};

export default SortingChooseModal;
