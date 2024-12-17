import Image from "next/image";
import logo4 from "../../../../public/logos/africa_fashion_logo.png";
import logo2 from "../../../../public/logos/davidtale_logo.png";
import logo3 from "../../../../public/logos/f_logo.png";
import logo5 from "../../../../public/logos/flower_logo.png";
import logo6 from "../../../../public/logos/stadio_logo.png";

import Team from "./meet-the-person-box";
export default function FacesBehindSuccess() {
  return (
    <div className="flex w-full flex-col justify-center gap-20">
      {/* first part */}

      <div className="flex w-full flex-col items-center justify-center gap-12 xl:mx-auto xl:max-w-[51.25rem]">
        {/* main heading */}
        <h3 className="text-center text-3xl font-normal text-[#0A0A0A]">
          Meet the faces behind the success
        </h3>
        {/* our experience */}
        <div className="flex w-full flex-col items-center gap-10">
          <h4 className="text-[11px] uppercase text-[#0A0A0A]">
            Our experience
          </h4>
          <div className="grid w-full grid-cols-2 place-items-center gap-8 sm:grid-cols-3 md:grid-cols-6">
            <Image src={logo5} alt="logo" />
            <Image src={logo2} alt="logo" />
            <Image src={logo3} alt="logo" />
            <Image src={logo4} alt="logo" />
            <Image src={logo5} alt="logo" />
            <Image src={logo6} alt="logo" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <Team />
      </div>
    </div>
  );
}
