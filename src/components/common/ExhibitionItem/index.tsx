import { ArtworkImage, Title, ArtworkItem } from './index.style';

interface ExhibitionItemProps {
  imageUrl: string;
  title: string;
  onClick: () => void;
}

export const ExhibitionItem = ({
  imageUrl,
  title,
  onClick,
}: ExhibitionItemProps) => {
  return (
    <ArtworkItem onClick={onClick}>
      <ArtworkImage src={imageUrl} alt={title} />
      <Title>{title}</Title>
    </ArtworkItem>
  );
};
