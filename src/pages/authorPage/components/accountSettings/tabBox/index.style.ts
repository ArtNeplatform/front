import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const TabBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 96px;

  border: 1px solid ${theme.colors.lightGray};
`;

export const TabBoxItem = styled.section<{ $isActive: boolean }>`
  display: flex;
  width: 202px;
  height: 16px;
  justify-content: flex-start;
  align-items: center;
  border-left: ${({ $isActive }) =>
    $isActive ? `3px solid ${theme.colors.black}` : 'none'};
  padding: ${({ $isActive }) => ($isActive ? `16px 21px` : '16px 24px')};
  cursor: pointer;

  /* 중앙 구분선 추가 */
  &:not(:first-of-type) {
    border-top: 1px solid ${theme.colors.lightGray};
  }

  text-overflow: ellipsis;
  ${theme.typography['14']}
  font-weight: 400;
  color: ${theme.colors.font03gray};
`;
