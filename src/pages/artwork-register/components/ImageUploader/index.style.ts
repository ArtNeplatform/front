import styled from '@emotion/styled';

export const ImageUploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
`;
export const PictureRegisterWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const ImageList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  padding: 0;
  margin: 5px; // 여백 추가
`;
