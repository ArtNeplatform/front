import {
  Button,
  Header,
  LoggedInContainer,
  Logo,
  NavItem,
  NavMenu,
  NonLoggedInContainer,
  UserInfo,
} from '@components/common/Header/index.style.ts';
import MainLogo from '@assets/png/main-logo.png';
import { Link } from 'react-router-dom';

/**
 * 앱 전반적으로 사용되는 HeaderComponent입니다.
 * 로그인 여부 및 userName 값에 따라서, 헤더의 상태창이 다르게 보입니다.
 * 로그인 여부에 따라 로그인 버튼 또는 로그아웃 버튼이 표시됩니다.
 * @param isLoggedIn 로그인 여부
 * @param userName 사용자 이름
 * @param handleLogout 로그아웃 함수
 * @param handleLogin 로그인 함수
 * @param handleLinkMypage 마이페이지 이동 함수
 * @author 홍규진
 */

interface HeaderContentProps {
  isLoggedIn?: boolean;
  userName?: string;
  handleLogout: () => void;
  handleLogin: () => void;
  handleLinkMypage: () => void;
}

export const HeaderContent = ({
  isLoggedIn = false,
  handleLogin,
  handleLogout,
  handleLinkMypage,
}: HeaderContentProps) => {
  return (
    <Header>
      <NavMenu>
        <NavItem style={{ marginRight: '100px' }}>
          <Link to="/">
            <Logo src={MainLogo} />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/">작품</Link>
        </NavItem>
        <NavItem>
          <Link to="/auction">경매</Link>
        </NavItem>
        <NavItem>
          <Link to="/author">작가</Link>
        </NavItem>
      </NavMenu>

      <NavMenu>
        {isLoggedIn ? (
          <LoggedInContainer>
            <UserInfo>
              <Button onClick={handleLinkMypage}>마이페이지</Button>
              <Button onClick={handleLogout}>로그아웃</Button>
            </UserInfo>
          </LoggedInContainer>
        ) : (
          <NonLoggedInContainer>
            <Button onClick={handleLogin}>로그인</Button>
          </NonLoggedInContainer>
        )}
      </NavMenu>
    </Header>
  );
};
