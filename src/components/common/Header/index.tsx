import {
  Button,
  Header,
  LoggedInContainer,
  Logo,
  NavMenu,
  NonLoggedInContainer,
  UserInfo,
} from '@components/common/Header/index.style.ts';
import MainLogo from '@assets/png/main-logo.png';
/**
 * 앱 전반적으로 사용되는 HeaderComponent입니다.
 * 로그인 여부 및 userName 값에 따라서, 헤더의 상태창이 다르게 보입니다.
 * @author 홍규진
 * */
interface HeaderProps {
  isLoggedIn?: boolean;
  userName?: string;
  handleLogout?: () => void;
  handleLogin?: () => void;
}

function handleLinkMypage() {
  console.log('마이페이지 라우팅 함수');
}
export const HeaderContent = ({
  isLoggedIn = false,
  handleLogin = () => {
    console.log('로그인');
  },
  handleLogout = () => {
    console.log('로그아웃');
  },
}: HeaderProps) => {
  return (
    <Header>
      <Logo src={MainLogo} />
      <NavMenu>
        {isLoggedIn ? (
          <LoggedInContainer>
            <UserInfo>
              <Button onClick={handleLinkMypage}>마이페이지</Button>
              <Button onClick={handleLogin}>로그아웃</Button>
            </UserInfo>
          </LoggedInContainer>
        ) : (
          <NonLoggedInContainer>
            <Button onClick={handleLogout}>로그인</Button>
          </NonLoggedInContainer>
        )}
      </NavMenu>
    </Header>
  );
};
