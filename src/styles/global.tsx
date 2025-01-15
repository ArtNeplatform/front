import { css, Global } from '@emotion/react';

const globalStyle = css`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-style: normal;
    src: url('./assets/fonts/Pretendard-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-style: normal;
    src: url('./assets/fonts/Pretendard-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-style: normal;
    src: url('./assets/fonts/Pretendard-SemiBold.woff') format('woff');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 400;
    letter-spacing: -2.5%;
  }
`;

const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};

export default GlobalStyle;
