import exampleArtwork from '@/assets/png/example_artwork.png';
import exampleExhibition from '@/assets/png/example_exhibition.png';

export const artworksExhibitionsData = {
  isSuccess: true,
  code: '2000',
  message: 'success!',
  result: {
    author: {
      id: 1,
    },
    artworks: [
      {
        id: 1,
        title: '작품 제목',
        thumbnail_image_url: exampleArtwork,
      },
      {
        id: 2,
        title: '작품 제목',
        thumbnail_image_url: exampleArtwork,
      },
      {
        id: 3,
        title: '작품 제목',
        thumbnail_image_url: exampleArtwork,
      },
      {
        id: 4,
        title: '작품 제목이 들어갈 자리입니다.작품 제목이 들어갈 자리입니다.',
        thumbnail_image_url: exampleArtwork,
      },
      {
        id: 5,
        title: '작품 제목',
        thumbnail_image_url: exampleArtwork,
      },
      {
        id: 6,
        title: '작품 제목이 들어갈 자리입니다.작품 제목이 들어갈 자리입니다.',
        thumbnail_image_url: exampleArtwork,
      },
      {
        id: 7,
        title: '작품 제목',
        thumbnail_image_url: exampleArtwork,
      },
      {
        id: 8,
        title: '작품 제목',
        thumbnail_image_url: exampleArtwork,
      },
      {
        id: 9,
        title: '작품 제목',
        thumbnail_image_url: exampleArtwork,
      },
    ],
    auction_artworks: [
      {
        auction_id: 1,
        auction_period: '2025. 1. 1 - 2025. 1. 10',
        artwork: {
          id: 1,
          title: '모나리자',
          thumbnail_image_url: exampleArtwork,
        },
      },
      {
        auction_id: 2,
        auction_period: '2025. 1. 1 - 2025. 1. 10',
        artwork: {
          id: 2,
          title: '모나리자',
          thumbnail_image_url: exampleArtwork,
        },
      },
      {
        auction_id: 3,
        auction_period: '2025. 1. 1 - 2025. 1. 10',
        artwork: {
          id: 3,
          title: '작품 제목이 들어갈 자리입니다.작품 제목이 들어갈 자리입니다.',
          thumbnail_image_url: exampleArtwork,
        },
      },
      {
        auction_id: 4,
        auction_period: '2025. 1. 1 - 2025. 1. 10',
        artwork: {
          id: 4,
          title: '모나리자',
          thumbnail_image_url: exampleArtwork,
        },
      },
      {
        auction_id: 5,
        auction_period: '2025. 1. 1 - 2025. 1. 10',
        artwork: {
          id: 5,
          title: '모나리자',
          thumbnail_image_url: exampleArtwork,
        },
      },
      {
        auction_id: 6,
        auction_period: '2025. 1. 1 - 2025. 1. 10',
        artwork: {
          id: 6,
          title: '모나리자',
          thumbnail_image_url: exampleArtwork,
        },
      },
      {
        auction_id: 7,
        auction_period: '2025. 1. 1 - 2025. 1. 10',
        artwork: {
          id: 7,
          title: '작품 제목이 들어갈 자리입니다.작품 제목이 들어갈 자리입니다.',
          thumbnail_image_url: exampleArtwork,
        },
      },
      {
        auction_id: 8,
        auction_period: '2025. 1. 1 - 2025. 1. 10',
        artwork: {
          id: 8,
          title: '모나리자',
          thumbnail_image_url: exampleArtwork,
        },
      },
      {
        auction_id: 9,
        auction_period: '2025. 1. 1 - 2025. 1. 10',
        artwork: {
          id: 9,
          title: '모나리자',
          thumbnail_image_url: exampleArtwork,
        },
      },
    ],
    exhibitions: [
      {
        id: 1,
        title: '별이 빛나는 밤에',
        image_url: exampleExhibition,
      },
      {
        id: 2,
        title: '별이 빛나는 밤에',
        image_url: exampleExhibition,
      },
      {
        id: 3,
        title: '별이 빛나는 밤에',
        image_url: exampleExhibition,
      },
      {
        id: 4,
        title: '별이 빛나는 밤에',
        image_url: exampleExhibition,
      },
      {
        id: 5,
        title: '별이 빛나는 밤에',
        image_url: exampleExhibition,
      },
    ],
  },
};
