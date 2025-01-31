type TDefaultErrorFallbackUIProps = {
  resetErrorBoundary: () => void;
  error: Error;
};

export default function DefaultErrorFallbackUI({
  resetErrorBoundary,
  error,
}: TDefaultErrorFallbackUIProps) {
  return (
    <div>
      <p>{`잠시 문제가 발생했어요\n다시 시도해주세요, ${error}`}</p>
      <button onClick={resetErrorBoundary}>다시 시도</button>
    </div>
  );
}
