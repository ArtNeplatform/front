import { Link } from 'react-router-dom';

export default function NotFound() {
  //TODO-[규진] 페이지가 존재하지 않을 때, 리다이렉팅 해줍니다.
  return (
    <Link to="/">
          <button>홈으로 돌아가기</button>
    </Link>

  );
}
