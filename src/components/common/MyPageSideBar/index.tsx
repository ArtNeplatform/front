import { Container, MenuWrapper, Menu } from './index.style';

interface MenuProps<T extends string> {
  menuItems: T[];
  activeTab: T;
  setActiveTab: (item: T) => void;
}

/**
 * 앱 전반적으로 사용되는 MyPageSideBar입니다.
 * 컴포넌트 타입을 제네릭으로 설정해 확장성과 타입 안전성을 높였습니다.
 * @param {string[]} menuItems - 사이드바 메뉴 리스트
 * @param {string} activeTab - 활성화된 탭(메뉴)
 * @param {(item: string) => void} setActiveTab - 선택된 메뉴를 부모 컴포넌트에 전달
 * @author 이하늘, 노찬영
 */

export const MyPageSideBar = <T extends string>({
  menuItems,
  activeTab,
  setActiveTab,
}: MenuProps<T>) => {
  return (
    <Container>
      <MenuWrapper>
        {menuItems.map((item) => (
          <Menu
            key={item}
            $isActive={activeTab === item}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </Menu>
        ))}
      </MenuWrapper>
    </Container>
  );
};
