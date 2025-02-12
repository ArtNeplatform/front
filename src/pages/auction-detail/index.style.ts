import styled from '@emotion/styled';
import theme from '@styles/theme.ts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 auto;
  padding: 0 20px;
  gap: 80px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr;
  gap: 35px;
  max-width: 70%;
`;

export const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SmallImage = styled.img`
  width: 100%;
  min-width: 6vw;
  aspect-ratio: 1 / 1;
  height: auto;
  object-fit: cover;
  border: 1px solid #e1e1e1;
  cursor: pointer;
`;

export const BigImage = styled.img`
  width: 55%;
  min-width: 35vw;
  aspect-ratio: 1 / 1;
  height: auto;
  object-fit: cover;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 80%;
`;

export const Button = styled.button`
  padding: 14px 16px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  width: 150px;
  height: 50px;

  ${theme.typography['16']}
  text-align: center;
  text-overflow: ellipsis;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
`;
