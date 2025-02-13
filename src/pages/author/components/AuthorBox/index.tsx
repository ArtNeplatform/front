import {
  ArtistName,
  Container,
  Wrapper,
  InfoText,
  ProfileImage,
} from './index.style';

interface AuthorBoxProps {
  imageUrl: string;
  author: string;
  artworkCount: number;
  exhibitionCount: number;
  onClick: () => void;
}

export const AuthorBox = ({
  imageUrl,
  author,
  artworkCount,
  exhibitionCount,
  onClick,
}: AuthorBoxProps) => {
  return (
    <Container onClick={onClick}>
      <Wrapper>
        <ProfileImage src={imageUrl} alt={author} />
        <ArtistName>{author}</ArtistName>
        <InfoText>
          작품 {artworkCount}개 | 전시 {exhibitionCount}개
        </InfoText>
      </Wrapper>
    </Container>
  );
};
