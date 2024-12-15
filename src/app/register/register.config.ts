export type Content = {
  title: string;
  description: string;
};

export type AdultCourseDetails = {
  heading: string;
  description: string;
  price: string;
  content: Content[];
};

// export type KidCourseDetails = {
//   heading: string;
//   description: string;
//   price: string;
//   content: Content[];
// };

export type GeneralCourseDetails = {
  heading: string;
  description: string;
  price: string;
  content: Content[];
};

export type Course = {
  standard?: AdultCourseDetails;
  premium?: AdultCourseDetails;
  exclusive?: AdultCourseDetails;
  // kidsStandard?: KidCourseDetails;
  // kidsExclusive?: KidCourseDetails;
};
export type CourseCardProps = {
  title: string;
  description: string;
  duration: string;
  startDate?: string;
  spots: number;
  link: string;
  slug: string;
};

export const coursesMetaData = [
  {
    title: `Standard Courses`,
    description: `Adults Courses for beginners and intermediates who want to learn the basics of modelling.`,
    // startDate: `2024-01-01`,
    link: `/register/standard`,
    duration: `37 sessions`,
    spots: 25,
    slug: `standard`,
  },
  {
    title: `Premium Courses`,
    description: `Adults Courses for beginners and intermediates who want to learn the basics of modelling.`,
    // startDate: `2024-01-01`,
    link: `/register/premium`,
    duration: `49 sessions`,
    spots: 15,
    slug: `premium`,
  },
  {
    title: `Exclusive Courses`,
    description: `Adults Courses for beginners and intermediates who want to learn the basics of modelling.`,
    // startDate: `2024-01-01`,
    link: `/register/exclusive`,
    duration: `59 sessions`,
    spots: 10,
    slug: `exclusive`,
  },
];
// kids: {
//   title: `Kids Courses`,
//   description: `Kids Courses for beginners and intermediates who want to learn the basics of modelling.`,
//   startDate: `2024-01-01`,
//   link: `/register/kids`,
//   duration: `10 weeks`,
//   spots: 10,
//   slug: `kids`,
// },
// to be toggled in future when needed
// masterclass: {
//   title: `The Masterclass`,
//   description: `The Kalon Models Masterclass is an exclusive opportunity designed by the modelling community.`,
//   startDate: `2024-01-01`,
//   link: `/register/masterclass`,
//   duration: `10 weeks`,
//   spots: 10,
//   slug: `masterclass`,
// },

export const courses = {
  standard: {
    heading: `Standard membership`,
    description: `Perfect for those starting their modelling journey. Gain access to essential training and begin your path to success.`,
    price: `R950`,
    content: [
      {
        title: `Runway Training`,
        description: `2 Sessions Per Month`,
      },
      {
        title: `Theory`,
        description: `2 Sessions Per Month`,
      },
      {
        title: `Photoshoot`,
        description: `1 Per Term`,
      },
      {
        title: `More Than Skin Deep Session`,
        description: `1 Session Per Month`,
      },
      {
        title: `Annual Fashion Show`,
        description: `1 Sessions Per Month`,
      },
    ],
    slug: "standard",
  },
  premium: {
    heading: `Premium membership`,
    description: `For those ready to elevate their skills. Dive deeper into modelling with enhanced training and growth opportunities.`,
    price: `R1 295`,
    content: [
      {
        title: `Runway Training`,
        description: `2 Sessions Per Month`,
      },
      {
        title: `Theory`,
        description: `2 Sessions Per Month`,
      },
      {
        title: `General Photoshoots`,
        description: `1 Session Per Term`,
      },
      {
        title: `Casting Skills Training`,
        description: `1 Sessions Per Month`,
      },
      {
        title: `General Content Creation`,
        description: `1 Sessions Per Month`,
      },
      {
        title: `More Than Skin Deep Session`,
        description: `1 Sessions Per Month`,
      },
      {
        title: `Masterclass`,
        description: `(Optional At An Additional Cost)`,
      },
      {
        title: `Annual Fashion`,
        description: `Included`,
      },
    ],
    slug: "premium",
  },
  exclusive: {
    heading: `Exclusive membership`,
    description: `Tailored for the experienced. Refine your craft and unlock advanced opportunities with personalized guidance and support.`,
    price: `R2 355`,
    content: [
      {
        title: `Runway Training`,
        description: `3 Sessions Per Month`,
      },
      {
        title: `Theory`,
        description: `2 Sessions Per Month`,
      },
      {
        title: `Casting Skills Training`,
        description: `1 Session Per Month`,
      },
      {
        title: `Tailored Photoshoots`,
        description: `2 Sessions Per Term`,
      },
      {
        title: `More Than Skin Deep Session`,
        description: `1 Session Per Month`,
      },
      {
        title: `Content Plan`,
        description: `Based On Preferred/Recommended Niche`,
      },
      {
        title: `Brand Collaborations`,
        description: `Opportunities To Work With Industry Leaders`,
      },
      {
        title: `Content Creation`,
        description: `Access To Content Creation Services`,
      },
      {
        title: `Masterclasses`,
        description: `Access To All Masterclasses`,
      },
      {
        title: `Annual Fashion Show`,
        description: `Included`,
      },
    ],
    slug: "exclusive",
  },
};
// TODO FIX THIS UP
export const memberships = [
  // {
  //   kids: ["standard", "exclusive"],
  // },
  {
    adult: ["standard", "premium", "exclusive"],
  },
];
