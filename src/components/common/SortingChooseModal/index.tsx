import { ModalWrapper, SortingOption } from './index.style';

const sortingOptions: ('이름순' | '최신순' | '인기순')[] = [
  '이름순',
  '최신순',
  '인기순',
];

/**
 * 정렬 Modal 컴포넌트입니다.
 * 작품 정렬 버튼을 클릭하면 나타나는 모달로 클릭된 버튼의 텍스트가 강조됩니다.
 * @author 노찬영
 */

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
