import { PageLayout } from '@/components/common/PageLayout';
import { AuthorContainer, Banner, Content } from './index.style';
import AuthorProfile from '@/components/common/AuthorProfile';
import { AuthorDetailCategory } from '@/components/common/AuthorDetailCategory';
import { useState } from 'react';
import { AuthorExhibition } from './components/AuthorExhibition';
import { AuthorInfo } from './components/AuthorInfo';
import { AuthorArtwork } from './components/AuthorArtwork';

export const AuthorDetail = () => {
  const [activeTab, setActiveTab] = useState<string>('작가소개');
  const sampleProfileData = {
    AuthorName: '홍길동',
    artworkCount: 99,
    exhibitionCount: 99,
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqV-EpDA9QlYzrKkI-xVr6FFolVlQaqZQQbw&s',
  };
  const dummyData = {
    experience: [
      {
        date: '2019.03 ~ 2019.04',
        description: '국제 교류전 "아시아의 시선" (홍콩 아트센터)',
      },
      {
        date: '2020.07 ~ 2020.08',
        description:
          '프로젝트 "도시의 흔적" (서울시 문화재단 지원, 공공미술 프로젝트)',
      },
      {
        date: '2021.09 ~ 2021.10',
        description: '단체전 "현대와 자연의 교차" (부산 현대미술관)',
      },
      {
        date: '2022.04 ~ 2022.05',
        description: '개인전 "빛과 그림자" (서울 아트스페이스 갤러리)',
      },
    ],
    education: [
      {
        school: '홍익대학교',
        major: '시각디자인학과',
        status: '졸업',
        start_date: '2015.03',
        end_date: '2019.02',
      },
      {
        school: '서울대학교 대학원',
        major: '미술학과',
        status: '재학',
        start_date: '2021.03',
        end_date: '2025.02',
      },
    ],
    award: [
      {
        date: '2019.10',
        description: '서울 국제 아트페어 청년작가상 수상',
      },
      {
        date: '2020.05',
        description: '제37회 대한민국 미술대전 특별상 수상',
      },
      {
        date: '2021.03',
        description: '현대미술협회 주최 신인작가상 수상',
      },
      {
        date: '2022.11',
        description: '국립현대미술관 주관 창작지원 프로그램 선정',
      },
    ],
  };
  return (
    <>
      <PageLayout>
        <Banner src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqV-EpDA9QlYzrKkI-xVr6FFolVlQaqZQQbw&s" />
        <AuthorContainer>
          <AuthorProfile {...sampleProfileData}></AuthorProfile>
          <AuthorDetailCategory
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <Content>
            {activeTab === '작가소개' && <AuthorInfo result={dummyData} />}
            {activeTab === '작품' && <AuthorArtwork />}
            {activeTab === '전시' && <AuthorExhibition />}
          </Content>
        </AuthorContainer>
      </PageLayout>
    </>
  );
};
