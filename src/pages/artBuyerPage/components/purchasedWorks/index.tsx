import { useState } from 'react';

import HeartIcon from '@assets/svg/Icon_heart.svg?react';
import {
  PurchasedWorksContainer,
  SectionTitle,
  ArtworkGrid,
  ArtworkItem,
  ArtworkImage,
  ArtworkContainer,
  ArtistName,
  ArtworkName,
  ArtworkImageWrapper,
  ArtworkOverlay,
  LikeButton,
} from './index.style';
import theme from '@/styles/theme';

import { myCollection } from '@/pages/artBuyerPage/constants/myCollection';

const PurchasedWorks = () => {
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});

  const toggleLike = (id: number) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <PurchasedWorksContainer>
      <h1>구매 작품</h1>

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
    </PurchasedWorksContainer>
  );
};

export default PurchasedWorks;
