import MainLogo from '@assets/png/main-logo.png';
import {
  ErrorContainer,
  ErrorContent,
  LogoImage,
  ErrorIcon,
  ErrorMessage,
  ErrorDetail,
  RetryButton,
} from './index.style.ts';

type TDefaultErrorFallbackUIProps = {
  resetErrorBoundary: () => void;
  error: Error;
};

export default function DefaultErrorFallbackUI({
  resetErrorBoundary,
  error,
}: TDefaultErrorFallbackUIProps) {
  return (
    <ErrorContainer>
      <ErrorContent>
        <LogoImage src={MainLogo} alt="Main Logo" />
        <ErrorIcon>⚠️</ErrorIcon>
        <ErrorMessage>잠시 문제가 발생했어요</ErrorMessage>
        <ErrorDetail>{error.message}</ErrorDetail>
        <RetryButton onClick={resetErrorBoundary}>
          다시 시도하기
        </RetryButton>
      </ErrorContent>
    </ErrorContainer>
  );
}
