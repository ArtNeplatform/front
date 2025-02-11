import {
  Container,
  Card,
  CardContent,
  Title,
  DescriptionWrapper,
  Paragraph,
  DateText,
} from './index.style';

interface Experience {
  date: string;
  description: string;
}

interface Education {
  school: string;
  major: string;
  status: string;
  start_date: string;
  end_date: string;
}

interface Award {
  date: string;
  description: string;
}

interface ResultData {
  experience: Experience[];
  education: Education[];
  award: Award[];
}

interface AuthorInfoProps {
  result: ResultData;
}

export const AuthorInfo = ({ result }: AuthorInfoProps) => {
  const artistDescription = [
    "'도자 조각화' 백지 점토로 성형한 얇은 흙판에 전통 도자기의 형태와 조각보의 이미지를 재해석하여 평면 또는 벽면의 오브제로 표현한다. 본래 도자기는 쓰임과 기능의 개념을 강조한 컨테이너의 형태로 표현하지만 본 작업에서는 이러한 개념을 배제하고 조형 예술로서의 가치와 평면회화의 경계를 뛰어넘는 예술성을 강조한다.",
    '한땀 한땀 정성을 담아 도자기를 조각하다 선과 면의 분할과 정갈하게 새겨진 점선은 조각보의 바느질처럼 견고하고 세밀한 한국인의 정서와 미감을 표현해내며, 투시법으로 미세하게 깎아 표현한 도자기의  옛선조 지혜처럼 도자기의 귀한 가치와 아름다움을 표현한다.',
  ];
  return (
    <>
      <Container>
        <Card>
          <CardContent>
            <Title>작가 설명</Title>
            <DescriptionWrapper>
              {artistDescription.map((paragraph, index) => (
                <Paragraph key={index}>{paragraph}</Paragraph>
              ))}
            </DescriptionWrapper>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Title>학력 정보</Title>
            <DescriptionWrapper>
              {result.education.map((edu, index) => (
                <Paragraph key={index}>
                  <DateText>
                    {edu.start_date} ~ {edu.end_date}
                  </DateText>
                  {edu.school} ({edu.major}, {edu.status})
                </Paragraph>
              ))}
            </DescriptionWrapper>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Title>전시 및 프로젝트 경험</Title>
            <DescriptionWrapper>
              {result.experience.map((exp, index) => (
                <Paragraph key={index}>
                  <DateText>{exp.date}</DateText>{exp.description}</Paragraph>
              ))}
            </DescriptionWrapper>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Title>수상 내역</Title>
            <DescriptionWrapper>
              {result.award.map((award, index) => (
                <Paragraph key={index}>
                  <DateText>{award.date}</DateText>
                  {award.description}
                </Paragraph>
              ))}
            </DescriptionWrapper>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};
