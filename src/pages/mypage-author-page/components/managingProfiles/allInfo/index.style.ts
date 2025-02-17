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

export const SectionTitle = styled.span`
  ${theme.typography['20']}
  font-weight: 600;
  color: ${theme.colors.black};
`;

export const AccountInfo = styled.section`
  display: flex;
  align-items: flex-start;
  padding: 32px 0 32px 32px;
  gap: 24px;
  border: 1px solid ${theme.colors.border};
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 108px;
  height: 108px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${theme.colors.lightGray};
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  gap: 6px;

  div {
    display: inline-flex;
    width: 103px;
    height: 34px;
    gap: 6px;
    align-items: flex-end;
  }

  h2 {
    margin: 0;

    ${theme.typography['24']}
    font-weight: 600;
    color: ${theme.colors.black};
  }

  span {
    display: flex;
    ${theme.typography['20']}
    font-weight: 400;
    color: ${theme.colors.black};
  }

  p {
    margin: 0;

    ${theme.typography['18']}
    font-weight: 400;
    color: ${theme.colors.fontGray};
  }
`;

export const IntroduceContainer = styled.section`
  display: inline-flex;
  flex-direction: column;

  padding: 28px 120px 28px 32px;
  align-items: flex-start;
  gap: 18px;
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
