import { useState } from 'react';
import { Container, MenuWrapper, Menu } from './index.style';

const category = ['작품소개', '작가소개', '다른작품'];

export const ArtworkDetailCategory = () => {
  const [activeTab, setActiveTab] = useState<string>('작품소개');
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
