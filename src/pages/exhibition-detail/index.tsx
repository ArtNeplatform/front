import { PageLayout } from '@/components/common/PageLayout';
import {
  Container,
  ExhibitionImage,
  Title,
  AuthorInfo,
  AuthorImage,
  AuthorName,
  Gallery,
  ArtworkList,
  ArtworkImage,
  SubTitle,
} from './index.style';
import { useNavigate } from 'react-router-dom';
import { GalleryBox } from './GalleryBox';

const exhibitionData = {
  id: 1,
  title: '시간의 흔적 (Traces of Time)',
  image_url:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqV-EpDA9QlYzrKkI-xVr6FFolVlQaqZQQbw&s',
  created_at: '2025-02-01T12:00:00Z',
  popularity: 120,
  author: {
    id: 1,
    author_name: '김예린',
    author_image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqV-EpDA9QlYzrKkI-xVr6FFolVlQaqZQQbw&s',
    otherGalleries: [
      {
        id: 3,
        title: 'The Ground Gallery',
        imageUrl: `https://picsum.photos/300/${Math.floor(
          250 + Math.random() * 150
        )}?random=${Math.random()}`,
      },
      {
        id: 4,
        title: 'The Ground Gallery',
        imageUrl: `https://picsum.photos/300/${Math.floor(
          250 + Math.random() * 150
        )}?random=${Math.random()}`,
      },
    ],
    artworks: [
      {
        id: 10,
        title: '작품 제목',
        imageUrl: `https://picsum.photos/300/${Math.floor(
          250 + Math.random() * 150
        )}?random=${Math.random()}`,
      },
      {
        id: 15,
        title: '작품 제목',
        imageUrl: `https://picsum.photos/300/${Math.floor(
          250 + Math.random() * 150
        )}?random=${Math.random()}`,
      },
    ],
  },
};

export const ExhibitionDetail = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <ExhibitionImage
        src={exhibitionData.image_url}
        alt={exhibitionData.title}
      />
      <Container>
        <Title>{exhibitionData.title}</Title>

        <AuthorInfo>
          <AuthorImage
            src={exhibitionData.author.author_image_url}
            alt={exhibitionData.author.author_name}
          />
          <AuthorName>{exhibitionData.author.author_name}</AuthorName>
        </AuthorInfo>

        <SubTitle>작가의 다른 갤러리</SubTitle>
        <Gallery>
          {exhibitionData.author.otherGalleries.map((gallery, index) => (
            <GalleryBox
              key={index}
              {...gallery}
              onClick={() => {
                navigate(`/exhibition/${gallery.id}`);
              }}
            />
          ))}
        </Gallery>

        <SubTitle>작품 목록</SubTitle>
        <ArtworkList>
          {exhibitionData.author.artworks.map((artwork) => (
            <ArtworkImage
              src={artwork.imageUrl}
              alt={artwork.title}
              onClick={() => {
                navigate(`/artwork/${artwork.id}`);
              }}
            />
          ))}
        </ArtworkList>
      </Container>
    </PageLayout>
  );
};
