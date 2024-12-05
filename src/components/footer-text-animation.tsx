import TextAnimate from "./motion/text-bloom";

const foundedYear = 2020;
export default function FooterTextAnimation() {
  const text = `Creating Experiences Since ${foundedYear}`;
  return (
    <TextAnimate
      type="popIn"
      text={text}
      className="block select-none text-sm text-mutedColor"
    />
  );
}
