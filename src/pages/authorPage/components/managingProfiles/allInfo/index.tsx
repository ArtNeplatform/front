import {
  AccountInfo,
  FormContainer,
  IntroduceContainer,
  Content,
  ProfileImage,
  ProfileImageContainer,
  SectionTitle,
  UserDetails,
  Table,
  Th,
  Tr,
  Td,
} from './index.style';

import { useGetAuthorProfile } from '@/pages/authorPage/hooks/useGetAuthorProfile';

export const AllInfo = () => {
  // useGetAuthorProfile 훅을 사용하여 'default' 프로필 데이터 가져오기
  const { data: authorData } = useGetAuthorProfile('default');

  if (!authorData) {
    return <p>데이터를 불러올 수 없습니다.</p>;
  }

  const {
    author_name,
    author_image_url,
    email,
    description,
    education,
    award,
    experience,
  } = authorData;

  return (
    <FormContainer>
      <h1>전체보기</h1>
      {/* 작가 프로필 조회(전체보기) API 연결 */}
      <AccountInfo>
        <ProfileImageContainer>
          <ProfileImage src={author_image_url} alt={author_name} />
        </ProfileImageContainer>
        <UserDetails>
          <div>
            <h2>{author_name}</h2>
            <span>작가</span>
          </div>
          <div>
            <p>{email}</p>
          </div>
        </UserDetails>
      </AccountInfo>
      <IntroduceContainer>
        <SectionTitle>자기 소개</SectionTitle>
        <Content>{description}</Content>
      </IntroduceContainer>
      <IntroduceContainer>
        <SectionTitle>학력 정보</SectionTitle>
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
        <SectionTitle>수상 경력</SectionTitle>
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
        <SectionTitle>전시 및 프로젝트 경험</SectionTitle>
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
