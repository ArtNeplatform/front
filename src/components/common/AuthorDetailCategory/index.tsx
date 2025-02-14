import { Container, MenuWrapper, Menu } from './index.style';

/**
 * 앱 전반적으로 사용되는 AuthorDetailCategory입니다.
 * @author 이하늘
 */

const category = ['작가소개', '작품', '전시'];

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const AuthorDetailCategory = ({ activeTab, setActiveTab }: Props) => {
  return (
    <Container>
      <MenuWrapper>
        {category.map((tab) => (
          <Menu
            key={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Menu>
        ))}
      </MenuWrapper>
    </Container>
  );
};
