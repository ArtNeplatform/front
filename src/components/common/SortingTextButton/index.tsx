import SortingIcon from '@assets/svg/Frame 1707482245.svg?react';
import { useState } from 'react';
import { Button, Wrapper } from './index.style';
import SortingChooseModal from '../SortingChooseModal';

/**
 * 정렬 Button 컴포넌트입니다.
 * 작품 정렬 순서를 결정하며 기본값은 '이름순' 입니다.
 * 총 3가지가 있으며 선택된 값에 따라 정렬됩니다.
 * @author 노찬영, 김서윤
 */
interface SortingTextButtonProps {
  selectedSorting: '이름순' | '최신순' | '인기순';
  onSortingSelect: (sorting: '이름순' | '최신순' | '인기순') => void;
}

export const SortingTextButton = ({
  selectedSorting,
  onSortingSelect,
}: SortingTextButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSortingClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <Button onClick={handleSortingClick}>
        <SortingIcon /> {selectedSorting}
      </Button>
      {isModalOpen && (
        <SortingChooseModal
          selectedSorting={selectedSorting}
          onSortingSelect={(sorting) => {
            onSortingSelect(sorting);
            setIsModalOpen(false);
          }}
        />
      )}
    </Wrapper>
  );
};

export default SortingTextButton;
