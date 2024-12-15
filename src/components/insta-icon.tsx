import Image from "next/image";
import Instagram from "../../public/instagram.svg";
import Link from "next/link";

import { KALON_INSTAGRAM_URL } from "@/lib/constants";
export default function InstagramIcon() {
  return (
    <Link
      href={KALON_INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram link to Kalon"
      className="group"
    >
      <div className="h-10 w-10">
        <div className="flex h-full w-full items-center justify-center rounded-[14.47px] bg-gradient-to-b from-[#E9E9E9] via-[#E9E9E9] to-[#FFFFFF]">
          <div className="instagram-container-card-shadow flex h-8 w-8 items-center justify-center bg-gradient-to-b from-[#ECECEC] to-[#FFFF]">
            <div className="flex h-[26px] w-[26px] items-center justify-center rounded-lg bg-gradient-to-b from-[#F4F4F4] to-[#FEFEFE] group-hover:from-[#e9e9e9] group-hover:to-[#fefefe]">
              <Image
                width={20}
                height={19}
                src={Instagram}
                alt="instagram social icon"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
