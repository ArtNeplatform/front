

export type TGetBackgroundImagesResponse = {
  id: number;
  name: string;
  background_url: string;
};


export type TGetExhibitAvailableArtworksResponse = {
  author_id: number;
  artworks: {
    id: number;
    title: string;
    image_url: string;
  }[];
};
