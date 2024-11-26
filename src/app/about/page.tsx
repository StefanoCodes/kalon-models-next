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
  description:
    "Discover Kalon Models, a top modeling academy since 2020, empowering aspiring models with expert training in runway, pageantry, and personal branding.",
};

const { title } = content;
const { description1, description3 } = content.descriptionTexts;
const { textNote1, textNote2, founderSignature, founderAbbreviation } =
  content.founder;
const { heading, description } = content.footer;

export default function About() {
  return (
    <main className="w-full px-5 py-10 md:px-10">
      <section id="about" className="container">
        <div className="flex flex-col gap-16">
          {/* HEADER*/}
          <div className="flex flex-col gap-16">
            <div>
              <WordFadeIn
                words={title.main}
                delay={0.15}
                className="text-2xl font-medium leading-3 tracking-tight text-blackColor sm:text-3xl md:text-5xl md:leading-[1.5] lg:text-6xl xl:text-8xl"
              />
              <br />
              <WordFadeIn
                words={title.sub}
                delay={0.4}
                className="text-2xl font-medium leading-3 tracking-tight text-blackColor sm:text-3xl md:text-5xl md:leading-[1.5] lg:text-6xl xl:text-8xl"
              />
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="body-text">{description1}</p>
                <p className="body-text">
                  At <KalonTag text="Kalon" className="bg-tertiaryColorRgba" />,
                  we see more than just potential, we see people ready to
                  redefine beauty on their own terms. This isn't just about
                  modelling; it's about providing the tools to shine on any
                  stage, anywhere.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="body-text">{description3}</p>
                <p className="body-text">
                  At the heart of everything we do is the belief that
                  empowerment changes everything. Because when you're empowered,
                  the world takes notice.
                </p>
              </div>
            </div>
            {/* <Hr /> */}
          </div>

          {/* MAIN */}
          <div className="flex flex-col gap-16 md:gap-32">
            {/* CONTENT */}
            <div className="flex flex-col gap-8">
              {/* SERVICES */}
              <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-8">
                  <Heading headingSize="h5" className="font-normal">
                    Services
                  </Heading>
                  {/* <ServicesList /> */}
                </div>
              </div>
              {/* <Hr gradient="dark" /> */}
            </div>
            {/* AUTOBIOGRAPHY */}
            <div className="mb-8 flex flex-col items-start justify-between gap-16 md:flex-row">
              <div className="flex h-full w-full md:w-auto md:flex-1">
                <Image
                  src={"/about/founder.webp"}
                  alt="Kalon"
                  width={304}
                  height={327}
                  className="h-full max-h-[327px] w-full rounded-xl object-cover md:aspect-square md:w-auto md:max-w-[304px]"
                />
              </div>

              <div>
                {/* CONTENT */}
                <div className="flex flex-col gap-8">
                  <div className="flex max-w-xl flex-col gap-5">
                    <p className="body-text">{textNote1}</p>

                    <p className="body-text">{textNote2}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Image
                      src={founderSignature}
                      alt="Kalon signature"
                      width={80}
                      height={36}
                      className="object-cover"
                    />
                    <p className="body-text">{founderAbbreviation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FOOTER */}
          {/* <div className="flex flex-col items-center justify-center gap-8">
            <h3 className="body-text md:text-2xl">{heading}</h3>
            <p className="body-text text-center md:text-2xl">{description}</p>
          </div> */}
        </div>
      </section>
    </main>
  );
}
