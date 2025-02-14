import styled from '@emotion/styled';
import theme from '@/styles/theme';

interface VisibleProps {
  $isVisible: boolean;
}

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px 8px 12px;
  border-radius: 100px;
  outline: none;
  border: 1px solid ${theme.colors.lightGray};
  background-color: ${theme.colors.white};
  gap: 4px;
  width: max-content;
  cursor: pointer;
`;

export const ArrowIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: none;
  top: 0;
  left: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropdownContainer = styled.div<VisibleProps>`
  z-index: 100;
  position: absolute;
  top: 360px;
  display: ${(props) => (props.$isVisible ? 'flex' : 'none')};
`;
