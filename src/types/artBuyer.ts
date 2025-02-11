export interface Author {
  name: string;
}

export interface Auction {
  artwork_id: number;
  title: string;
  author: Author;
  end_date: string;
  price: number;
  status: string;
}

export interface Payment {
  artwork_id: number;
  title: string;
  author: Author;
  price: number;
  created_at: string;
  status: string;
}

export interface Artwork {
  id: number;
  title: string;
  image_url: string;
  size: string;
  author: Author;
}

export interface Exhibition {
  exhi_id: number;
  title: string;
  image_url: string;
}

export interface MyCollection {
  artworks: Artwork[];
  exhibitions: Exhibition[];
}

export interface PaymentCounts {
  pending: number;
  completed: number;
  received: number;
}

export interface ArtBuyerDataProps {
  success: boolean;
  code: number;
  message: string;
  result: {
    paymentCounts: PaymentCounts;
    auctions: Auction[];
    payments: Payment[];
    myCollection: MyCollection;
  };
}

