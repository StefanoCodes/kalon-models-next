import InstagramIcon from "@/components/insta-icon";
import FooterTextAnimation from "./footer-text-animation";
export default function Footer() {
  return (
    <footer className="bg-whiteColor">
      <div className="container flex items-center justify-between py-4 xl:px-0">
        <FooterTextAnimation />

        <InstagramIcon />
      </div>
    </footer>
  );
}
