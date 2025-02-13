import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Text } from '@/styles/text';
import {
  ButtonContainer,
  ArrowIcon,
  Background,
  DropdownContainer,
} from './index.style.ts';
import Arrow from '@/assets/svg/arrow-down.svg';
import { FilterModal } from '@/components/common/FilterModal/index.tsx';

interface FilterButtonProps {
  title: string;
  checkboxes: { id: string; label: string }[];
  selectedFilters: string[];
  setSelectedFilters: (filters: string[]) => void;
}

export const FilterButton = ({
  title,
  checkboxes,
  selectedFilters,
  setSelectedFilters,
}: FilterButtonProps) => {
  const location = useLocation();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMenuClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeMenuClick = () => {
    setDropdownVisible(false);
  };

  const handleConfirm = (selected: string[]) => {
    setSelectedFilters(selected);
    setDropdownVisible(false);
  };

  useEffect(() => {
    setDropdownVisible(false);
  }, [location]);

  return (
    <>
      <ButtonContainer onClick={handleMenuClick}>
        <Text size={14} color="font03gray" weight="regular">
          {title}
        </Text>
        <ArrowIcon src={Arrow} alt="보러가기" />
      </ButtonContainer>

      {isDropdownVisible && (
        <>
          <Background onClick={closeMenuClick} />
          <DropdownContainer $isVisible={isDropdownVisible}>
            <FilterModal
              checkboxes={checkboxes}
              selectedFilters={selectedFilters}
              onConfirm={handleConfirm}
              onCancel={closeMenuClick}
            />
          </DropdownContainer>
        </>
      )}
    </>
  );
};
