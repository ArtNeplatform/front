import { Route, Routes } from 'react-router-dom';
import { AuthCheckRoute } from '@components/common/AuthCheckRoute';
import NotFound from './pages/not-found';
import Test from '@pages/test.tsx';
import { MypageBuyerPage } from './pages/mypage-buyer-page';
import { MypageAuthorPage } from './pages/mypage-author-page';

import { Login } from '@/pages/login';
import { ArtworkRegister } from '@/pages/artwork-register';
import { AuctionRegister } from './pages/auction-register';
import { Author } from './pages/author';
import { AuthorDetail } from './pages/author-detail';
import { Exhibition } from './pages/exhibition';
import { ExhibitionDetail } from './pages/exhibition-detail';
import { Register } from '@/pages/register';
import { ExhibitionRegister } from '@/pages/exhibition-register';
import { Auction } from './pages/auction';
import { Main } from '@/pages/main';
import { ArtWork } from '@/pages/artwork';
import { ArtworkDetail } from '@/pages/artwork-detail';
import { AuctionDetail } from './pages/auction-detail';
import { LoginRedirect } from './pages/login-redirect';
type TRoutes = {
  path: string;
  element: JSX.Element;
  isTabBar: boolean;
  isCheckAuth?: boolean;
};
/**
 * Login 로직이 구현되기 전에는 isCheckAuth 는 사용하지 않습니다.
 * @author 홍규진
 * */

/**
 * 작품구매자_마이페이지는 /mypage/buyer 이고,
 * 작가_마이페이지는 /mypage/author 로 구분했습니다.
 * @author 노찬영, 홍규진
 * */

// eslint-disable-next-line react-refresh/only-export-components
export const routes: TRoutes[] = [
  { path: '/', element: <Main />, isTabBar: true },
  { path: '/mypage/buyer', element: <MypageBuyerPage />, isTabBar: true },
  { path: '/mypage/author', element: <MypageAuthorPage />, isTabBar: true },

  { path: '/test', element: <Test />, isTabBar: true },
  { path: '/login', element: <Login />, isTabBar: true },
  { path: '/login/redirect', element: <LoginRedirect />, isTabBar: true },
  { path: '/register', element: <Register />, isTabBar: true },

  {
    path: '/artwork-register',
    element: <ArtworkRegister />,
    isTabBar: true,
  },
  {
    path: '/auction-register',
    element: <AuctionRegister />,
    isTabBar: true,
  },
  {
    path: '/author',
    element: <Author />,
    isTabBar: true,
  },
  {
    path: '/author/:id',
    element: <AuthorDetail />,
    isTabBar: true,
  },
  {
    path: '/exhibition',
    element: <Exhibition />,
    isTabBar: true,
  },
  {
    path: '/exhibition/:id',
    element: <ExhibitionDetail />,
    isTabBar: true,
  },
  {
    path: '/exhibition-register',
    element: <ExhibitionRegister />,
    isTabBar: true,
  },
  {
    path: '/auction',
    element: <Auction />,
    isTabBar: true,
  },
  {
    path: '/auction/:id',
    element: <AuctionDetail />,
    isTabBar: true,
  },
  { path: '/main', element: <Main />, isTabBar: true },
  { path: '/artwork', element: <ArtWork />, isTabBar: true },
  { path: '/artwork/:id', element: <ArtworkDetail />, isTabBar: true },
];

/**
 * AuthCheckRoute 로 한 번 감사서,
 * 로그인 여부에 따라서 다시 리다이랙팅을 해주는 여부를 확인합니다.
 * @author 홍규진
 * */
export default function Router() {
  return (
    <Routes>
      {routes.map(({ path, element, isCheckAuth: isCheckAuth }: TRoutes) =>
        isCheckAuth ? (
          <Route
            key={path}
            path={path}
            element={
              <AuthCheckRoute redirectPath="/">{element}</AuthCheckRoute>
            }
          />
        ) : (
          <Route key={path} path={path} element={element} />
        )
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
