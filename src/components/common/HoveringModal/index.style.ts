import styled from "@emotion/styled";
import theme from "@/styles/theme";

export const HoveringModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100%;
  left: 0;
  width: 38.3rem;
  padding: 2rem 2rem 2.4rem;
  box-shadow: 16px 16px 20px 0 rgba(0, 0, 0, 0.03);
  background-color: ${theme.colors.white};
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;

  p {
    ${(theme) => theme.theme.typography["14"]}
    font-weight: 600;
    color: ${theme.colors.black};
  }
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 3.6rem);
  padding: 1.6rem;
  margin-bottom: 1rem;
  background-color: ${theme.colors.priceBox};
  ${(theme) => theme.theme.typography["14"]}
  font-weight: 400;
  color: ${theme.colors.black};
`;

export const PriceRow = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const Notice = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    ${(theme) => theme.theme.typography["14"]}
    font-weight: 600;
    color: ${theme.colors.black};
  }

  small {
    ${(theme) => theme.theme.typography["14"]}
    font-weight: 400;
    color: ${theme.colors.fontGray};
  }
`;
