import { Link } from 'react-router-dom';
import MainLogo from '@assets/png/main-logo.png';
import {
  NotFoundContainer,
  ErrorWrapper,
  LogoImage,
  ErrorCode,
  ErrorMessage,
  HomeButton,
} from './index.style.ts';

export default function NotFound() {
  return (
    <NotFoundContainer>
      <ErrorWrapper>
        <LogoImage src={MainLogo} alt="Main Logo" />
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>페이지를 찾을 수 없습니다</ErrorMessage>
        <Link to="/">
          <HomeButton>홈으로 돌아가기</HomeButton>
        </Link>
      </ErrorWrapper>
    </NotFoundContainer>
  );
}
