export interface PaymentItem {
  artwork_id: number;
  title: string;
  author: {
    name: string;
  };
  price: number;
  created_at: string;
  status: string;
}
