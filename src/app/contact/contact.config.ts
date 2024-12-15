import {
  KALON_EMAIL,
  KALON_INSTAGRAM_URL,
  KALON_WHATSAPP,
  KALON_WHATSAPP_URL,
} from "@/lib/constants";

export const contactConfig = {
  socials: {
    whatsapp: {
      title: "Whatsapp",
      url: KALON_WHATSAPP_URL,
      displayName: KALON_WHATSAPP,
    },
    email: {
      title: "Email",
      url: `mailto:${KALON_EMAIL}`,
      displayName: KALON_EMAIL,
    },
    instagram: {
      title: "Instagram",
      url: KALON_INSTAGRAM_URL,
      displayName: "kalon.models",
    },
  },
};
