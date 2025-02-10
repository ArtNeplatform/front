import { useState } from 'react';
import { BasicInfo } from './basicInfo';
import { TabBox } from './tabBox';
import { Withdraw } from './withdraw';
import { AccountSettingWrapper, TabBoxWrapper } from './index.style';

export const AccountSettings = () => {
  const [selectedTab, setSelectedTab] = useState<'기본정보 관리' | '회원 탈퇴'>(
    '기본정보 관리'
  );

  // 선택된 메뉴에 따른 컴포넌트 렌더링 함수
  const renderSelectedTab = () => {
    switch (selectedTab) {
      case '기본정보 관리':
        return <BasicInfo />;
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
        <TabBox
          tabs={['기본정보 관리', '회원 탈퇴']}
          selectedTab={selectedTab}
          onSelectTab={setSelectedTab}
        />
      </TabBoxWrapper>

      {/* 선택된 메뉴에 따라 컴포넌트 변경 */}
      {renderSelectedTab()}
    </AccountSettingWrapper>
  );
};

export default AccountSettings;
