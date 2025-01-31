import { useState } from "react";
import { Container, MenuWrapper, Menu } from "./index.style.ts";

const menuItems = ["작품", "경매 중인 작품", "진행 중인 전시"];
export const MyPageSideBar = () => {
  const [activeTab, setActiveTab] = useState<string>("작품");

  return (
    <Container>
      <MenuWrapper>
        {menuItems.map((item) => (
          <Menu
            key={item}
            isActive={activeTab === item}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </Menu>
        ))}
      </MenuWrapper>
    </Container>
  );
};
