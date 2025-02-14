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
import { useNavigate, useParams } from 'react-router-dom';
import { GalleryBox } from './GalleryBox';
import { useGetExhibitionDetail } from './hooks/useGetExhibitionDetail';

// const exhibitionData = {
//   id: 1,
//   title: '시간의 흔적 (Traces of Time)',
//   image_url:
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqV-EpDA9QlYzrKkI-xVr6FFolVlQaqZQQbw&s',
//   created_at: '2025-02-01T12:00:00Z',
//   popularity: 120,
//   author: {
//     id: 1,
//     author_name: '김예린',
//     author_image_url:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqV-EpDA9QlYzrKkI-xVr6FFolVlQaqZQQbw&s',
//     otherGalleries: [
//       {
//         id: 3,
//         title: 'The Ground Gallery',
//         imageUrl: `https://picsum.photos/300/${Math.floor(
//           250 + Math.random() * 150
//         )}?random=${Math.random()}`,
//       },
//       {
//         id: 4,
//         title: 'The Ground Gallery',
//         imageUrl: `https://picsum.photos/300/${Math.floor(
//           250 + Math.random() * 150
//         )}?random=${Math.random()}`,
//       },
//     ],
//     artworks: [
//       {
//         id: 10,
//         title: '작품 제목',
//         imageUrl: `https://picsum.photos/300/${Math.floor(
//           250 + Math.random() * 150
//         )}?random=${Math.random()}`,
//       },
//       {
//         id: 15,
//         title: '작품 제목',
//         imageUrl: `https://picsum.photos/300/${Math.floor(
//           250 + Math.random() * 150
//         )}?random=${Math.random()}`,
//       },
//     ],
//   },
// };

export const ExhibitionDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const exhibitionId = id ? parseInt(id, 10) : 0;
  const { data, isLoading, error } = useGetExhibitionDetail(exhibitionId);
  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) return <div>전시 상세를 불러오는데 실패했습니다.</div>; // 오류 표시
  return (
    <PageLayout>
      <ExhibitionImage
        src={data.exhibition.image_url}
        alt={data.exhibition.title}
      />
      <Container>
        <Title>{data.exhibition.title}</Title>

        <AuthorInfo>
          <AuthorImage src={data.author.image_url} alt={data.author.name} />
          <AuthorName>{data.author.name}</AuthorName>
        </AuthorInfo>

        <SubTitle>작가의 다른 갤러리</SubTitle>
        <Gallery>
          {data.author_exhibitions.map((gallery, index) => (
            <GalleryBox
              key={index}
              imageUrl={gallery.image_url}
              title={gallery.title}
              onClick={() => {
                navigate(`/exhibition/${gallery.exhibition_id}`);
              }}
            />
          ))}
        </Gallery>

        <SubTitle>작품 목록</SubTitle>
        <ArtworkList>
          {data.author_artworks.map((artwork) => (
            <ArtworkImage
              src={artwork.image_url}
              alt={artwork.image_url}
              onClick={() => {
                navigate(`/artwork/${artwork.artwork_id}`);
              }}
            />
          ))}
        </ArtworkList>
      </Container>
    </PageLayout>
  );
};
