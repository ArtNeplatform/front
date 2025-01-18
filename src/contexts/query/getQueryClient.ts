import { QueryClient } from '@tanstack/react-query';

const DEFAULT_STALE_TIME = 10 * 60 * 1000;

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: DEFAULT_STALE_TIME,
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

/**
 * 상단에서 미리 정의해둔, staleTime 과 refetchOnWindowFocus 등,
 * 설정해둔 쿼리 클라이언트를 어디서든 사용할 수 있게 해줍니다.
 * @author 홍규진
 */
export function getQueryClient() {
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
}
