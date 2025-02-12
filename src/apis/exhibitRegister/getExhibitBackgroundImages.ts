import { instance } from '@/apis/axios';
import { TGetBackgroundImagesResponse } from '@/apis/exhibitRegister/types';
import { TGetResponse } from '@/apis/type';

/**
 * 배경 이미지 조회 API
 * @author 홍규진
 * */
export const getExhibitBackgroundImages = async (): Promise<
  TGetBackgroundImagesResponse[]
> => {
  const response = await instance.get<
    TGetResponse<TGetBackgroundImagesResponse[]>
  >('/api/exhibitions/backgrounds');
  console.log(response.data);

  return response.data.result;
};
