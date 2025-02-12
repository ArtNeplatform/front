import {
  IntroduceContainer,
  FormContainer,
  SectionTitle,
  Content,
  SectionTitleBox,
  EditButton,
} from './index.style';
import FallbackUI from '@/components/common/FallbackUI';

import EditIcon from '@assets/svg/Icon_Edit.svg?react';

import { useGetAuthorProfile } from '@/pages/authorPage/hooks/useGetAuthorProfile';

export const Introduce = () => {
  // useGetAuthorProfile 훅을 사용하여 'intro' 프로필 데이터 가져오기
  const { data: authorData, isLoading } = useGetAuthorProfile('intro');

  if (isLoading) {
    return <FallbackUI />;
  }

  if (!authorData) {
    return <p>데이터를 불러올 수 없습니다.</p>;
  }

  const { description, work_style } = authorData;

  return (
    <FormContainer>
      {/* 작가 프로필 조회(자기소개) API 연결 */}
      <h1>자기 소개</h1>

      <IntroduceContainer>
        <SectionTitleBox>
          <SectionTitle>작가 설명</SectionTitle>
          <EditButton>
            <span>편집하기</span>
            <EditIcon style={{ fill: '#F7F7F7' }} />
          </EditButton>
        </SectionTitleBox>
        <Content>{description}</Content>
      </IntroduceContainer>

      <IntroduceContainer>
        <SectionTitleBox>
          <SectionTitle>작업 스타일</SectionTitle>
          <EditButton>
            <span>편집하기</span>
            <EditIcon style={{ fill: '#F7F7F7' }} />
          </EditButton>
        </SectionTitleBox>
        <Content>{work_style}</Content>
      </IntroduceContainer>
    </FormContainer>
  );
};
