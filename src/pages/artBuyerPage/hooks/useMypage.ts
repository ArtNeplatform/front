import { instance } from '@/apis/axios';
import { PaymentItem } from '@/types/myPage';
import { useQuery } from '@tanstack/react-query';

interface MypageResponse {
  data: {
    payments: PaymentItem[];
  };
}

const fetchMypageData = async (userId: number) => {
  const { data } = await instance.get(`/api/mypage/${userId}`);
  return data;
};

export const useMypage = (userId: number) => {
  return useQuery<MypageResponse>({
    queryKey: ['mypage', userId],
    queryFn: () => fetchMypageData(userId),
    enabled: !!userId,
  });
};
