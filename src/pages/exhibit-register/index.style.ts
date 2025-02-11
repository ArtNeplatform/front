import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
`;

export const GallerySelection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SelectedGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
