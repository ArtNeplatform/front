import { useNavigate } from 'react-router-dom';
import {
  Container,
  GridContainer,
  ArtworkItem,
  ArtworkImage,
} from './index.style';
import { TArtworks } from '@/apis/author/type';

// const dummyArtworks = Array.from({ length: 10 }, (_, index) => ({
//   id: index + 1,
//   title: `Artwork ${index + 1}`,
//   imageUrl: `https://picsum.photos/300/${Math.floor(
//     250 + Math.random() * 150
//   )}?random=${Math.random()}`, // 랜덤 크기 이미지
// }));

export const AuthorArtwork = ({ artworks }: { artworks: TArtworks }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <GridContainer>
        {artworks?.items.map((artwork) => (
          <ArtworkItem
            key={artwork.id}
            onClick={() => {
              navigate(`/artwork/${artwork.id}`);
            }}
          >
            <ArtworkImage
              src={artwork.thumbnail_image_url}
              alt={artwork.title}
            />
          </ArtworkItem>
        ))}
      </GridContainer>
    </Container>
  );
};
