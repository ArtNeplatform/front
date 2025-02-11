//공통 responseDTO
export type TGetResponse<T> = {
  isSuccess: boolean;
  code: number;
  message: string;
  result: T;
};
