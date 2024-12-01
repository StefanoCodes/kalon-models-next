export type GalleryContent = {
  id: number;
  slug: string;
  title: string;
  overview: string[];
  sectors: string[];
  timeline: string;
  credits: Credits[];
  coverImage: string;
  images: GalleryImage[];
};

export type Credits = {
  title: string;
  name: string;
};
export type GalleryImage = {
  src: string;
  alt: string;
};
