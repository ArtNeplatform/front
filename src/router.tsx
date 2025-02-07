import { Route, Routes } from 'react-router-dom';
import NotFound from '@pages/notFound.tsx';
import { AuthCheckRoute } from '@components/common/AuthCheckRoute';
import Home from '@pages/home.tsx';
import Test from '@pages/test.tsx';
import { Login } from '@/pages/login';
import { ArtworkRegister } from '@/pages/artwork-register';
import { AuctionRegister } from './pages/auction-register';
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
export const routes: TRoutes[] = [
  { path: '/', element: <Home />, isTabBar: true },
  { path: '/test', element: <Test />, isTabBar: true },
  { path: '/login', element: <Login />, isTabBar: true },
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
