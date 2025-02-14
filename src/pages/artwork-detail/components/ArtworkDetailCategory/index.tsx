import { useState } from 'react';
import { Container, MenuWrapper, Menu } from './index.style';

const category = ['작품소개', '작가소개', '다른작품'] as const;

interface ArtworkDetailCategoryProps {
  scrollToSection: (section: (typeof category)[number]) => void;
}

export const ArtworkDetailCategory = ({
  scrollToSection,
}: ArtworkDetailCategoryProps) => {
  const [activeTab, setActiveTab] =
    useState<(typeof category)[number]>('작품소개');

  return (
    <Container>
      <MenuWrapper>
        {category.map((tab) => (
          <Menu
            key={tab}
            isActive={activeTab === tab}
            onClick={() => {
              setActiveTab(tab);
              scrollToSection(tab);
            }}
          >
            {tab}
          </Menu>
        ))}
      </MenuWrapper>
    </Container>
  );
};
