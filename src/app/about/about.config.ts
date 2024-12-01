import { galleryContent } from "../gallery/gallery.config";

const content = {
  title: {
    main: "In the academy today,",
    sub: "on the runway tomorrow.",
  },
  descriptionTexts: {
    description1:
      "We have all had moments of doubt, standing in front of the mirror, wondering if we have what it takes. The truth? You do.",
    description2:
      "At Kalon, we see more than just potential, we see people ready to redefine beauty on their own terms. This isn't just about modelling; it's about providing the tools to shine on any stage, anywhere.",
    description3:
      "Everyone, from every background, has a story worth sharing. We believe beauty is found in diversity, strength, and confidence. Whether it's your first step on the runway or your hundredth, this is where you uncover your voice, embrace your uniqueness, and step into the spotlight with purpose.",
    description4:
      "At the heart of everything we do is the belief that empowerment changes everything. Because when you're empowered, the world takes notice.",
  },
  services: [
    {
      title: "Runway Training",
      description:
        "Master the art of the catwalk with our professional runway training.",
      image: "/about/services/service_1-min.png",
    },
    {
      title: "Casting Skills Training",
      description:
        "Learn how to shine in casting calls and land more modeling jobs.",
      image: "/about/services/service_2-min.png",
    },
    {
      title: "Pageant Training",
      description:
        "Prepare for success in beauty pageants with our comprehensive training program.",
      image: "/about/services/service_1-min.png",
    },
    {
      title: "Social Media & Personal Branding",
      description:
        "Build your online presence and create a strong personal brand in the modeling industry.",
      image: "/about/services/service_4-min.png",
    },
    {
      title: "Photo\nShoots",
      description:
        "Get professional photoshoot experience to enhance your portfolio.",
      image: "/about/services/service_2-min.png",
    },
    {
      title: "Master\nClass",
      description:
        "Elevate your modeling skills with our intensive masterclass sessions.",
      image: "/about/services/service_4-min.png",
    },
  ],
  stats: [
    {
      title: "Models Trained",
      value: 49,
    },
    {
      title: "Years open",
      value: 4,
    },
    {
      title: "Team members",
      value: 8,
    },
  ],
  founder: {
    founderImage: `/about/founder.webp`,
    textNote1:
      "My modeling journey began in 2017, but my career truly started in 2020. The first three years were particularly challenging—not due to rejection or missed opportunities, but because I didn’t receive the proper guidance.",
    textNote2:
      "This led me to establishing Kalon Models in 2020, from there on out I made it my mission to create a supportive environment where models can thrive, ensuring that no one has to navigate the industry alone.",
    founderSignature: "/about/signature.svg",
    founderAbbreviation: "Founder, Kalon Models",
  },
  footer: {
    heading: "Our approach is simple",
    description:
      "We exist to shape top-tier models with unmatched skill and confidence.  We see potential AND REFINE IT. Welcoming every background, we find beauty in stories, strength, and the confidence we help build. Whether it’s your first step on the runway or your hundredth, this is where you discover your voice, your power, and your place.",
  },
  latestWork: {
    latestWorkTitle: "Latest Work",
    latestWorkRecent: galleryContent[0][1],
    latestWorkSecond: galleryContent[0][3],
  },
};

export default content;
