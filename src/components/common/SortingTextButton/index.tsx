import SortingIcon from "@assets/svg/Frame 1707482245.svg?react";
import { useState } from "react";
import { Button, Wrapper } from "./index.style";
import SortingChooseModal from "../SortingChooseModal";

export const SortingTextButton = () => {
  const [selectedSorting, setSelectedSorting] = useState<string>("이름순");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSortingClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleSortingSelect = (sorting: string) => {
    setSelectedSorting(sorting);
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <Button onClick={handleSortingClick}>
        <SortingIcon /> {selectedSorting}
      </Button>
      {isModalOpen && (
        <SortingChooseModal
          selectedSorting={selectedSorting}
          onSortingSelect={handleSortingSelect}
        />
      )}
    </Wrapper>
  );
};


export default SortingTextButton;
