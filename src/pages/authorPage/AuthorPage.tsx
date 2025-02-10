import { useState } from 'react';
import { MenuChooser } from './components/menuChooser';
import { PageLayout } from '@/components/common/PageLayout';

import MenuMyPage from './components/menuMyPage';
import ManagingProfiles from './components/managingProfiles';
import AccountSettings from './components/accountSettings';
import PurchasedWorks from './components/purchasedWorks';

import { MenuWrapper, MyPageWrapper } from './AuthorPage.style';

export default function AuthorPage() {
  const [selectedMenu, setSelectedMenu] = useState<
    '마이페이지' | '프로필 관리' | '계정설정' | '작품/전시 관리'
  >('마이페이지');

  // 선택된 메뉴에 따른 컴포넌트 렌더링 함수
  const renderSelectedMenu = () => {
    switch (selectedMenu) {
      case '마이페이지':
        return <MenuMyPage />;
      case '프로필 관리':
        return <ManagingProfiles />;
      case '계정설정':
        return <AccountSettings />;
      case '작품/전시 관리':
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
          menus={['마이페이지', '프로필 관리', '계정설정', '작품/전시 관리']}
          defaultSelectedMenu={selectedMenu}
          onSelectMenu={setSelectedMenu}
        />
      </MenuWrapper>

      {/* 선택된 메뉴에 따라 컴포넌트 변경 */}
      <MyPageWrapper>{renderSelectedMenu()}</MyPageWrapper>
    </PageLayout>
  );
}
