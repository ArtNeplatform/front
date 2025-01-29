import styled from "@emotion/styled";
import theme from "@/styles/theme";

export const ModalWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${theme.colors.white};
  display: flex;
  width: 14rem;
  flex-direction: column;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.06);
`;

export const SortingOption = styled.div<{ $isSelected: boolean }>`
  display: -webkit-box;
  width: 100%;
  padding: 1.1rem 1.6rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  ${(theme) => theme.theme.typography["16"]}
  font-weight: ${({ $isSelected }) => ($isSelected ? "600" : "400")};

  &:hover {
    cursor: pointer;
  }
`;
