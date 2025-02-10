export interface Education {
  school: string;
  major: string;
  status: string;
  start_date: string;
  end_date: string;
}

export interface Award {
  date: string;
  description: string;
}

export interface Experience {
  date: string;
  description: string;
}

export interface AuthorDataProps {
  isSuccess: boolean;
  code: number;
  message: string;
  result: {
    author_name: string;
    author_image_url: string;
    email: string;
    description: string;
    work_style: string;
    education: Education[];
    award: Award[];
    experience: Experience[];
  };
}

export interface Author {
  id: number;
}

export interface Artwork {
  id: number;
  title: string;
  thumbnail_image_url: string;
}

export interface AuctionArtwork {
  auction_id: number;
  auction_period: string;
  artwork: Artwork;
}

export interface Exhibition {
  id: number;
  title: string;
  image_url: string;
}

export interface ArtworksExhibitionsDataProps {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    author: Author;
    artworks: Artwork[];
    auction_artworks: AuctionArtwork[];
    exhibitions: Exhibition[];
  };
}
