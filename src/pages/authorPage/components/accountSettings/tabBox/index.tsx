import { TabBoxContainer, TabBoxItem } from './index.style';

interface TabBoxProps<T extends string> {
  tabs: T[];
  selectedTab: T;
  onSelectTab: (tab: T) => void;
}

export const TabBox = <T extends string>({
  tabs,
  selectedTab,
  onSelectTab,
}: TabBoxProps<T>) => {
  return (
    <TabBoxContainer>
      {tabs.map((tab) => (
        <TabBoxItem
          key={tab}
          $isActive={selectedTab === tab}
          onClick={() => onSelectTab(tab)}
        >
          {tab}
        </TabBoxItem>
      ))}
    </TabBoxContainer>
  );
};
