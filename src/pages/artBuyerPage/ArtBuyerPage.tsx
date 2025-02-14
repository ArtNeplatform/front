import { useState } from 'react';
import { MenuChooser } from './components/menuChooser';
import { PageLayout } from '@/components/common/PageLayout';

import { MenuMyPage } from './components/menuMyPage';
import AccountSettings from './components/accountSettings';
import PurchasedWorks from './components/purchasedWorks';

import { MyPageWrapper, MenuWrapper } from './ArtBuyerPage.style';

export default function ArtBuyerPage() {
  const [selectedMenu, setSelectedMenu] = useState<
    '마이페이지' | '계정설정' | '구매 작품'
  >('마이페이지');

  // 선택된 메뉴에 따른 컴포넌트 렌더링 함수
  const renderSelectedMenu = () => {
    switch (selectedMenu) {
      case '마이페이지':
        return <MenuMyPage setSelectedMenu={setSelectedMenu} />;
      case '계정설정':
        return <AccountSettings />;
      case '구매 작품':
        return <PurchasedWorks />;
      default:
        return null;
    }
  };

  return (
    <PageLayout>
      {/* 메뉴 선택 컴포넌트 */}
      <MenuWrapper>
        <MenuChooser
          menus={['마이페이지', '계정설정', '구매 작품']}
          selectedMenu={selectedMenu}
          onSelectMenu={setSelectedMenu}
        />
      </MenuWrapper>

      {/* 선택된 메뉴에 따라 컴포넌트 변경 */}
      <MyPageWrapper>{renderSelectedMenu()}</MyPageWrapper>
    </PageLayout>
  );
}