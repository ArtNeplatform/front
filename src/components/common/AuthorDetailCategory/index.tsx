import { useState } from "react";
import { Container, MenuWrapper, Menu } from "./index.style";

const category = ["작가소개", "작품", "전시"];

/**
 * 앱 전반적으로 사용되는 AuthorDetailCategory입니다.
 * @author 이하늘
 */
export const AuthorDetailCategory = () => {
  const [activeTab, setActiveTab] = useState<string>("작가소개");
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
