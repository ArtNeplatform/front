import { ReactNode } from 'react';
import {
  Footer,
  LayoutContainer,
  Main,
} from '@components/common/PageLayout/index.style.ts';
import { HeaderContent } from '@components/common/Header';
import { useNavigate } from 'react-router-dom';

interface PageLayoutProps {
  children: ReactNode;
}

//TODO-[규진] 유저 상태관리가 완성되면 HeaderContent에 알맞은 값을 넣어줍니다.
export const PageLayout = ({ children }: PageLayoutProps) => {
  const navigate = useNavigate();

  function handleLoginFn() {
    navigate('/login');
  }

  function handleLogoutFn() {
    console.log('로그아웃');
  }

  function handleLinkMypageFn() {
    navigate('/mypage');
  }

  return (
    <LayoutContainer>
      <HeaderContent
        handleLogin={handleLoginFn}
        handleLogout={handleLogoutFn}
        handleLinkMypage={handleLinkMypageFn}
        isLoggedIn={false}
      />
      <Main>{children}</Main>
      <Footer>
        <p>© 2024 Your Company. All rights reserved.</p>
      </Footer>
    </LayoutContainer>
  );
};
