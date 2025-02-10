// 타입 정의
type TypographySize = {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
};

type Typography = {
  [key in
    | 56
    | 48
    | 44
    | 38
    | 32
    | 28
    | 24
    | 20
    | 18
    | 16
    | 15
    | 14
    | 13]: TypographySize;
};

// 테마 정의
const theme = {
  typography: {
    56: { fontSize: '56px', lineHeight: '72px', letterSpacing: '-2.5%' },
    48: { fontSize: '48px', lineHeight: '62px', letterSpacing: '-2.5%' },
    44: { fontSize: '44px', lineHeight: '56px', letterSpacing: '-2.5%' },
    38: { fontSize: '38px', lineHeight: '50px', letterSpacing: '-2.5%' },
    32: { fontSize: '32px', lineHeight: '42px', letterSpacing: '-2.5%' },
    28: { fontSize: '28px', lineHeight: '38px', letterSpacing: '-2.5%' },
    24: { fontSize: '24px', lineHeight: '34px', letterSpacing: '-2.5%' },
    20: { fontSize: '20px', lineHeight: '30px', letterSpacing: '-2.5%' },
    18: { fontSize: '18px', lineHeight: '28px', letterSpacing: '-2.5%' },
    16: { fontSize: '16px', lineHeight: '26px', letterSpacing: '-2.5%' },
    15: { fontSize: '15px', lineHeight: '22px', letterSpacing: '-2.5%' },
    14: { fontSize: '14px', lineHeight: '20px', letterSpacing: '-2.5%' },
    13: { fontSize: '13px', lineHeight: '18px', letterSpacing: '-2.5%' },
  },
  colors: {
    black: '#111',
    gray: '#787878',
    lightGray: '#E5E5EC',
    white: '#FFFFFF',
    dark: '#191a20',
    primary: '#3f4150',
    secondary: '#8c8d96',
    lineLightColor: '#F1F1F5',
    font03gray: '#505050',
    fontGray: '#767676',
    priceBox: '#F7F7FB',
    profileBox: '#E7E7E7',
    profileButton: '#F9F9F9',
    borderBottom: '#D9D9D9',
  },
} as const;

export type Theme = typeof theme;

// emotion의 DefaultTheme 확장
declare module '@emotion/react' {
  export interface Theme {
    typography: Typography;
    colors: {
      black: string;
      gray: string;
      lightGray: string;
      dark: string;
      white: string;
      primary: string;
      secondary: string;
      lineLightColor: string;
      font03gray: string;
      fontGray: string;
      priceBox: string;
    };
  }
}

export default theme;
