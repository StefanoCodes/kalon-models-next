import KalonTag from "@/components/kalon-tag";
import content from "./about.config";
import Hr from "@/components/hr";
import Image from "next/image";
import { WordFadeIn } from "@/components/motion/text-slide";
const { title } = content;
export default function About() {
  return (
    <main className="py-10 px-5 w-full md:px-10">
      <section id="about" className="container">
        <div className="flex flex-col gap-16">
          {/* HEADER*/}
          <div className="flex flex-col gap-16">
            <div>
              <WordFadeIn
                words={title.main}
                delay={0.15}
                className="text-2xl leading-3 sm:text-3xl font-medium md:leading-[1.5] tracking-tight text-whiteColor md:text-5xl lg:text-6xl xl:text-8xl"
              />
              <br />
              <WordFadeIn
                words={title.sub}
                delay={0.4}
                className="text-2xl leading-3 sm:text-3xl font-medium md:leading-[1.5] tracking-tight text-whiteColor md:text-5xl lg:text-6xl xl:text-8xl"
              />
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="body-text">
                  We have all had moments of doubt, standing in front of the
                  mirror, wondering if we have what it takes. The truth? You do.
                </p>
                {/* <FadeText
                  text="We have all had moments of doubt, standing in front of the
                  mirror, wondering if we have what it takes. The truth? You do."
                  direction="up"
                  className="body-text"
                  animationDelay={0.4}
                /> */}
                <p className="body-text">
                  At <KalonTag text="Kalon" />, we see more than just potential,
                  we see people ready to redefine beauty on their own terms. This
                  isn't just about modelling; it's about providing the tools
                  to shine on any stage, anywhere.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="body-text">
                  Everyone, from every background, has a story worth sharing. We
                  believe beauty is found in diversity, strength, and confidence.
                  Whether it's your first step on the runway or your hundredth,
                  this is where you uncover your voice, embrace your uniqueness, and step into
                  the spotlight with purpose.
                </p>
                <p className="body-text">
                  At the heart of everything we do is the belief that empowerment
                  changes everything. Because when you're empowered, the world
                  takes notice.
                </p>
              </div>
            </div>
            <Hr />
          </div>

          {/* MAIN */}
          <div className="flex flex-col gap-32">
            {/* CONTENT */}
            <div className="flex flex-col gap-8">
              {/* SERVICES */}
              <div className=" flex flex-col gap-16">
                <div className="flex items-center justify-between">
                  <div>
                    <h2>Services</h2>
                  </div>
                  <div>
                    <h2>Services</h2>
                  </div>
                  <div>
                    <h2>Services</h2>
                  </div>
                </div>
                <Hr gradient="dark" />
              </div>
              {/* AUTOBIOGRAPHY */}
              <div className="flex flex-col md:flex-row items-start justify-between gap-16">
                <div className="md:flex-1 w-full md:w-auto">
                  <Image
                    src={'/about/founder.webp'}
                    alt="Kalon"
                    width={304}
                    height={304}
                    className="w-full md:max-w-md md:h-full md:aspect-square md:object-cover"
                  />
                </div>

                <div>
                  {/* CONTENT */}
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-5 max-w-xl">


                      <p className="body-text">
                        My modeling journey began in 2017, but my career truly started in 2020. The first three years were particularly challenging—not due to rejection or missed opportunities, but because I didn’t receive the proper guidance.
                      </p>

                      <p className="body-text">
                        This led me to establishing Kalon Models in 2020, from there on out I made it my mission to create a supportive environment where models can thrive, ensuring that no one has to navigate the industry alone.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Image
                        src={'/about/signature.svg'}
                        alt="Kalon"
                        width={80}
                        height={36}
                        className=" object-cover"
                      />
                      <p className="body-text">
                        Founder, Kalon Models
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            {/* FOOTER */}
            <div className="flex flex-col items-center justify-center gap-8">
              <h3 className="body-text md:text-2xl">Our approach is simple</h3>
              <p className="body-text md:text-2xl text-center">
                We exist to shape top-tier models with unmatched skill and confidence.  We see potential AND REFINE IT. Welcoming every background, we find beauty in stories, strength, and the confidence we help build. Whether it’s your first step on the runway or your hundredth, this is where you discover your voice, your power, and your place.

              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
