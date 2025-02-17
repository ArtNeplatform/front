import { ArtworkImage, Title, ArtworkItem } from './index.style';

interface GalleryBoxProps {
  imageUrl: string;
  title: string;
  onClick: () => void;
}

export const GalleryBox = ({ imageUrl, title, onClick }: GalleryBoxProps) => {
  return (
    <ArtworkItem onClick={onClick}>
      <ArtworkImage src={imageUrl} alt={title} />
      <Title>{title}</Title>
    </ArtworkItem>
  );
};
