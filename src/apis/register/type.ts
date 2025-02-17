/**
 * 회원가입 폼 데이터 타입
 * @author 홍규진
 */
export type TRegisterFormData = {
  role: 'BUYER' | 'AUTHOR'; // 사용자 유형
  name: string; // 이름
  phone_number: string; // 전화번호
  nickname: string; // 닉네임
};

/**
 * 소셜 로그인 코드 타입
 * @author 홍규진
 */
export type TOauthLoginWithCode = {
  code: string;
  social_type: string;
};

/**
 * 회원가입 완료 응답 데이터 타입
 * @author 홍규진
 */
export type TAuthResponse = {
  isComplete: boolean;
  token: string;
};
