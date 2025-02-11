export type TAuthorArtworksExhibitionsResponseTypes = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    author: {
      id: number;
    };
    artworks: {
      id: number;
      title: string;
      thumbnail_image_url: string;
    }[];
    auction_artworks: {
      auction_id: number;
      auction_period: string;
      artwork: {
        id: number;
        title: string;
        thumbnail_image_url: string;
      };
    }[];
    exhibitions: {
      id: number;
      title: string;
      image_url: string;
    }[];
  };
};

export type TSaveBankInfo = {
  bank_name: string;
  account_holder: string;
  account_number: string;
};
