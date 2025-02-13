import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const FormContainer = styled.div`
  width: 1080px;
  height: 56px;
  background-color: ${theme.colors.white};
`;

export const SectionTitle = styled.h1`
  margin: 0;
  ${theme.typography['24']}
  font-weight: 600;
  padding-bottom: 20px;
  border-bottom: 2px solid ${theme.colors.black};
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 48px 0 104px;
  justify-content: center;
  margin-top: 315px;

  gap: 8px;

  border-top: 1px solid ${theme.colors.lineLightColor};
  border-bottom: 1px solid ${theme.colors.lineLightColor};
`;

export const StyledButton = styled.button<{ variant: 'black' | 'white' }>`
  width: 106px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: ${({ variant }) =>
    variant === 'white' ? `1px solid ${theme.colors.black}` : 'none'};
  background-color: ${({ variant }) =>
    variant === 'black' ? theme.colors.black : theme.colors.white};
  color: ${({ variant }) =>
    variant === 'black' ? theme.colors.white : theme.colors.black};

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'black' ? theme.colors.black : theme.colors.lightGray};
  }
`;
