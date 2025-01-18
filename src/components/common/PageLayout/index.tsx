import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  isLoggedIn: boolean;
  userName?: string;
}

function handleLogin() {
  console.log('로그인 예시');
}
function handleLogout() {
  console.log('로그인 예시');
}

const HeaderContent = ({ isLoggedIn, userName }: Omit<PageLayoutProps, 'children'>) => {
  return (
    <Header>
      <Logo>로고</Logo>
      <NavMenu>
        {isLoggedIn ? (
          <UserInfo>
            <span>환영합니다, {userName}님!</span>
            <Button onClick={handleLogin}>로그아웃</Button>
          </UserInfo>
        ) : (
          <Button onClick={handleLogout}>로그인</Button>
        )}
      </NavMenu>
    </Header>
  );
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <LayoutContainer>
      <HeaderContent isLoggedIn={false} />
      <Main>{children}</Main>
      <Footer>
        <p>© 2024 Your Company. All rights reserved.</p>
      </Footer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  color: black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  padding: 20px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
