import { useState } from 'react';
import { Wrapper, MenuButton } from './index.style';

interface MenuChooserProps<T extends string> {
  menus: T[];
  defaultSelectedMenu?: T;
  onSelectMenu: (menu: T) => void;
}

/**
 * 마이페이지 내 메뉴 선택 컴포넌트입니다. 기본 선택 메뉴는 '마이페이지' 입니다.
 * `menus`를 props로 받아 다른 페이지에서도 활용 가능하도록 작성하였습니다.
 * 컴포넌트 타입을 제네릭으로 설정해 확장성과 타입 안전성을 높였습니다.
 * @param {string[]} menus - 메뉴 목록
 * @param {string} [defaultSelectedMenu] - 기본 선택된 메뉴 (선택 사항)
 * @param {(menu: string) => void} onSelectMenu - 선택된 메뉴를 부모 컴포넌트에 전달하는 콜백 함수
 * @returns {JSX.Element} 메뉴 버튼 리스트를 렌더링하는 컴포넌트
 * 
 * @example <MenuChooser
          menus={['마이페이지', '프로필 관리', '계정설정', '작품/전시 관리']}
          defaultSelectedMenu={selectedMenu}
          onSelectMenu={setSelectedMenu}
        />
 * @author 노찬영
 */

export const MenuChooser = <T extends string>({
  menus,
  defaultSelectedMenu,
  onSelectMenu,
}: MenuChooserProps<T>) => {
  const [selectedMenu, setSelectedMenu] = useState<T>(
    defaultSelectedMenu ?? menus[0]
  );

  const handleMenuClick = (menu: T) => {
    setSelectedMenu(menu);
    onSelectMenu(menu); // 부모 컴포넌트에 선택된 메뉴 전달
  };

  return (
    <Wrapper>
      {menus.map((menu) => (
        <MenuButton
          key={menu}
          $isActive={selectedMenu === menu}
          onClick={() => handleMenuClick(menu)}
        >
          {menu}
        </MenuButton>
      ))}
    </Wrapper>
  );
};
