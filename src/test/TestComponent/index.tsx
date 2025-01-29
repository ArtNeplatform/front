import { Artwork } from "@components/common/ArtWork";
import {
  ComponentSection,
  Spacing,
  SubTitle,
  TestCase,
  TestContainer,
  TestHeader,
} from "@/test/TestComponent/index.style.ts";
import { HeaderContent } from "@components/common/Header";
import { ThemeChooser } from "@/components/common/ThemeChooser";
import SortingTextButton from "@/components/common/SortingTextButton";
import AuthorProfile from "@/components/common/AuthorProfile";
import HoveringModal from "@/components/common/HoveringModal";

const TestComponents = () => {
  const sampleData = {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqV-EpDA9QlYzrKkI-xVr6FFolVlQaqZQQbw&s",
    artist: "Sample Artist",
    title: "Sample Title",
    artworkWidth: 100,
    artworkHeight: 100,
    price: 1000000,
  };

  const sampleProfileData = {
    AuthorName: "Sample Author",
    artworkCount: 99,
    exhibitionCount: 99,
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqV-EpDA9QlYzrKkI-xVr6FFolVlQaqZQQbw&s",
  };

  const samplePriceData = {
    startPrice: 99999999,
    currentPrice: 99999999,
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
    </TestContainer>
  );
};

export default TestComponents;
