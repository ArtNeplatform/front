import { useState } from 'react';
import { BasicInfo } from './basicInfo';
import { Account } from './account';
import { Withdraw } from './withdraw';

import { MyPageSideBar } from '@/components/common/MyPageSideBar';

import { AccountSettingWrapper, TabBoxWrapper } from './index.style';

export const AccountSettings = () => {
  const [selectedTab, setSelectedTab] = useState<
    '기본정보 관리' | '계좌 관리' | '회원 탈퇴'
  >('기본정보 관리');

  // 선택된 메뉴에 따른 컴포넌트 렌더링 함수
  const renderSelectedTab = () => {
    switch (selectedTab) {
      case '기본정보 관리':
        return <BasicInfo />;
      case '계좌 관리':
        return <Account />;
      case '회원 탈퇴':
        return <Withdraw />;
      default:
        return null;
    }
  };

  return (
    <AccountSettingWrapper>
      {/* 메뉴 선택 컴포넌트 */}
      <TabBoxWrapper>
        <MyPageSideBar
          menuItems={['기본정보 관리', '계좌 관리', '회원 탈퇴']}
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
