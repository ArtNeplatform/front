//공통 responseDTO
export type TGetResponse<T> = {
  isSuccess: boolean;
  response: T;
  result?: T;
};
