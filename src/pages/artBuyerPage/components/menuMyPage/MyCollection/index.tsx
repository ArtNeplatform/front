import { useState } from 'react';

import HeartIcon from '@assets/svg/Icon_heart.svg?react';
import {
  MyCollectionContainer,
  SectionTitle,
  ArtworkGrid,
  ArtworkItem,
  ArtworkImage,
  ExhibitionGrid,
  ExhibitionItem,
  ExhibitionImage,
  ArtworkContainer,
  ExhibitionContainer,
  ArtistName,
  ArtworkName,
  ArtworkImageWrapper,
  ArtworkOverlay,
  LikeButton,
} from './index.style';
import theme from '@/styles/theme';

import { myCollection } from '@/pages/artBuyerPage/constants/myCollection';

const MyCollection = () => {
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});

  const toggleLike = (id: number) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <MyCollectionContainer>
      <h1>마이컬렉션</h1>

      <ArtworkContainer>
        <SectionTitle>작품</SectionTitle>
        <ArtworkGrid>
          {myCollection.artworks.map((artwork) => (
            <ArtworkItem key={artwork.id}>
              <ArtworkImageWrapper>
                <ArtworkImage src={artwork.image_url} alt={artwork.title} />
                <ArtworkOverlay className="overlay">
                  <LikeButton onClick={() => toggleLike(artwork.id)}>
                    <HeartIcon
                      fill={
                        likedItems[artwork.id] ? theme.colors.white : 'none'
                      }
                    />
                  </LikeButton>
                </ArtworkOverlay>
              </ArtworkImageWrapper>
              <ArtistName>{artwork.author.name}</ArtistName>
              <ArtworkName>{artwork.title}</ArtworkName>
              <div>{artwork.size}</div>
            </ArtworkItem>
          ))}
        </ArtworkGrid>
      </ArtworkContainer>

      <ExhibitionContainer>
        <SectionTitle>전시</SectionTitle>
        <ExhibitionGrid>
          {myCollection.exhibitions.map((exhibition) => (
            <ExhibitionItem key={exhibition.exhi_id}>
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

export default MyCollection;
