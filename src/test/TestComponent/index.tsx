import { Artwork } from "@components/common/ArtWork";
import {
  ComponentSection,
  SubTitle,
  TestCase,
  TestContainer,
  TestHeader,
} from "@/test/TestComponent/index.style.ts";
import { Header } from "@components/common/Header/index.style.ts";
import { HeaderContent } from "@components/common/Header";
import { AuthorDetailCategory } from "@/components/common/AuthorDetailCategory";
import { CommonInput } from "@/components/common/CommonInput";

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

  const sampleInputData = {
    placeholder: "작품 제목을 입력해주세요",
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
    </TestContainer>
  );
};

export default TestComponents;
