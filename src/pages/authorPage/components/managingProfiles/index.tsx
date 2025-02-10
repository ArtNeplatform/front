import { useState } from 'react';
import { AllInfo } from './allInfo';
import { Introduce } from './introduce';
import { MyInformation } from './myInformation';

import { AccountSettingWrapper, TabBoxWrapper } from './index.style';
import { MyPageSideBar } from '@/components/common/MyPageSideBar';

export const ManagingProfiles = () => {
  const [selectedTab, setSelectedTab] = useState<
    '전체보기' | '자기 소개' | '자기 정보'
  >('전체보기');

  // 선택된 메뉴에 따른 컴포넌트 렌더링 함수
  const renderSelectedTab = () => {
    switch (selectedTab) {
      case '전체보기':
        return <AllInfo />;
      case '자기 소개':
        return <Introduce />;
      case '자기 정보':
        return <MyInformation />;
      default:
        return null;
    }
  };

  return (
    <AccountSettingWrapper>
      {/* 메뉴 선택 컴포넌트 */}
      <TabBoxWrapper>
        <MyPageSideBar
          menuItems={['전체보기', '자기 소개', '자기 정보']}
          activeTab={selectedTab}
          setActiveTab={setSelectedTab}
        />
      </TabBoxWrapper>

      {/* 선택된 메뉴에 따라 컴포넌트 변경 */}
      {renderSelectedTab()}
    </AccountSettingWrapper>
  );
};

export default ManagingProfiles;
