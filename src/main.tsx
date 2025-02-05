import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { QueryClientProvider } from './contexts/query/QueryClientProvider.tsx';
import { AuthProvider } from './contexts/authContext.tsx';
import * as Kakao from 'kakao-js-sdk';

Kakao.initKakao(import.meta.env.VITE_KAKAO_API_KEY);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
