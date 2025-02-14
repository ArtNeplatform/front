import { ExhibitionItem } from '@/components/common/ExhibitionItem';
import { Container, GridContainer } from './index.style';
import { useNavigate } from 'react-router-dom';
import { TExhibitions } from '@/apis/author/type';

// const dummyExhibitions = Array.from({ length: 6 }, (_, index) => ({
//   id: index + 1,
//   title: `Exhibition ${index + 1}`,
//   imageUrl: `https://picsum.photos/327/${Math.floor(
//     250 + Math.random() * 150
//   )}?random=${Math.random()}`,
// }));

export const AuthorExhibition = ({
  exhibitions,
}: {
  exhibitions: TExhibitions;
}) => {
  const navigate = useNavigate();
  return (
    <Container>
      <GridContainer>
        {exhibitions.items.map((exhibition) => (
          <ExhibitionItem
            key={exhibition.dataValues.id}
            imageUrl={exhibition.dataValues.image_url}
            title={exhibition.dataValues.title}
            onClick={() => {
              navigate(`/exhibition/${exhibition.dataValues.id}`);
            }}
          />
        ))}
      </GridContainer>
    </Container>
  );
};
