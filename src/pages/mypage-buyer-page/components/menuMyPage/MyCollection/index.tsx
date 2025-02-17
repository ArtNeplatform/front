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

import { useNavigate } from 'react-router-dom';
import { useGetBuyerMypage } from '@/pages/mypage-buyer-page/hooks/useGetBuyerMypage';

/**
 * @description 작품 구매자의 작품과 전시를 표시하는 컴포넌트
 * @author 노찬영
 */
const MyCollection = () => {
  const navigate = useNavigate();
  const { userMypageData } = useGetBuyerMypage();

  // 작품 구매자 작품 데이터
  const artworks = userMypageData?.myCollection?.artworks || [];
  // 작품 구매자 전시 데이터
  const exhibitions = userMypageData?.myCollection?.exhibitions || [];

  // 작품 클릭 시 작품 상세 페이지로 이동
  const handleArtworkClick = (artworkId: number) => {
    navigate(`/artwork/${artworkId}`);
  };

  // 전시 클릭 시 전시 상세 페이지로 이동
  const handleExhibitionClick = (exhibitionId: number) => {
    navigate(`/exhibition/${exhibitionId}`);
  };

  return (
    <MyCollectionContainer>
      <h1>마이컬렉션</h1>

      <ArtworkContainer>
        <SectionTitle>작품</SectionTitle>
        <ArtworkGrid>
          {artworks.map((artwork) => (
            <Artwork
              key={artwork.id}
              imageUrl={artwork.thumbnail_image_url}
              title={artwork.title}
              artist={artwork.author?.author_name || '작가 미상'}
              artworkWidth={artwork.width}
              artworkHeight={artwork.height}
              artworkId={artwork.id}
              isLiked={true}
              onClick={() => handleArtworkClick(artwork.id)}
            />
          ))}
        </ArtworkGrid>
      </ArtworkContainer>

      <ExhibitionContainer>
        <SectionTitle>전시</SectionTitle>
        <ExhibitionGrid>
          {exhibitions.map((exhibition) => (
            <ExhibitionItem
              key={exhibition.id}
              onClick={() => handleExhibitionClick(exhibition.id)}
              style={{ cursor: 'pointer' }}
            >
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
