import { WordFadeIn } from "@/components/motion/text-slide";
import content from "../about.config";
import KalonTag from "@/components/kalon-tag";
const headerAnimationStyle = `text-3xl font-medium leading-[1.1] tracking-tight text-blackColor sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl xl:leading-[1.1] text-center`;
const { title } = content;
const { description1, description3, description4 } = content.descriptionTexts;
export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <div>
        <WordFadeIn
          words={title.main}
          delay={0.15}
          className={headerAnimationStyle}
        />
        <WordFadeIn
          words={title.sub}
          delay={0.4}
          className={headerAnimationStyle}
        />
      </div>
      <div className="flex flex-col items-center gap-8 max-w-prose">
        <div className="flex flex-col items-center gap-4">
          <p className="body-text text-center">

            We are <strong>South Africa's #1</strong> modeling academy. <strong>Since 2020</strong>, we've <strong>trained 65+ models</strong>, helping them find their place in the industry, from <strong>runway</strong> to <strong>pageantry, personal branding,</strong> and beyond.
          </p>
          <p className="body-text text-center">
            with a dedicated <strong>team of 7+</strong> experienced professionals, some of whom have worked with the likes of <strong>Maxhosa, David Tlale</strong> and <strong>SAFW</strong>, we're proud to be shaping the future of modeling in Pretoria, Johannesburg and Cape Town.
            {/* At <KalonTag text="Kalon" className="bg-tertiaryColorRgba" />, we
            see more than just potential, we see people ready to redefine beauty
            on their own terms. This isn't just about modelling; it's about
            providing the tools to shine on any stage, anywhere. */}
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="body-text text-center">
            Wether it's your first step on the runway or your hundredth, Kalon is where you find your place
          </p>
          <p className="body-text text-center">Welcome home.</p>
        </div>
      </div>
    </div>
  );
}
