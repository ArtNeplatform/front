export type TGetBackgroundImagesResponse = {
  id: number;
  name: string;
  background_url: string;
};
export type TGetExhibitAvailableArtworksResponse = {
  id: number;
  title: string;
  thumbnail_image_url: string;
};

export type TPostExhibitionRegisterFormData = {
  title: string;
  exhibit_image: File;
};
