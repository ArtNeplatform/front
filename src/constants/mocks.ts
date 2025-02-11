/**mock 데이터들을 넣어두고, UI를 구현할 때 사용합니다. */

import exampleArtwork from '@/assets/png/example_artwork.png';
import exampleExhibition from '@/assets/png/example_exhibition.png';

/**
 * 작품 구매자/ 작가 마이페이지 조회 API 중 작품 구매자 mock 데이터
 * @author 노찬영
 **/
export const artBuyerData = {
  success: true,
  code: 200,
  message: '요청에 성공하였습니다.',
  result: {
    paymentCounts: {
      pending: 2,
      completed: 5,
      received: 3,
    },
    auctions: [
      {
        artwork_id: 10,
        title: '숲의 빛',
        author: { name: '김예린' },
        end_date: '2023-12-25T00:00:00Z',
        price: 1200000,
        status: '응찰중',
      },
      {
        artwork_id: 11,
        title: '숲속의 정오 (Noon in the Forest)',
        author: { name: '윤지혜' },
        end_date: '2023-12-25T00:00:00Z',
        price: 850000,
        status: '입찰중',
      },
      {
        artwork_id: 12,
        title: '푸른 시간 (The Blue Hour)',
        author: { name: '정민우' },
        end_date: '2023-12-25T00:00:00Z',
        price: 1200000,
        status: '응찰중',
      },
    ],
    payments: [
      {
        artwork_id: 15,
        title: '숲의 빛',
        author: { name: '김예린' },
        price: 1200000,
        created_at: '2023-12-25T00:00:00Z',
        status: '결제 대기중',
      },
      {
        artwork_id: 16,
        title: '숲속의 정오 (Noon in the Forest)',
        author: { name: '윤지혜' },
        price: 850000,
        created_at: '2023-12-25T00:00:00Z',
        status: '결제 완료',
      },
      {
        artwork_id: 17,
        title: '푸른 시간 (The Blue Hour)',
        author: { name: '정민우' },
        price: 1200000,
        created_at: '2023-12-25T00:00:00Z',
        status: '낙찰',
      },
    ],
    myCollection: {
      artworks: [
        {
          id: 22,
          title: '바람이 머무는 곳',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '박서연' },
        },
        {
          id: 23,
          title: '바람이 머무는 곳',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '박서연' },
        },
        {
          id: 24,
          title: '바람이 머무는 곳',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '박서연' },
        },
        {
          id: 25,
          title: '바람이 머무는 곳',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '박서연' },
        },
        {
          id: 26,
          title: '바람이 머무는 곳',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '박서연' },
        },
        {
          id: 27,
          title: '바람이 머무는 곳',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '박서연' },
        },
        {
          id: 28,
          title: '바람이 머무는 곳',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '박서연' },
        },
        {
          id: 29,
          title: '바람이 머무는 곳',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '박서연' },
        },
        {
          id: 30,
          title: '작품 제목이 들어갈 자리입니다.작품 제목이 들어갈 자리입니다.',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '작가명' },
        },
      ],
      exhibitions: [
        {
          exhi_id: 5,
          title: 'The Ground Gallery',
          image_url: exampleExhibition,
        },
        {
          exhi_id: 6,
          title: 'The Ground Gallery',
          image_url: exampleExhibition,
        },
        {
          exhi_id: 7,
          title: 'The Ground Gallery',
          image_url: exampleExhibition,
        },
        {
          exhi_id: 8,
          title: 'The Ground Gallery',
          image_url: exampleExhibition,
        },
        {
          exhi_id: 9,
          title: 'The Ground Gallery',
          image_url: exampleExhibition,
        },
      ],
    },
  },
};

/**
 * 작가 프로필 조회(전체보기 / 자기소개 / 자기정보) API mock 데이터
 * @author 노찬영
 **/
export const authorData = {
  isSuccess: true,
  code: 2000,
  message: 'success!',
  result: {
    author_name: '홍길동',
    author_image_url: 'http://example.com/author_image.jpg',
    email: 'artne@gmail.com',
    description: `안녕하세요, 작가 홍길동입니다. 저는 도시와 사람 사이에 숨겨진 이야기를 발견하고 이를 시각화하는 작업을 하고 있습니다. 
  복잡하고 빠르게 움직이는 도시의 풍경 속에서 우리가 종종 지나치기 쉬운 순간들을 포착하고, 이를 독특한 시각으로 재구성하여 관람자에게 새로운 해석의 기회를 제공합니다. 제 작품은 단순한 시각적 아름다움을 넘어, 사람들과 공간이 맺는 관계와 그 안에 담긴 감정을 탐구하는 데 초점을 맞추고 있습니다. 
  현재 국립현대미술관 청년작가 프로그램에 참여하며, 첫 개인 전시를 준비하고 있습니다. 이를 통해 보다 많은 분들과 제 작품의 이야기를 나눌 수 있기를 기대하고 있습니다.`,
    work_style: `저는 추상적인 형태와 구체적인 요소를 결합하여 작품 속에서 새로운 이야기를 만들어갑니다. 명확히 정의되지 않은 형태들이 서로 어우러져 구체적인 이미지를 암시하거나, 반대로 구체적인 형태가 점차 추상화되는 과정을 탐구합니다. 이러한 작업 방식은 다양한 해석을 가능하게 하며, 관람자가 작품 속에서 자신의 이야기를 발견하도록 유도합니다. 제 작업은 주로 물감, 잉크, 그리고 혼합 매체를 사용해 실험적인 기법으로 완성됩니다.`,
    education: [
      {
        school: '홍익대학교',
        major: '시각디자인학과',
        status: '졸업',
        start_date: '2015.03',
        end_date: '2019.02',
      },
      {
        school: '서울대학교 대학원',
        major: '미술학과',
        status: '재학',
        start_date: '2021.03',
        end_date: '2025.02',
      },
    ],
    award: [
      {
        date: '2019.10',
        description: '서울 국제 아트페어 청년작가상 수상',
      },
      {
        date: '2020.05',
        description: '제37회 대한민국 미술대전 특별상 수상',
      },
      {
        date: '2021.03',
        description: '현대미술협회 주최 신인작가상 수상',
      },
      {
        date: '2022.11',
        description: '국립현대미술관 주관 창작지원 프로그램 선정',
      },
    ],
    experience: [
      {
        date: '2019.03 ~ 2019.04',
        description: `국제 교류전 "아시아의 시선" (홍콩 아트센터)`,
      },
      {
        date: '2020.07 ~ 2020.08',
        description: `프로젝트 "도시의 흔적" (서울시 문화재단 지원, 공공미술 프로젝트)`,
      },
      {
        date: '2021.09 ~ 2021.10',
        description: `단체전 "현대와 자연의 교차" (부산 현대미술관)`,
      },
      {
        date: '2022.04 ~ 2022.05',
        description: `개인전 "빛과 그림자" (서울 아트스페이스 갤러리)`,
      },
    ],
  },
};

export default authorData;

/**
 * 작가 작품/전시 조회 API mock 데이터
 * @author 노찬영
 **/
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
