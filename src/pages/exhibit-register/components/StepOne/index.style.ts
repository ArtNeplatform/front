import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  width: 100%;
  max-width: 1140px;
  gap: 20px;
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const GalleryList = styled.div`
  flex: 1;
  max-width: 200px;
  overflow-y: auto; /* 세로 스크롤 */
  overflow-x: hidden;
  border-radius: 8px;
  padding: 10px;
`;

export const SelectedGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const GalleryImage = styled.img<{ selected: boolean }>`
  width: 100%;
  height: auto;
  border: ${({ selected }) => (selected ? '2px solid black' : 'none')};
`;

export const SelectedGalleryDisplay = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 상단 정렬 */
  border-radius: 8px;
  max-width: 837px;
  max-height: 540px;
  padding: 20px;
  background-color: #f9f9f9;
`;

export const DisplayImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
`;
