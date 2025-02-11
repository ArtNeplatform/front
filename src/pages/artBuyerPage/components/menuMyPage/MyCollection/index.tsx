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

import { ArtBuyerDataProps } from '@/types/artBuyer';

import { artBuyerData as rawArtBuyerData } from '@/constants/mocks';

import { Artwork } from '@/components/common/ArtWork';

// 명시적으로 ArtBuyerDataProps 타입 지정
const artBuyerData: ArtBuyerDataProps = rawArtBuyerData;

const { artworks, exhibitions } = artBuyerData.result.myCollection;

const MyCollection = () => {
  return (
    <MyCollectionContainer>
      <h1>마이컬렉션</h1>

      <ArtworkContainer>
        <SectionTitle>작품</SectionTitle>
        <ArtworkGrid>
          {artworks.map((artwork) => (
            <Artwork
              key={artwork.id}
              imageUrl={artwork.image_url}
              title={artwork.title}
              artist={artwork.author.name}
              artworkSize={artwork.size}
            />
          ))}
        </ArtworkGrid>
      </ArtworkContainer>

      <ExhibitionContainer>
        <SectionTitle>전시</SectionTitle>
        <ExhibitionGrid>
          {exhibitions.map((exhibition) => (
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

/** 사용자 마이페이지 조회 API 연결 */
// import {
//   MyCollectionContainer,
//   SectionTitle,
//   ArtworkGrid,
//   ExhibitionGrid,
//   ExhibitionItem,
//   ExhibitionImage,
//   ArtworkContainer,
//   ExhibitionContainer,
// } from './index.style';

// import { useGetUserMypage } from '@/pages/artBuyerPage/hooks/useGetUserMypage';

// import { Artwork } from '@/components/common/ArtWork';
// import FallbackUI from '@/components/common/FallbackUI';
// import DefaultErrorFallbackUI from '@/components/common/Error/DefaultErrorFallbackUI';

// interface UserProps {
//   userId: number;
// }

// const MyCollection = ({ userId }: UserProps) => {
//   const { userMypageData, isLoading, error } = useGetUserMypage(userId);

//   if (isLoading) return <FallbackUI />;
//   if (error)
//     return (
//       <DefaultErrorFallbackUI
//         resetErrorBoundary={() => console.log('에러 초기화')}
//         error={error}
//       />
//     );

//   const { result } = userMypageData;

//   // 구매자와 작가 데이터 구분
//   const isBuyer = !('author' in result);

//   // 구매자와 작가의 작품 및 전시 데이터 추출
//   const artworks = isBuyer
//     ? result.myCollection.artworks
//     : result.storage.artworks;
//   const exhibitions = isBuyer
//     ? result.myCollection.exhibitions
//     : result.storage.exhibitions;

//   return (
//     <MyCollectionContainer>
//       <h1>마이컬렉션</h1>

//       <ArtworkContainer>
//         <SectionTitle>작품</SectionTitle>
//         <ArtworkGrid>
//           {artworks.map((artwork) => (
//             <Artwork
//               key={artwork.id}
//               imageUrl={artwork.image_url}
//               title={artwork.title}
//               artist={artwork.author?.name || '작가 미상'}
//               artworkSize={artwork.size}
//             />
//           ))}
//         </ArtworkGrid>
//       </ArtworkContainer>

//       <ExhibitionContainer>
//         <SectionTitle>전시</SectionTitle>
//         <ExhibitionGrid>
//           {exhibitions.map((exhibition) => (
//             <ExhibitionItem key={exhibition.exhi_id}>
//               <ExhibitionImage
//                 src={exhibition.image_url}
//                 alt={exhibition.title}
//               />
//               <h3>{exhibition.title}</h3>
//             </ExhibitionItem>
//           ))}
//         </ExhibitionGrid>
//       </ExhibitionContainer>
//     </MyCollectionContainer>
//   );
// };

// export default MyCollection;
