import { useState } from 'react';
import { ThemeButton, Wrapper } from './index.style';

interface ThemeChooserProps {
  themes?: string[];
  selectedTheme?: string;
  onThemeChange?: (theme: string) => void;
}

/**
 * 테마 선택 컴포넌트입니다.
 * 부모 컴포넌트에서 테마 목록과 선택된 테마 값을 전달받아 테마 버튼을 렌더링합니다.
 * 테마 버튼을 클릭하면 해당 테마가 선택되고, 만약 onThemeChange가 제공되면 부모에게 값 변경을 알려줍니다.
 * @param themes 테마 목록 (기본값: ['풍경', '인물', '정물', '동물', '추상', '팝아트', '오브제'])
 */
const ThemeChooser = ({
  themes = ['풍경', '인물', '정물', '동물', '추상', '팝아트', '오브제'],
  selectedTheme,
  onThemeChange,
}: ThemeChooserProps) => {
  // 부모가 제어하지 않을 경우 내부 상태로 관리
  const [internalTheme, setInternalTheme] = useState<string>(themes[0]);
  const currentTheme =
    selectedTheme !== undefined ? selectedTheme : internalTheme;

  const handleThemeClick = (theme: string) => {
    if (onThemeChange) {
      onThemeChange(theme);
    } else {
      setInternalTheme(theme);
    }
  };

  return (
    <Wrapper>
      {themes.map((theme) => (
        <ThemeButton
          key={theme}
          $isActive={currentTheme === theme}
          onClick={() => handleThemeClick(theme)}
        >
          {theme}
        </ThemeButton>
      ))}
    </Wrapper>
  );
};

export default ThemeChooser;
