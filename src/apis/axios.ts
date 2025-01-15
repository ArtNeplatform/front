import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
/**
 * Axios를 통해 불필요한 재전송을 방지합니다.
 * InternalAxiosRequestConfig를 extneds 하는 방식을 택합니다.
 * API 엔드포인트의 instance 화를 통해서 interceptor를 구현합니다.
 * 토큰 갱신을 interceptor 내부에 구현합니다.
 * @author 홍규진
 */

// 한 요청에 대해 무한 재시도를 방지하기 위한 장치
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  //_retry: 토큰 갱신 재시도를 추적하는 플래그
  _retry?: boolean;
}

type TAnotherToken = {
  accessToken: string;
};

type TAuthResponse = {
  accessToken: string;
};

export const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
  withCredentials: true,
});

//request시 항상 확인
//따라서 토큰이 필요한 uri 와 아닌 uri 를 구분할 필요가 있습니다.
instance.interceptors.request.use(
  (config: CustomAxiosRequestConfig): CustomAxiosRequestConfig => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  },
);

//response시 항상 확인
instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError): Promise<AxiosResponse> => {
    const originalRequest = error.config as CustomAxiosRequestConfig;
    console.error('🚨Response Error:', error);

    // 재시도 여부 확인
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    const accessToken = localStorage.getItem('accessToken');

    try {
      // 토큰 갱신 시도
      const response: AxiosResponse<TAuthResponse, TAnotherToken> = await instance.post('/auth/reissue', {
        accessToken: accessToken,
      });

      // 실패 처리
      if (response.status !== 200) {
        return Promise.reject(error);
      }

      const newAccessToken = response.data.accessToken;

      localStorage.setItem('accessToken', newAccessToken);

      if (originalRequest.headers) {
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
      }

      return instance(originalRequest);
    } catch (refreshError) {
      localStorage.removeItem('accessToken');
      window.location.href = '/';
      return Promise.reject(refreshError);
    }
  },
);
