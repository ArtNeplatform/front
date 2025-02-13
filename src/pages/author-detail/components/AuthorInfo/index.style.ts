import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: 1285px;
`;

export const Card = styled.div`
  width: 100%;
  border: 1px solid #e7e7e7;
  margin-bottom: 40px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
`;

export const Title = styled.div`
  font-weight: 600;
  ${(theme) => theme.theme.typography['20']}
  letter-spacing: -0.5px;
  color: #111111;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Paragraph = styled.p`
  ${(theme) => theme.theme.typography['16']}
  font-weight: 400;
  letter-spacing: -0.4px;
  color: ${({ theme }) => theme.colors.font03gray};
`;

export const DateText = styled.span`
  ${(theme) => theme.theme.typography['16']}
  font-weight: 600;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.font03gray};
`;
