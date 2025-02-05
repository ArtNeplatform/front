import { useState } from 'react';
import { ThemeButton, Wrapper } from './index.style';

interface ThemeChooserProps {
  themes: string[];
  defaultSelectedTheme?: string;
}

/**
 * 테마 선택 공통 컴포넌트입니다. 기본 선택 테마는 '풍경' 입니다.
 * `themes`를 props로 받아 다른 페이지에서도 활용 가능하도록 작성하였습니다.
 * @author 노찬영
 */

export const ThemeChooser = ({
  themes = ['풍경', '인물', '정물', '동물', '추상', '팝아트', '오브제'],
  defaultSelectedTheme = '풍경',
}: ThemeChooserProps) => {
  const [selectedTheme, setSelectedTheme] =
    useState<string>(defaultSelectedTheme);

  const handleThemeClick = (theme: string) => {
    setSelectedTheme(theme);
  };

  return (
    <Wrapper>
      {themes.map((theme) => (
        <ThemeButton
          key={theme}
          $isActive={selectedTheme === theme}
          onClick={() => handleThemeClick(theme)}
        >
          {theme}
        </ThemeButton>
      ))}
    </Wrapper>
  );
};

export default ThemeChooser;
