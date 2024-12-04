import { contactConfig } from "@/app/contact/contact.config";
import SocialItem from "./social-item";
const { socials } = contactConfig;
export default function Socials() {
  return (
    <div className="flex w-full flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <SocialList />
    </div>
  );
}
function SocialList() {
  return (
    <>
      {Object.values(socials).map((social) => (
        <SocialItem key={social.title} {...social} />
      ))}
    </>
  );
}
