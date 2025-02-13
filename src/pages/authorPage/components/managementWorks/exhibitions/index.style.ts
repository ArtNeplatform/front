import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const ArtWorksContainer = styled.div`
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

export const ArtworkContainer = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
`;

export const ArtworkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 20px;
  padding-bottom: 64px;
  border-bottom: 1px solid ${theme.colors.border};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
`;

export const StyledButton = styled.button`
  width: 106px;
  padding: 12px 16px;
  ${theme.typography['14']}
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${theme.colors.black};
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};

  svg {
    width: 12px;
    height: 12px;
    margin-right: 2px;
  }
`;
