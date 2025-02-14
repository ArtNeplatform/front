import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TRegisterFormData, TAuthResponse } from './type.ts';

export const postAuthRegister = async (
  authData: TRegisterFormData
): Promise<TAuthResponse> => {
  const response = await instance.post<TGetResponse<TAuthResponse>>(
    `/auth/completion`,
    authData
  );
  return response.data.result;
};
