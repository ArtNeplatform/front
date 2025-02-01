import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { CookiesProvider } from 'react-cookie';
import ScrollToTop from '@components/common/ScrollToTop';
import FallbackUI from '@components/common/FallbackUI';
import ErrorBoundary from '@components/common/ErrorBoundary';
import DefaultErrorFallbackUI from '@components/common/Error/DefaultErrorFallbackUI';
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';

const App = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <ErrorBoundary
      errorFallback={DefaultErrorFallbackUI}
      onReset={handleReload}
    >
      <Suspense fallback={<FallbackUI />}>
        <CookiesProvider>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <Router />
              <ScrollToTop />
            </ThemeProvider>
          </BrowserRouter>
        </CookiesProvider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
