import { useState } from 'react';
import ArtWorks from './artWorks';
import AuctioningWorks from './auctioningWorks';
import Exhibitions from './exhibitions';

import { MyPageSideBar } from '@/components/common/MyPageSideBar';
import { AccountSettingWrapper, TabBoxWrapper } from './index.style';

export const AccountSettings = () => {
  const [selectedTab, setSelectedTab] = useState<
    '작품' | '경매 중인 작품' | '진행 중인 전시'
  >('작품');

  // 선택된 메뉴에 따른 컴포넌트 렌더링 함수
  const renderSelectedTab = () => {
    switch (selectedTab) {
      case '작품':
        return <ArtWorks />;
      case '경매 중인 작품':
        return <AuctioningWorks />;
      case '진행 중인 전시':
        return <Exhibitions />;
      default:
        return null;
    }
  };

  return (
    <AccountSettingWrapper>
      {/* 메뉴 선택 컴포넌트 */}
      <TabBoxWrapper>
        <MyPageSideBar
          menuItems={['작품', '경매 중인 작품', '진행 중인 전시']}
          activeTab={selectedTab}
          setActiveTab={setSelectedTab}
        />
      </TabBoxWrapper>

      {/* 선택된 메뉴에 따라 컴포넌트 변경 */}
      {renderSelectedTab()}
    </AccountSettingWrapper>
  );
};

export default AccountSettings;
