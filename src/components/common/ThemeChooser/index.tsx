import { useState } from 'react';
import { ThemeButton, Wrapper } from './index.style';

const themes = ['풍경', '인물', '정물', '동물', '추상', '팝아트', '오브제'];

/**
 * 테마 선택 컴포넌트입니다.
 * 작품의 테마를 선택할 수 있고 기본값은 '풍경' 입니다.
 * @author 노찬영
 */

export const ThemeChooser = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>('풍경');

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
