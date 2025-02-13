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
  display: flex;
  text-align: center;
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

  width: 1014px;
  padding: 20px 32px;
  align-items: flex-start;
  gap: 12px;
  border: 1px solid ${theme.colors.border};
`;

export const Content = styled.span`
  display: flex;
  align-items: center;
  width: 928px;

  ${theme.typography['16']}
  font-weight: 400;
  color: ${theme.colors.font03gray};
`;

export const PhotoFieldContainer = styled.div`
  display: flex;
  width: 497px;
`;

export const PhotoUploadBox = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 12px 0 17px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  overflow: hidden;

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  .preview {
    width: 120px;
    height: 120px;
    object-fit: cover;
  }

  .icon {
    width: 60px;
    height: 60px;
  }
`;

export const Placeholder = styled.span`
  align-self: flex-end;
  width: 250px;

  ${theme.typography['14']}
  font-weight: 400;
  color: ${theme.colors.fontGray};
`;
