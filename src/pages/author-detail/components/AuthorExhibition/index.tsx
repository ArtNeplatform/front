import { ExhibitionItem } from '@/components/common/ExhibitionItem';
import { Container, GridContainer } from './index.style';
import { useNavigate } from 'react-router-dom';

const dummyExhibitions = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: `Exhibition ${index + 1}`,
  imageUrl: `https://picsum.photos/327/${Math.floor(
    250 + Math.random() * 150
  )}?random=${Math.random()}`,
}));

export const AuthorExhibition = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <GridContainer>
        {dummyExhibitions.map((exhibition) => (
          <ExhibitionItem
            key={exhibition.id}
            imageUrl={exhibition.imageUrl}
            title={exhibition.title}
            onClick={() => {
              navigate(`/exhibition/${exhibition.id}`);
            }}
          />
        ))}
      </GridContainer>
    </Container>
  );
};
