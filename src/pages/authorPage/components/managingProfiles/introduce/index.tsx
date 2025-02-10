import {
  IntroduceContainer,
  FormContainer,
  SectionTitle,
  Content,
  SectionTitleBox,
  EditButton,
} from './index.style';

import EditIcon from '@assets/svg/Icon_Edit.svg?react';

import authorData from '@/pages/authorPage/constants/author';

const { description, work_style } = authorData.result;

export const Introduce = () => {
  return (
    <FormContainer>
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
