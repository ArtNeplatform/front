import styled from '@emotion/styled';
import theme from '@styles/theme.ts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 0;
  padding-right: 40px;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: max-content;
`;

export const FlexConatainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MiniLine = styled.div`
  width: 1px;
  height: 12px;
  background-color: ${theme.colors.font03gray};
`;

export const UnderLine = styled.div`
  width: calc(100% + 40px);
  height: 1px;
  background-color: #e7e7e7;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const CategoryTitle = styled.div`
  width: 50px;
`;
