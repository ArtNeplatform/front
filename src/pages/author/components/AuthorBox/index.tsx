import {
  ArtistName,
  Container,
  Wrapper,
  InfoText,
  ProfileImage,
} from './index.style';

interface AuthorBoxProps {
  imageUrl: string;
  artist: string;
  artworkCount: number;
  exhibitionCount: number;
}

export const AuthorBox = ({
  imageUrl,
  artist,
  artworkCount,
  exhibitionCount,
}: AuthorBoxProps) => {
  return (
    <Container>
      <Wrapper>
        <ProfileImage src={imageUrl} alt={artist} />
        <ArtistName>{artist}</ArtistName>
        <InfoText>
          작품 {artworkCount}개 | 전시 {exhibitionCount}개
        </InfoText>
      </Wrapper>
    </Container>
  );
};
