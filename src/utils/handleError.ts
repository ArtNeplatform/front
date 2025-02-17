import { toast } from 'sonner';

/**
 * 페이지 전체를 표시하는 API 호출중 에러가 발생할 경우 사용 or 치명적인 에러 발생시 사용
 * 예시) 메인 페이지 데이터 조회 중 에러가 발생할 경우
 * ErrorBoundary 컴포넌트에서 DefaultFallBack UI 사용
 * @param error 에러 객체
 * @author 홍규진
 */
export const handleError = (error: Error) => {
  const errorMessage = error.message;
  console.log(errorMessage);
  toast.error(errorMessage);
  throw new Error(errorMessage);
};
