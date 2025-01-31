import { Link } from 'react-router-dom';
import MainLogo from '@assets/png/main-logo.png';
import { BigLogo } from '@components/common/Error/DefaultErrorFallbackUI/index.style.ts';
export default function NotFound() {
  //TODO-[규진] 페이지가 존재하지 않을 때, 리다이렉팅 해줍니다.
  return (
    <Link to="/">
      <BigLogo src={MainLogo} width={800} height={200} />
      <button>홈으로 돌아가기</button>
    </Link>
  );
}
