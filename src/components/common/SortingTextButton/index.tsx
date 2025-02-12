import SortingIcon from '@assets/svg/Frame 1707482245.svg?react';
import { useState } from 'react';
import { Button, Wrapper } from './index.style';
import SortingChooseModal from '../SortingChooseModal';

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
