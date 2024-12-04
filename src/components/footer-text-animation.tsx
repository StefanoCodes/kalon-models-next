import TextAnimate from "./motion/text-bloom";

const foundedYear = 2020;
export default function FooterTextAnimation() {
  const text = `Creating Experiences Since ${foundedYear}`;
  return (
    <TextAnimate
      type="popIn"
      text={text}
      className="block text-sm text-mutedColor"
    />
  );
}
