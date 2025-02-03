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
} from "@/test/TestComponent/index.style.ts";

import { Header } from "@components/common/Header/index.style.ts";
import { HeaderContent } from "@components/common/Header";
import { AuthorDetailCategory } from "@/components/common/AuthorDetailCategory";
import { CommonInput } from "@/components/common/CommonInput";
import { MyPageSideBar } from "@/components/common/MyPageSideBar";
import { PagingButtons } from "@/components/common/PagingButtons";
import { useState } from "react";
import { HeaderContent } from '@components/common/Header';
import { ThemeChooser } from '@/components/common/ThemeChooser';
import SortingTextButton from '@/components/common/SortingTextButton';
import AuthorProfile from '@/components/common/AuthorProfile';
import HoveringModal from '@/components/common/HoveringModal';
import { RectangleCheckBox } from '@components/common/RectangleCheckBox';
import { CircleCheckBox } from '@components/common/CircleCheckBox';
import { CommonButton } from '@/components/common/CommonButton';
import { FilterModal } from '@/components/common/FilterModal';

const TestComponents = () => {
  const sampleData = {
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
    placeholder: "작품 제목을 입력해주세요",
  };
  const [page, setPage] = useState(1);
  const sampleClose = () => {
    alert('닫기 버튼이 클릭되었습니다.');
  };

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
          <HeaderContent />
        </TestCase>
      </ComponentSection>

      <SubTitle>AuthorDetailCategory</SubTitle>
      <AuthorDetailCategory />
      <SubTitle>CommonInput</SubTitle>
      <CommonInput {...sampleInputData} />
      <SubTitle>MyPageSideBar</SubTitle>
      <MyPageSideBar />
      <SubTitle>PagingButtons</SubTitle>
      <PagingButtons totalPage={21} page={page} setPage={setPage} />

      <Spacing />
      <SubTitle>Sorting</SubTitle>
      <SortingTextButton />
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
          <RectangleCheckBox id="1" />
        </div>

        <div>
          <SubTitle>CircleCheckBox</SubTitle>
          <CircleCheckBox id="2" />
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
          border="#E5E5EC"
        />
        <CommonButton
          onClick={sampleClose}
          text="확인"
          color="#fff"
          background="#111"
          border="#111"
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
              { id: '200', label: '풍경' },
              { id: '201', label: '인물' },
              { id: '202', label: '정물' },
              { id: '203', label: '동물' },
              { id: '204', label: '추상' },
              { id: '205', label: '팝아트' },
              { id: '206', label: '오브제' },
            ]}
            onCancel={sampleClose}
            onConfirm={sampleClose}
          />
        </AutoTestCase>
        <AutoTestCase>
          <SubTitle>Size Case</SubTitle>
          <FilterModal
            checkboxes={[
              { id: '10', label: '1~10호' },
              { id: '30', label: '~30호' },
              { id: '60', label: '~60호' },
              { id: '80', label: '~80호' },
              { id: '100', label: '~100호' },
              { id: '120', label: '100호 +' },
            ]}
            onCancel={sampleClose}
            onConfirm={sampleClose}
          />
        </AutoTestCase>
        <AutoTestCase>
          <SubTitle>Type Case</SubTitle>
          <FilterModal
            checkboxes={[
              { id: '300', label: '정방향' },
              { id: '301', label: '가로형' },
              { id: '302', label: '세로형' },
              { id: '303', label: '원형' },
              { id: '304', label: '셋트' },
              { id: '305', label: '입체/설치' },
              { id: '306', label: '미디어' },
            ]}
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
