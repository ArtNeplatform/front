export type TRegisterFormData = {
  role: 'BUYER' | 'AUTHOR'; // 사용자 유형
  name: string; // 이름
  phone_number: string; // 전화번호
  nickname: string; // 닉네임
};

export type TOauthLoginWithCode = {
  code: string;
  social_type: string;
};

export type TAuthResponse = {
  isComplete: boolean;
  token: string;
};
