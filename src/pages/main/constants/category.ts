export const CategoryList = [
  { title: '인기 작품', link: '/artwork' },
  { title: '경매중인 작품', link: '/auction' },
  { title: '진행 중인 전시', link: '/exhibition' },
] as const;

export type Category = (typeof CategoryList)[number];
