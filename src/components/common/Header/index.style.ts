import styled from '@emotion/styled';
import theme from '@styles/theme.ts';

export const Header = styled.header`
  width: auto;
  height: 60px;

  background-color: #ffffff;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

export const Logo = styled.img`
  width: 82px;
  height: 24px;
`;
export const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const NavItem = styled.div`
  ${theme.typography['16']}
  &:hover {
    cursor: pointer;
  }
  a {
    font-weight: 400;

    text-decoration: none;
    color: black;
  }
`;

export const Button = styled.button`
  padding: 4px 20px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.lightGray};
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  ${theme.typography['14']}
  &:hover {
    cursor: pointer;
  }
`;
export const LoggedInContainer = styled.div`
  display: flex;
`;
export const NonLoggedInContainer = styled.div`
  display: flex;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
