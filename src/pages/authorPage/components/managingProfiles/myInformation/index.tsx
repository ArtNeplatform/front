import {
  EditButton,
  FormContainer,
  IntroduceContainer,
  SectionTitle,
  SectionTitleBox,
  Table,
  Td,
  Th,
  Tr,
} from './index.style';
import FallbackUI from '@/components/common/FallbackUI';

import EditIcon from '@assets/svg/Icon_Edit.svg?react';

import { useGetAuthorProfile } from '@/pages/authorPage/hooks/useGetAuthorProfile';

export const MyInformation = () => {
  // useGetAuthorProfile 훅을 사용하여 'info' 프로필 데이터 가져오기
  const { data: authorData, isLoading } = useGetAuthorProfile('info');

  if (isLoading) {
    return <FallbackUI />;
  }

  if (!authorData) {
    return <p>데이터를 불러올 수 없습니다.</p>;
  }

  const { education, award, experience } = authorData;

  return (
    <FormContainer>
      <h1>자기 정보</h1>

      {/* 작가 프로필 조회(자기정보) API 연결 */}
      <IntroduceContainer>
        <SectionTitleBox>
          <SectionTitle>작가 설명</SectionTitle>
          <EditButton>
            <span>편집하기</span>
            <EditIcon style={{ fill: '#F7F7F7' }} />
          </EditButton>
        </SectionTitleBox>
        <Table>
          <thead>
            <tr>
              <Th>학교</Th>
              <Th>전공</Th>
              <Th>상태</Th>
              <Th>입학일</Th>
              <Th>졸업일</Th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu, index) => (
              <Tr key={index}>
                <Td
                  style={{
                    textAlign: 'left',
                    padding: '22px 20px',
                    color: 'black',
                  }}
                >
                  {edu.school}
                </Td>
                <Td>{edu.major}</Td>
                <Td>{edu.status}</Td>
                <Td>{edu.start_date}</Td>
                <Td>{edu.end_date}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </IntroduceContainer>

      <IntroduceContainer>
        <SectionTitleBox>
          <SectionTitle>작가 설명</SectionTitle>
          <EditButton>
            <span>편집하기</span>
            <EditIcon style={{ fill: '#F7F7F7' }} />
          </EditButton>
        </SectionTitleBox>
        <Table>
          <thead>
            <tr>
              <Th>기간</Th>
              <Th>수상 내용</Th>
            </tr>
          </thead>
          <tbody>
            {award.map((award, index) => (
              <Tr key={index}>
                <Td>{award.date}</Td>
                <Td
                  style={{
                    textAlign: 'left',
                    padding: '22px 40px',
                    color: 'black',
                  }}
                >
                  {award.description}
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </IntroduceContainer>

      <IntroduceContainer>
        <SectionTitleBox>
          <SectionTitle>작가 설명</SectionTitle>
          <EditButton>
            <span>편집하기</span>
            <EditIcon style={{ fill: '#F7F7F7' }} />
          </EditButton>
        </SectionTitleBox>
        <Table>
          <thead>
            <tr>
              <Th>기간</Th>
              <Th>전시 내용</Th>
            </tr>
          </thead>
          <tbody>
            {experience.map((experience, index) => (
              <Tr key={index}>
                <Td>{experience.date}</Td>
                <Td
                  style={{
                    textAlign: 'left',
                    padding: '22px 40px',
                    color: 'black',
                  }}
                >
                  {experience.description}
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </IntroduceContainer>
    </FormContainer>
  );
};
