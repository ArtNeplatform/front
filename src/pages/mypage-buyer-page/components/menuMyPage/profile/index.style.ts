import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const ProfileContainer = styled.div`
  display: flex;
  width: 210px;
  height: 335px;
  padding: 28px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid ${theme.colors.profileBox};
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: fill;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`;

export const Name = styled.span`
  ${(theme) => theme.theme.typography['18']}
  font-weight: 600;
  color: ${theme.colors.black};
`;

export const EditButton = styled.button`
  display: flex;
  width: 180px;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  border-radius: 100px;
  border: none;
  cursor: pointer;

  ${theme.typography['13']}
  font-weight: 400;
  background-color: ${theme.colors.profileButton};
  color: ${theme.colors.font03gray};
`;

export const PaymentStatus = styled.div`
  display: flex;
  width: 202px;
  flex-direction: column;
  align-items: flex-start;
  padding: 28px 4px 0;
  gap: 20px;
  margin-top: 28px;
  border-top: 1px solid ${theme.colors.profileBox};
`;

export const PaymentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 202px;
  height: 20px;
`;

export const PaymentLabel = styled.span`
  ${theme.typography['14']}
  font-weight: 400;
  color: ${theme.colors.black};
`;

export const PaymentCount = styled.span`
  text-align: right;
  ${theme.typography['14']}
  font-weight: 500;
  color: ${theme.colors.black};
`;
