import {
  Container,
  GridContainer,
  ArtworkItem,
  ArtworkImage,
} from './index.style';

const dummyArtworks = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  title: `Artwork ${index + 1}`,
  imageUrl: `https://picsum.photos/300/${Math.floor(
    250 + Math.random() * 150
  )}?random=${Math.random()}`, // 랜덤 크기 이미지
}));

export const ArtworkList = () => {
  return (
    <Container>
      <GridContainer>
        {dummyArtworks.map((artwork) => (
          <ArtworkItem key={artwork.id}>
            <ArtworkImage src={artwork.imageUrl} alt={artwork.title} />
          </ArtworkItem>
        ))}
      </GridContainer>
    </Container>
  );
};
