import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const AuctionContainer = styled.div`
  display: flex;
  width: 1080px;
  flex-direction: column;
  align-items: flex-start;
  color: ${theme.colors.black};

  h1 {
    ${theme.typography['24']}
    font-weight: 600;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 4px;
  ${theme.typography['14']}
  font-weight: 400;
  padding: 22px 16px;
  border-top: 2px solid ${theme.colors.black};
`;

export const TableHeader = styled.th`
  padding: 22px 16px;
  border-bottom: 1px solid ${theme.colors.fontGray};
  text-align: center;
  ${theme.typography['14']}
  font-weight: 600;

  &:nth-of-type(1) {
    width: 630px;
  }

  &:nth-of-type(2),
  &:nth-of-type(3),
  &:nth-of-type(4) {
    width: 150px;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${theme.colors.lineLightColor};
`;

export const TableCell = styled.td`
  padding: 22px 16px;

  &:nth-of-type(1) {
    text-align: left;
  }

  &:nth-of-type(2),
  &:nth-of-type(3),
  &:nth-of-type(4) {
    text-align: center;
  }
`;
