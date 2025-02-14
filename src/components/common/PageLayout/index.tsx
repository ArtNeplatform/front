import { ReactNode } from 'react';
import {
  Footer,
  LayoutContainer,
  Main,
} from '@components/common/PageLayout/index.style.ts';
import { HeaderContent } from '@components/common/Header';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/authContext';
import { toast } from 'sonner';

interface PageLayoutProps {
  children: ReactNode;
}

//TODO-[규진] 유저 상태관리가 완성되면 HeaderContent에 알맞은 값을 넣어줍니다.
export const PageLayout = ({ children }: PageLayoutProps) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  function handleLoginFn() {
    navigate('/login');
  }

  function handleLogoutFn() {
    localStorage.removeItem('accessToken');
    toast.success('로그아웃 성공! 다음에 만나요!');
    navigate('/login');
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
        isLoggedIn={isLoggedIn}
      />
      <Main>{children}</Main>
      <Footer>
        <p>© 2024 Your Company. All rights reserved.</p>
      </Footer>
    </LayoutContainer>
  );
};
