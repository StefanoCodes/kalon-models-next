import { GalleryContent } from "./types/type";

export const galleryContent: GalleryContent[][] = [
  // new array for every 5 items
  [
    {
      id: 1,
      slug: "eutierria",
      title: "Eutierria",
      overview: [
        "Eutierria is a reflection of humanity’s deep connection to the natural world. Set in lush green surroundings, this shoot captures the interplay of organic textures and earthy tones, emphasizing harmony between people and nature.",
        "The Kalon Models take on the spirit of the elements—rooted, dynamic, and alive. Styled with simplicity and elegance, they represent the strength found in diversity and unity. Every image feels like a moment suspended in time, a quiet yet powerful reminder of how deeply our stories are intertwined with the earth. This is more than a collection of photographs; Eutierria is a thoughtful celebration of nature, individuality, and the beauty of coexistence.",
      ],
      sectors: ["Fashion", "Sustainability", "Lifestyle"],
      timeline: "April 2023",
      credits: [
        {
          title: "Photographer",
          name: "Oogonem",
        },
        {
          title: "Makeup Artist",
          name: "Onlyandile",
        },
        {
          title: "Creative Director",
          name: "Manana Baloyi",
        },
      ],

      images: [
        {
          src: "/gallery/eutierria/inner-wide.webp",
          alt: "inner-wide",
        },
        {
          src: "/gallery/eutierria/second.webp",
          alt: "second",
          styles: "object-top",
        },
        {
          src: "/gallery/eutierria/third.webp",
          alt: "third",
        },
        {
          src: "/gallery/eutierria/fourth.webp",
          alt: "fourth",
          styles: "object-top",
        },
        {
          src: "/gallery/eutierria/fifth.webp",
          alt: "fifth",
        },
      ],
      // contents:''
      coverImage: "/gallery/eutierria/inner-wide.webp",
    },
    {
      id: 2,
      slug: "ineffable",
      title: "Ineffable",
      overview: [
        "Ineffable unfolds in the vibrant streets of Maboneng, where every corner carries its own story. Against the colorful graffiti and industrial textures of this urban landscape, the models create a striking interplay between raw grit and refined style.",
        "The shoot explores the relationship between people and their surroundings, turning everyday spaces into art. Through bold styling and fearless expression, Ineffable captures the beauty in individuality and how it connects with the world around it. This is a series that thrives on contrast—where urban chaos meets creative vision to redefine the way we see beauty.",
      ],
      sectors: ["Fashion", "Urban Art", "Photography"],
      timeline: "April 2022",
      credits: [
        {
          title: "Photographer",
          name: "Tshiamo Ramatlhape",
        },
        {
          title: "Makeup Artist",
          name: "Mischa Henry (Goy Artistry)",
        },
        {
          title: "Creative Directors",
          name: "Don Eros & Manana Baloyi",
        },
      ],
      coverImage: "/gallery/ineffeable/inner-wide.webp",
      images: [
        {
          src: "/gallery/ineffeable/inner-wide.webp",
          alt: "inner-wide",
        },
        {
          src: "/gallery/ineffeable/second.webp",
          alt: "second",
        },
        {
          src: "/gallery/ineffeable/third.webp",
          alt: "third",
        },
        {
          src: "/gallery/ineffeable/fourth.webp",
          alt: "fourth",
        },
        {
          src: "/gallery/ineffeable/fifth.webp",
          alt: "fifth",
        },
      ],
      contents: {
        left: [
          "This shoot was a true introduction to the world of professional modeling. The day started bright and early, we all had to be up by 4 a.m. to meet at the Gautrain station in Hatfield at 6 a.m. By the time we arrived in Maboneng, everyone was running on adrenaline, coffee and vibes.",

          "Once there, the pace was intense. We had a reserved spot where the team worked tirelessly to do makeup and style hair, but there was no room for hesitation. The schedule was tight, makeup, hair, outfit changes, and straight to the camera. Every moment mattered.",
        ],
        right: [
          "Maboneng is more than just a location; it’s an art-filled space where every wall tells a story. The setting demanded energy and creativity. You couldn’t just show up and play it safe, posing in front of vibrant murals required boldness to match the environment.",
          "Yes, it was a hectic day. There were moments of chaos, but it was also exhilarating. We worked hard, we laughed even harder, and by the end of it, we were exhausted but proud. That’s the beauty of doing what you love. No matter how challenging it gets, the passion and joy make it all worth it.",
        ],
      },
    },

    {
      id: 3,
      slug: "power-of-wearing-flowers",
      title: "The Power of Wearing Flowers",
      overview: [
        "The Power of Wearing Flowers tells a quiet, beautiful story of connection and transformation. Each model is adorned with delicate floral arrangements that echo the intricate balance of strength and fragility in nature. Set against soft, tonal backdrops, the flowers and models come together in striking harmony.",
        "These aren’t mere accessories; they feel integrated into the identity of each subject, bridging the natural and human worlds in a way that feels effortless yet profound. This series reflects a deeper narrative—where beauty is not about perfection but about embracing the contrasts that make us whole.",
        "Yes, it was a hectic day. There were moments of chaos, but it was also exhilarating. We worked hard, we laughed even harder, and by the end of it, we were exhausted but proud. That’s the beauty of doing what you love. No matter how challenging it gets, the passion and joy make it all worth it.",
      ],
      sectors: ["Fashion", "Sustainability", "Lifestyle"],
      timeline: "August 2021",
      credits: [
        {
          title: "Photographer",
          name: "Tshiamo Ramatlhape",
        },
        {
          title: "Makeup Artist",
          name: "Mischa Henry (Goy Artistry)",
        },
        {
          title: "Creative Director",
          name: "Manana Baloyi",
        },
      ],
      coverImage: "/gallery/power-of-wearing-flowers/inner-wide.webp",
      images: [
        {
          src: "/gallery/power-of-wearing-flowers/inner-wide.webp",
          alt: "inner-wide",
          styles: "object-cover",
        },
        {
          src: "/gallery/power-of-wearing-flowers/second.webp",
          alt: "second",
        },
        {
          src: "/gallery/power-of-wearing-flowers/third.webp",
          alt: "third",
        },
        {
          src: "/gallery/power-of-wearing-flowers/fourth.webp",
          alt: "fourth",
        },
        {
          src: "/gallery/power-of-wearing-flowers/fifth.webp",
          alt: "fifth",
        },
      ],
    },
    {
      id: 4,
      slug: "vintage-tennis",
      title: "Vintage Tennis",
      overview: [
        "Vintage Tennis captures the elegance and simplicity of a bygone era, reimagined through a modern lens. This shoot pays homage to the timeless aesthetic of tennis’s golden age, blending the crisp whites, textured fabrics, and effortless sophistication of the past with bold, contemporary styling.",
        "Every frame reflects a balance between nostalgia and reinvention. The models, styled to evoke the spirit of classic tennis, move with a confident energy that brings the era to life in a way that feels fresh and relevant. It’s a story of enduring style, celebrating the intersection of sport, movement, and fashion.",
      ],
      sectors: ["Fashion", "Lifestyle", "Sport"],
      timeline: "April 2021",
      credits: [
        {
          title: "Photographer",
          name: "Tshiamo Ramatlhape",
        },
        {
          title: "Makeup Artist",
          name: "Mischa Henry (Goy Artistry)",
        },
        {
          title: "Creative Director",
          name: "Manana Baloyi",
        },
      ],
      images: [
        {
          src: "/gallery/vintage-tennis/inner-wide.webp",
          alt: "inner-wide",
          styles: "",
        },
        {
          src: "/gallery/vintage-tennis/second.webp",
          alt: "second",
          styles: "object-top",
        },
        {
          src: "/gallery/vintage-tennis/third.webp",
          alt: "third",
          styles: "object-top",
        },
        {
          src: "/gallery/vintage-tennis/fourth.webp",
          alt: "fourth",
          styles: "object-top",
        },
        {
          src: "/gallery/vintage-tennis/fifth.webp",
          alt: "fifth",
        },
      ],
      coverImage: "/gallery/vintage-tennis/inner-wide.webp",
    },
    {
      id: 5,
      slug: "pose",
      title: "Pose",
      overview: [
        "Pose is a photoshoot that challenges models to step outside their comfort zones by embracing vibrant, bold outfits—something they wouldn’t typically choose. The shoot captures each model’s willingness to experiment with new poses and styles, pushing them beyond their usual boundaries.",
        "The bright, energetic outfits inject a sense of confidence and playfulness, while the models’ dynamic poses express courage and a break from the norm. Set against clean, minimalist backdrops, the images highlight the models’ ability to transform and reinvent themselves, embracing the power of stepping into the unfamiliar.",
        "Pose celebrates growth and the strength found in embracing challenges, turning the unexpected into a statement of individuality and boldness.",
      ],
      sectors: ["Fashion", "Urban Art", "Photography"],
      timeline: "February 2021",
      credits: [
        {
          title: "Photographer",
          name: "Tshiamo Ramatlhape",
        },
        {
          title: "Make Up Artist",
          name: "Mischa Henry (Goy Artistry)",
        },
        {
          title: "Mischa Henry",
          name: "Don Eros & Manana Baloyi",
        },
      ],
      images: [
        {
          src: "/gallery/pose/inner-wide.webp",
          alt: "inner-wide",
        },
        {
          src: "/gallery/pose/second.webp",
          alt: "second",
          styles: "object-top",
        },
        {
          src: "/gallery/pose/third.webp",
          alt: "third",
        },
        {
          src: "/gallery/pose/fourth.webp",
          alt: "fourth",
        },
        {
          src: "/gallery/pose/fifth.webp",
          alt: "fifth",
        },
      ],
      contents: {
        left: [
          "The modeling industry demands more than just good looks, it’s about knowing your body and how to control it. For this shoot, our students discovered exactly what that means.",
          "The brief was clear: bold, color-blocking outfits and unusual poses. But there was no support, no props, no walls, nothing to lean on. They had to balance on thin air, holding positions that pushed them to their limits.",
        ],
        right: [
          "It didn’t take long for reality to hit. Tighten your core or fall. That was the unspoken rule. Every movement required focus and strength. Poses that looked effortless in concept became a challenge to hold steady.",
          "By the end, the students didn’t just capture bold, striking images, they walked away with a new understanding of how much control and awareness modeling truly demands.",
        ],
      },
      coverImage: "/gallery/pose/inner-wide.webp",
    },
  ],

  // more content starts from here
];
