import KalonTag from "@/components/kalon-tag";
import content from "./about.config";
import Hr from "@/components/hr";
import Image from "next/image";
import { WordFadeIn } from "@/components/motion/text-slide";
import ServicesList from "./_components/services-list";
import Heading from "./_components/heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | A Modeling Academy for Everyone, but Not Just Anyone.",
  description: "The Masterclass",
};

const { title } = content;
const { description1, description3 } = content.descriptionTexts;
const {
  textNote1,
  textNote2,
  founderImage,
  founderAbbreviation
} = content.founder;
const { heading, description } = content.footer;

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
                  {description1}
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
                  {description3}
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
                <div className="flex flex-col gap-8">
                  <Heading headingSize="h2" className="text-whiteColor">Services</Heading>
                  <ServicesList />
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
                      {
                        textNote1
                      }
                    </p>

                    <p className="body-text">
                      {
                        textNote2
                      }
                    </p>

                  </div>
                  <div className="flex flex-col gap-2">
                    <Image
                      src={founderImage}
                      alt="Kalon"
                      width={80}
                      height={36}
                      className=" object-cover"
                    />
                    <p className="body-text">
                      {
                        founderAbbreviation
                      }
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* FOOTER */}
          <div className="flex flex-col items-center justify-center gap-8">
            <h3 className="body-text md:text-2xl">{heading}</h3>
            <p className="body-text md:text-2xl text-center">
              {description}
            </p>
          </div>
        </div>
      </section>
    </main >
  );
}
