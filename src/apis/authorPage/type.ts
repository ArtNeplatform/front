export type AuthorProfileType = 'default' | 'intro' | 'info';

export interface EducationInfo {
  school: string;
  major: string;
  status: string;
  start_date: string;
  end_date: string;
}

export interface AwardInfo {
  date: string;
  description: string;
}

export interface ExperienceInfo {
  date: string;
  description: string;
}

export type TAuthorProfile = {
  isSuccess: boolean;
  code: string;
  message: string;
  author_name: string;
  author_image_url: string;
  email: string;
  description: string;
  work_style: string;
  education: EducationInfo[];
  award: AwardInfo[];
  experience: ExperienceInfo[];
};

export type TAuthorArtworksExhibitions = {
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

export type TUpdateAuthorInfo = {
  nickname?: string;
  address?: string;
  birth?: string;
  author_image_url?: string;
  introduction_image_url?: string;
};
