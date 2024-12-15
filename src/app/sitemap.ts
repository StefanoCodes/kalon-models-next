import { memberships } from "./register/register.config";
import { BASE_URL } from "@/lib/constants";
import { getAllGalleryItems } from "@/lib/gallery";
import { getAllMemberships } from "@/lib/memberships";

export default function sitemap() {
  const gallery = getAllGalleryItems();
  const memberships = getAllMemberships();
  const galleryItems = gallery.map((item) => {
    return {
      url: `${BASE_URL}/gallery/${item.slug}`,
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "monthly",
      images: [`${BASE_URL}/${item.coverImage}`],
    };
  });
  const membershipsItems = memberships.map((item) => {
    return {
      url: `${BASE_URL}/register/${item.slug}`,
      lastModified: new Date(),
      priority: 0.4,
      changeFrequency: "monthly",
    };
  });
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "yearly",
      images: [`${BASE_URL}/og-image.webp`], // to be updated
    },
    {
      url: `${BASE_URL}/about`,
      images: [`${BASE_URL}/kalon-cover-home.jpg`], // to be updated
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${BASE_URL}/contact`,
      images: [`${BASE_URL}/og-image.webp`], // to be updated
      lastModified: new Date(),
      priority: 0.6,
      changeFrequency: "yearly",
    },
    {
      url: `${BASE_URL}/register`,
      images: [`${BASE_URL}/og-image.webp`], // to be updated
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "yearly",
    },
    ...galleryItems,
    ...membershipsItems,
  ];
}
