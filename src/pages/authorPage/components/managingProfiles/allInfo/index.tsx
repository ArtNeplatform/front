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

import { AuthorDataProps } from '@/types/author';

import { authorData as rawAuthorData } from '@/pages/authorPage/constants/author';

// 명시적으로 ArtBuyerDataProps 타입 지정
const authorData: AuthorDataProps = rawAuthorData;
const {
  author_name,
  author_image_url,
  email,
  description,
  education,
  award,
  experience,
} = authorData.result;

export const AllInfo = () => {
  return (
    <FormContainer>
      <h1>전체보기</h1>

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
