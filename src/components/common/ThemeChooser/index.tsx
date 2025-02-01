import { useState } from 'react';
import { ThemeButton, Wrapper } from './index.style';

const themes = ['풍경', '인물', '정물', '동물', '추상', '팝아트', '오브제'];

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
