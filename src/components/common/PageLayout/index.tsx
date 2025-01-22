import { ReactNode } from 'react';
import {
   Footer,
   LayoutContainer,
   Main,
} from '@components/common/PageLayout/index.style.ts';
import { HeaderContent } from '@components/common/Header';

interface PageLayoutProps {
  children: ReactNode;
}
function handleLoginFn() {
  console.log('로그인 함수');
}
function handleLogoutFn() {
  console.log('로그아웃 함수')
}
//TODO-[규진] 유저 상태관리가 완성되면 HeaderContent에 알맞은 값을 넣어줍니다.
export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <LayoutContainer>
      <HeaderContent  handleLogin={handleLoginFn} handleLogout={handleLogoutFn} isLoggedIn={false}/>
      <Main>{children}</Main>
      <Footer>
        <p>© 2024 Your Company. All rights reserved.</p>
      </Footer>
    </LayoutContainer>
  );
};

