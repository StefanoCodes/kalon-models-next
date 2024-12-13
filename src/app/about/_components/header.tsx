import { WordFadeIn } from "@/components/motion/text-slide";
import TextRevealByWord from "./text-reveal";
const headerAnimationStyle = `text-3xl font-medium leading-[1.1] tracking-tight text-blackColor sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl xl:leading-[1.1] text-center`;
const headerAnimationStyleSoft = `text-3xl font-normal leading-[1.1] tracking-tight text-blackColor sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl xl:leading-[1.1] text-center`;
export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col items-center">
        <div className="flex gap-2">
          <WordFadeIn
            words={"In the"}
            delay={0.5}
            className={headerAnimationStyleSoft}
          />
          <WordFadeIn
            words={"academy today,"}
            delay={0.75}
            className={headerAnimationStyle}
          />
        </div>
        <div className="flex gap-2">
          <WordFadeIn
            words={"on the"}
            delay={1.25}
            className={headerAnimationStyleSoft}
          />
          <WordFadeIn
            words={"runway tomorrow."}
            delay={1.5}
            className={headerAnimationStyle}
          />
        </div>
      </div>
      <div className="relative flex max-w-prose flex-col items-center gap-8">
        {/* <TextRevealByWord text="We are South Africa’s #1 modeling academy. Since 2020, we’ve trained 65+ models, helping them find their place in the industry, from runway to pageantry, personal branding, and beyond." /> */}

        <div className="flex flex-col items-center gap-4">
          <p className="body-text text-center">
            We are <strong>South Africa's #1</strong> modeling academy.{" "}
            <strong>Since 2020</strong>, we've{" "}
            <strong>trained 65+ models</strong>, helping them find their place
            in the industry, from <strong>runway</strong> to{" "}
            <strong>pageantry, personal branding,</strong> and beyond.
          </p>
          <p className="body-text text-center">
            with a dedicated <strong>team of 7+</strong> experienced
            professionals, some of whom have worked with the likes of{" "}
            <strong>Maxhosa, David Tlale</strong> and <strong>SAFW</strong>,
            we're proud to be shaping the future of modeling in Pretoria,
            Johannesburg and Cape Town.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="body-text text-center">
            Wether it's your first step on the runway or your hundredth, Kalon
            is where you find your place
          </p>
          <p className="body-text text-center">Welcome home.</p>
        </div>
      </div>
    </div>
  );
}
