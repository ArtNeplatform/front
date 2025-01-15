//공통 responseDTO
export type TGetResponse<T> = {
  success: boolean;
  response: T;
};

