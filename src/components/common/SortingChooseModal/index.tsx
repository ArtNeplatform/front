import { ModalWrapper, SortingOption } from "./index.style";

const sortingOptions = ["이름순", "최신순", "인기순"];

interface SortingChooseModalProps {
  selectedSorting: string;
  onSortingSelect: (sorting: string) => void;
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
