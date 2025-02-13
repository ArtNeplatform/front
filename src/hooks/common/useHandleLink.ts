import { useNavigate } from 'react-router-dom';

/**
 * 라우터 이동을 위한 Navigate 훅
 * @example
 * const handleLink = useHandleLink(`링크`);
 * 이후 onClick={handleLink}
 * @author 김서윤
 **/

export const useHandleLink = (path: string) => {
  const navigate = useNavigate();

  return () => navigate(path);
};
