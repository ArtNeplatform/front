import { Artwork } from "@components/common/ArtWork";
import { ComponentSection, SubTitle, TestCase, TestContainer, TestHeader } from "@/test/TestComponent/index.style.ts";
import { Header } from "@components/common/Header/index.style.ts";
import { HeaderContent } from "@components/common/Header";
import { RectangleCheckBox } from "@components/common/RectangleCheckBox";
import { CircleCheckBox } from "@components/common/CircleCheckBox";
import { CommonButton } from "@/components/common/CommonButton";
import { SizeFilterModal } from "@/components/common/SizeFilterModal";

const TestComponents = () => {
  const sampleData = {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqV-EpDA9QlYzrKkI-xVr6FFolVlQaqZQQbw&s",
    artist: "Sample Artist",
    title: "Sample Title",
    artworkWidth: 100,
    artworkHeight: 100,
    price: 1000000,
  };

  const sampleClose = () => {
    alert("닫기 버튼이 클릭되었습니다.");
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

      <SubTitle>RectangleCheckBox</SubTitle>
      <RectangleCheckBox id="1" />

      <SubTitle>CircleCheckBox</SubTitle>
      <CircleCheckBox id="2" />

      <SubTitle>CommonButton</SubTitle>
      <div style={{ display: "flex", gap: "20px" }}>
        <CommonButton onClick={sampleClose} text="확인" color="#fff" background="#111" border="#111" />
        <CommonButton onClick={sampleClose} text="취소" color="#111" background="#fff" border="#E5E5EC" />
      </div>

      <SubTitle>SizeFilterModal</SubTitle>
      <SizeFilterModal />
    </TestContainer>
  );
};

export default TestComponents;
