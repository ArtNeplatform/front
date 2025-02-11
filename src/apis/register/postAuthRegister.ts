import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TRegisterFormData } from './type.ts';

export const postAuthRegister = async (
  authData: TRegisterFormData
): Promise<TGetResponse<void>> => {
  const response = await instance.post<TGetResponse<void>>(
    `/auth/signup`,
    authData
  );
  return response.data;
};
