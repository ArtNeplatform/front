import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1080px;
  height: auto;

  gap: 32px;

  h1 {
    margin: 0;

    padding-bottom: 20px;
    ${theme.typography['24']}
    font-weight: 600;
    color: ${theme.colors.black};
    border-bottom: 2px solid ${theme.colors.black};
  }
`;

export const SectionTitleBox = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  ${theme.typography['20']}
  font-weight: 600;
`;

export const EditButton = styled.button`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 100px;

  background-color: ${theme.colors.EditButton};
  border: none;
  cursor: pointer;

  span {
    ${theme.typography['13']}
    font-weight: 500;
    color: ${theme.colors.black};
  }
`;

export const IntroduceContainer = styled.section`
  display: inline-flex;
  flex-direction: column;

  padding: 28px 32px;
  align-items: flex-start;
  gap: 24px;
  border: 1px solid ${theme.colors.border};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 16px;
  background-color: ${theme.colors.priceBox};
  ${theme.typography['16']}
  font-weight: 400;
  color: ${theme.colors.black};
`;

export const Tr = styled.tr`
  border-bottom: 1px solid ${theme.colors.border};
`;

export const Td = styled.td`
  padding: 22px 16px;
  text-align: center;
  ${theme.typography['14']}
  font-weight: 400;
  color: ${theme.colors.fontGray};
`;
