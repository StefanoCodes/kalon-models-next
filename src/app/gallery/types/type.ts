export type GalleryContent = {
  id: number;
  slug: string;
  title: string;
  overview: string[];
  sectors: string[];
  timeline: string;
  credits: Credits[];
};

export type Credits = {
  title: string;
  name: string;
};
