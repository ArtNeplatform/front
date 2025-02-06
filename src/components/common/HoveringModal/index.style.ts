import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const HoveringModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100%;
  left: 0;
  width: 383px;
  padding: 20px 20px 24px;
  box-shadow: 16px 16px 20px 0 rgba(0, 0, 0, 0.03);
  background-color: ${theme.colors.white};
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;

  h1 {
    ${theme.typography['14']}
    font-weight: 600;
    color: ${theme.colors.black};
  }
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 34px);
  padding: 16px;
  margin-bottom: 10px;
  background-color: ${theme.colors.priceBox};
  ${theme.typography['14']}
  font-weight: 400;
  color: ${theme.colors.black};
`;

export const PriceRow = styled.div`
  display: flex;
  gap: 12px;
`;

export const Notice = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    ${theme.typography['14']}
    font-weight: 600;
    color: ${theme.colors.black};
  }

  span {
    ${theme.typography['14']}
    font-weight: 400;
    color: ${theme.colors.fontGray};
  }
`;
