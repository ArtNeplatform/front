import { Artwork } from '@components/common/ArtWork';
import {
  ComponentSection,
  Spacing,
  SubTitle,
  AutoTestCase,
  TestCase,
  TestContainer,
  TestHeader,
  FlexSpacing,
} from '@/test/TestComponent/index.style.ts';

import { HeaderContent } from '@components/common/Header';
import { AuthorDetailCategory } from '@/components/common/AuthorDetailCategory';
import { CommonInput } from '@/components/common/CommonInput';
import { MyPageSideBar } from '@/components/common/MyPageSideBar';
import { PagingButtons } from '@/components/common/PagingButtons';
import { useState } from 'react';
import ThemeChooser from '@/components/common/ThemeChooser';
import SortingTextButton from '@/components/common/SortingTextButton';
import AuthorProfile from '@/components/common/AuthorProfile';
import HoveringModal from '@/components/common/HoveringModal';
import { RectangleCheckBox } from '@components/common/RectangleCheckBox';
import { CircleCheckBox } from '@components/common/CircleCheckBox';
import { CommonButton } from '@/components/common/CommonButton';
import { FilterModal } from '@/components/common/FilterModal';

const TestComponents = () => {
  const sampleData = {
    artworkId: 1,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqV-EpDA9QlYzrKkI-xVr6FFolVlQaqZQQbw&s',
    artist: 'Sample Artist',
    title: 'Sample Title',
    artworkWidth: 100,
    artworkHeight: 100,
    price: 1000000,
  };

  const sampleProfileData = {
    AuthorName: '홍길동',
    artworkCount: 99,
    exhibitionCount: 99,
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqV-EpDA9QlYzrKkI-xVr6FFolVlQaqZQQbw&s',
  };

  const samplePriceData = {
    startPrice: 99999999,
    currentPrice: 99999999,
  };

  const sampleInputData = {
    placeholder: '작품 제목을 입력해주세요',
  };
  const [page, setPage] = useState(1);
  const sampleClose = () => {
    alert('닫기 버튼이 클릭되었습니다.');
  };

  const [sortingType, setSortingType] = useState<
    '이름순' | '최신순' | '인기순'
  >('이름순');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedForms, setSelectedForms] = useState<string[]>([]);
  const [selectedTab, setSelectedTab] = useState<'기본정보 관리' | '회원 탈퇴'>(
    '기본정보 관리'
  );

  return (
    <TestContainer>
      <TestHeader>공통 컴포넌트 테스트 장소</TestHeader>

      <ComponentSection>
        <TestCase>
          <SubTitle>Default Case</SubTitle>
          <Artwork {...sampleData} />
        </TestCase>

        <TestCase>
          <SubTitle>With Hover Disabled</SubTitle>
          <Artwork {...sampleData} hoverable={false} />
        </TestCase>
        <TestCase>
          <SubTitle>Lazy Loading Image</SubTitle>
          <Artwork {...sampleData} variant="lazy" />
        </TestCase>
        <TestCase>
          <SubTitle>Header(non-loggedIn)</SubTitle>
          <HeaderContent
            isLoggedIn={false}
            handleLogout={() => {}}
            handleLogin={() => {}}
            handleLinkMypage={() => {}}
          />
        </TestCase>
      </ComponentSection>

      <SubTitle>AuthorDetailCategory</SubTitle>
      <AuthorDetailCategory />
      <SubTitle>CommonInput</SubTitle>
      <CommonInput {...sampleInputData} />
      <SubTitle>MyPageSideBar</SubTitle>
      <MyPageSideBar
        menuItems={['기본정보 관리', '회원 탈퇴']}
        activeTab={selectedTab}
        setActiveTab={setSelectedTab}
      />
      <SubTitle>PagingButtons</SubTitle>
      <PagingButtons totalPage={21} page={page} setPage={setPage} />

      <Spacing />
      <SubTitle>Sorting</SubTitle>
      <SortingTextButton
        selectedSorting={sortingType}
        onSortingSelect={setSortingType}
      />
      <Spacing />

      <Spacing />
      <SubTitle>Theme Chooser</SubTitle>
      <ThemeChooser />
      <Spacing />

      <Spacing />
      <SubTitle>Author Profile</SubTitle>
      <AuthorProfile {...sampleProfileData} />
      <Spacing />

      <Spacing />
      <SubTitle>Price Hovering Modal</SubTitle>
      <HoveringModal isOpen={true} {...samplePriceData} />
      <Spacing />

      <Spacing />
      <FlexSpacing>
        <div>
          <SubTitle>RectangleCheckBox</SubTitle>
          <RectangleCheckBox id="1" onChange={() => {}} checked={false} />
        </div>

        <div>
          <SubTitle>CircleCheckBox</SubTitle>
          <CircleCheckBox id="2" onChange={() => {}} checked={false} />
        </div>
      </FlexSpacing>
      <Spacing />

      <Spacing />
      <SubTitle>CommonButton</SubTitle>
      <div style={{ display: 'flex', gap: '20px' }}>
        <CommonButton
          onClick={sampleClose}
          text="취소"
          color="#111"
          background="#fff"
          borderColor="#E5E5EC"
        />
        <CommonButton
          onClick={sampleClose}
          text="확인"
          color="#fff"
          background="#111"
          borderColor="#111"
        />
      </div>
      <Spacing />

      <Spacing />
      <SubTitle>FilterModal</SubTitle>
      <ComponentSection>
        <AutoTestCase>
          <SubTitle>Theme Case</SubTitle>
          <FilterModal
            checkboxes={[
              { id: '풍경', label: '풍경' },
              { id: '인물', label: '인물' },
              { id: '정물', label: '정물' },
              { id: '동물', label: '동물' },
              { id: '추상', label: '추상' },
              { id: '팝아트', label: '팝아트' },
              { id: '오브제', label: '오브제' },
            ]}
            selectedFilters={selectedThemes}
            onCancel={sampleClose}
            onConfirm={sampleClose}
          />
        </AutoTestCase>
        <AutoTestCase>
          <SubTitle>Size Case</SubTitle>
          <FilterModal
            checkboxes={[
              { id: '1~10호', label: '1~10호' },
              { id: '~30호', label: '~30호' },
              { id: '~60호', label: '~60호' },
              { id: '~80호', label: '~80호' },
              { id: '~100호', label: '~100호' },
              { id: '100호 +', label: '100호 +' },
            ]}
            selectedFilters={selectedSizes}
            onCancel={sampleClose}
            onConfirm={sampleClose}
          />
        </AutoTestCase>
        <AutoTestCase>
          <SubTitle>Type Case</SubTitle>
          <FilterModal
            checkboxes={[
              { id: '정방향', label: '정방향' },
              { id: '가로형', label: '가로형' },
              { id: '세로형', label: '세로형' },
              { id: '원형', label: '원형' },
              { id: '셋트', label: '셋트' },
              { id: '입체/설치', label: '입체/설치' },
              { id: '미디어', label: '미디어' },
            ]}
            selectedFilters={selectedForms}
            onCancel={sampleClose}
            onConfirm={sampleClose}
          />
        </AutoTestCase>
      </ComponentSection>
      <Spacing />
    </TestContainer>
  );
};

export default TestComponents;
