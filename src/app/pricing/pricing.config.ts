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

export type KidCourseDetails = {
  heading: string;
  description: string;
  price: string;
  content: Content[];
};

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
  kidsStandard?: KidCourseDetails;
  kidsExclusive?: KidCourseDetails;
};

export const courses = {
  adults: [
    {
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
      },
    },
    {
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
      },
    },
    {
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
      },
    },
  ],
  kids: [
    {
      kidsStandard: {
        heading: `Standard membership`,
        description: `A great start for young models. Begin building confidence and learning the basics of modelling in a supportive environment.`,
        price: `R530`,
        content: [
          {
            title: `Pageant Training`,
            description: `1 Session Per Month`,
          },
          {
            title: `Casting Skills Training`,
            description: `1 Session Per Month`,
          },
          {
            title: `General Photoshoot`,
            description: `1 Look Per Term`,
          },
        ],
      },
    },
    {
      kidsExclusive: {
        heading: `Exclusive membership`,
        description: `For kids who want to take their modelling to the next level. Enjoy more in-depth training and opportunities to shine on the runway and beyond.`,
        price: `R915`,
        content: [
          {
            title: `Pageant Training`,
            description: `2 Sessions Per Month`,
          },
          {
            title: `Casting Skills Training`,
            description: `1 Session Per Month`,
          },
          {
            title: `Content Creation`,
            description: `1 Session Per Month`,
          },
          {
            title: `Tailored Photoshoot`,
            description: `2 Looks Per Term`,
          },
        ],
      },
    },
  ],
  general: [
    {
      masterclass: {
        heading: `The Masterclass`,
        description: `The Kalon Models Masterclass is an exclusive opportunity designed by the modelling community to expand your network and deepen your industry knowledge.`,
        price: `R1 200`,
        content: [
          {
            title: `Skill Development`,
            description: `Modelling Skills, Including Runway Training`,
          },
          {
            title: `Industry Insight`,
            description: `Provide Real-World Knowledge From Industry Professionals,`,
          },
        ],
      },
    },
  ],
};
