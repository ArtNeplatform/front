import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TRegisterFormData, TAuthResponse } from './type.ts';

/**
 * 회원가입 완료 API 호출
 * @param authData 회원가입 완료 폼 데이터
 * @returns 회원가입 완료 응답 데이터
 * @author 홍규진
 */
export const postAuthRegister = async (
  authData: TRegisterFormData
): Promise<TAuthResponse> => {
  const response = await instance.post<TGetResponse<TAuthResponse>>(
    `/auth/completion`,
    authData
  );
  return response.data.result;
};
