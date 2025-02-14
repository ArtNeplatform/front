import { PageLayout } from '@/components/common/PageLayout';
import { AuthorContainer, Banner, Content } from './index.style';
import AuthorProfile from '@/components/common/AuthorProfile';
import { AuthorDetailCategory } from '@/components/common/AuthorDetailCategory';
import { useState } from 'react';
import { AuthorExhibition } from './components/AuthorExhibition';
import { AuthorInfo } from './components/AuthorInfo';
import { AuthorArtwork } from './components/AuthorArtwork';
import { useGetAuthorDetail } from './hooks/useGetAuthorDetail';
import { useParams } from 'react-router-dom';
import { PagingButtons } from '@/components/common/PagingButtons';

export const AuthorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const authorId = id ? parseInt(id, 10) : 0;
  const [activeTab, setActiveTab] = useState<string>('작가소개');

  const [artworkPage, setArtworkPage] = useState<number>(1);
  const [artworkLimit] = useState<number>(10);
  const [exhibitionPage, setExhibitionPage] = useState<number>(1);
  const [exhibitionLimit] = useState<number>(4);

  const { data: authorData, isLoading } = useGetAuthorDetail({
    authorId: Number(authorId),
    artworkPage,
    artworkLimit,
    exhibitionPage,
    exhibitionLimit,
  });
  console.log(authorData);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (!authorData) {
    return <div>작가 정보를 불러올 수 없습니다.</div>;
  }

  // 작품 페이지 수 계산
  const totalArtworkPage = Math.ceil(authorData.artworks.total / artworkLimit);
  // 전시 페이지 수 계산
  const totalExhibitionPage = Math.ceil(
    authorData.exhibitions.total / exhibitionLimit
  );

  // const sampleProfileData = {
  //   AuthorName: '홍길동',
  //   artworkCount: 99,
  //   exhibitionCount: 99,
  //   profileImage:
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqV-EpDA9QlYzrKkI-xVr6FFolVlQaqZQQbw&s',
  // };
  // const dummyData = {
  //   experience: [
  //     {
  //       date: '2019.03 ~ 2019.04',
  //       description: '국제 교류전 "아시아의 시선" (홍콩 아트센터)',
  //     },
  //     {
  //       date: '2020.07 ~ 2020.08',
  //       description:
  //         '프로젝트 "도시의 흔적" (서울시 문화재단 지원, 공공미술 프로젝트)',
  //     },
  //     {
  //       date: '2021.09 ~ 2021.10',
  //       description: '단체전 "현대와 자연의 교차" (부산 현대미술관)',
  //     },
  //     {
  //       date: '2022.04 ~ 2022.05',
  //       description: '개인전 "빛과 그림자" (서울 아트스페이스 갤러리)',
  //     },
  //   ],
  //   education: [
  //     {
  //       school: '홍익대학교',
  //       major: '시각디자인학과',
  //       status: '졸업',
  //       start_date: '2015.03',
  //       end_date: '2019.02',
  //     },
  //     {
  //       school: '서울대학교 대학원',
  //       major: '미술학과',
  //       status: '재학',
  //       start_date: '2021.03',
  //       end_date: '2025.02',
  //     },
  //   ],
  //   award: [
  //     {
  //       date: '2019.10',
  //       description: '서울 국제 아트페어 청년작가상 수상',
  //     },
  //     {
  //       date: '2020.05',
  //       description: '제37회 대한민국 미술대전 특별상 수상',
  //     },
  //     {
  //       date: '2021.03',
  //       description: '현대미술협회 주최 신인작가상 수상',
  //     },
  //     {
  //       date: '2022.11',
  //       description: '국립현대미술관 주관 창작지원 프로그램 선정',
  //     },
  //   ],
  // };
  return (
    <>
      <PageLayout>
        <Banner
          src={
            authorData.introduction_image_url
              ? authorData.introduction_image_url
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqV-EpDA9QlYzrKkI-xVr6FFolVlQaqZQQbw&s'
          }
        />
        <AuthorContainer>
          <AuthorProfile
            authorName={authorData.author_name}
            artworkCount={authorData.artwork_count}
            exhibitionCount={authorData.exhibition_count}
            profileImage={authorData.author_image_url}
          ></AuthorProfile>
          <AuthorDetailCategory
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <Content>
            {activeTab === '작가소개' && (
              <AuthorInfo
                description={authorData.description}
                experience={authorData.experience}
                education={authorData.education}
                award={authorData.award}
              />
            )}

            {activeTab === '작품' &&
              (authorData?.artworks && authorData?.artworks.total > 0 ? (
                <>
                  <AuthorArtwork artworks={authorData.artworks} />
                  <PagingButtons
                    totalPage={totalArtworkPage} // 작품 총 페이지 수
                    page={artworkPage}
                    setPage={setArtworkPage}
                  />
                </>
              ) : (
                <div>아직 등록된 작품이 없습니다.</div>
              ))}

            {activeTab === '전시' &&
              (authorData?.exhibitions.items.length !== 0 &&
              authorData?.exhibitions.total > 0 ? (
                <>
                  <AuthorExhibition exhibitions={authorData.exhibitions} />
                  <PagingButtons
                    totalPage={totalExhibitionPage} // 전시 총 페이지 수
                    page={exhibitionPage}
                    setPage={setExhibitionPage}
                  />
                </>
              ) : (
                <div>아직 등록된 전시가 없습니다.</div>
              ))}
          </Content>
        </AuthorContainer>
      </PageLayout>
    </>
  );
};
