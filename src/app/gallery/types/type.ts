export type GalleryContent = {
  id: number;
  slug: string;
  title: string;
  overview: string[];
  latestWorkDescription?: string;
  sectors: string[];
  timeline: string;
  credits: Credits[];
  coverImage: string;
  images: GalleryImage[];
  contents?: Record<string, string[]>;
  blurUrl?: string;
};

export type Credits = {
  title: string;
  name: string;
};
export type GalleryImage = {
  src: string;
  alt: string;
  styles?: string;
};
