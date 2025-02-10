export type TRegisterFormData = {
  role: 'BUYER' | 'AUTHOR'; // 사용자 유형
  name: string; // 이름
  phone_number: string; // 전화번호
  nickname: string; // 닉네임
  social_type: string; // 소셜 타입
  code: string; // 인가 코드
};
