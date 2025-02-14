import {
  MyCollectionContainer,
  SectionTitle,
  ArtworkGrid,
  ExhibitionGrid,
  ExhibitionItem,
  ExhibitionImage,
  ArtworkContainer,
  ExhibitionContainer,
} from './index.style';

import { Artwork } from '@/components/common/ArtWork';

import { useGetAuthorMypage } from '@/pages/authorPage/hooks/useGetAuthorMypage';

const ArtworkCollection = () => {
  const { userMypageData } = useGetAuthorMypage();

  const artworks = userMypageData.storage.artworks;
  const exhibitions = userMypageData.storage.exhibitions;

  return (
    <MyCollectionContainer>
      <h1>작품 보관함</h1>

      <ArtworkContainer>
        <SectionTitle>작품</SectionTitle>
        <ArtworkGrid>
          {artworks.map((artwork) => (
            <Artwork
              key={artwork.id}
              imageUrl={artwork.thumbnail_image_url}
              title={artwork.title}
              artist={artwork.author?.name}
              artworkWidth={artwork.width}
              artworkHeight={artwork.height}
              artworkId={artwork.id}
            />
          ))}
        </ArtworkGrid>
      </ArtworkContainer>

      <ExhibitionContainer>
        <SectionTitle>전시</SectionTitle>
        <ExhibitionGrid>
          {exhibitions.map((exhibition) => (
            <ExhibitionItem key={exhibition.id}>
              <ExhibitionImage
                src={exhibition.image_url}
                alt={exhibition.title}
              />
              <h3>{exhibition.title}</h3>
            </ExhibitionItem>
          ))}
        </ExhibitionGrid>
      </ExhibitionContainer>
    </MyCollectionContainer>
  );
};

export default ArtworkCollection;
