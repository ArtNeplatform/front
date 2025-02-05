import { useState } from 'react';
import { ThemeButton, Wrapper } from './index.style';

interface ThemeChooserProps {
  themes?: string[];
}

/**
 * 테마 선택 컴포넌트입니다.
 * 부모 컴포넌트에서 테마 목록을 전달받아 테마 버튼을 렌더링합니다.
 * 테마 버튼을 클릭하면 해당 테마가 선택됩니다.
 * @param themes 테마 목록 (기본값: ['풍경', '인물', '정물', '동물', '추상', '팝아트', '오브제'])
 * @author ???, 홍규진
 */
const ThemeChooser = ({
  themes = ['풍경', '인물', '정물', '동물', '추상', '팝아트', '오브제'],
}: ThemeChooserProps) => {
  const [selectedTheme, setSelectedTheme] = useState<string>(themes[0]);

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
