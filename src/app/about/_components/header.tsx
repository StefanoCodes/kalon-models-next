import { WordFadeIn } from "@/components/motion/text-slide";
import content from "../about.config";
import KalonTag from "@/components/kalon-tag";
const headerAnimationStyle = `text-3xl font-medium leading-[1.1] tracking-tight text-blackColor sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl xl:leading-[1.1]`;
const { title } = content;
const { description1, description3, description4 } = content.descriptionTexts;
export default function Header() {
  return (
    <div className="flex flex-col gap-16">
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
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="body-text">{description1}</p>
          <p className="body-text">
            At <KalonTag text="Kalon" className="bg-tertiaryColorRgba" />, we
            see more than just potential, we see people ready to redefine beauty
            on their own terms. This isn't just about modelling; it's about
            providing the tools to shine on any stage, anywhere.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="body-text">{description3}</p>
          <p className="body-text">{description4}</p>
        </div>
      </div>
    </div>
  );
}
