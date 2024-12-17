import Image from "next/image";
import logo1 from "../../../../public/logos/image 10 1.png";
import logo2 from "../../../../public/logos/image 7.png";
import logo3 from "../../../../public/logos/STADIO_RGB-Logo_Grey-1024x462 1.png";
import logo4 from "../../../../public/logos/image 17.png";
import logo5 from "../../../../public/logos/image 12.png";
import MeetPerson from "./meet-the-person-box";
import Hr from "@/components/hr";
export default function FacesBehindSuccess() {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      {/* first part */}
      <div className="flex flex-col items-center justify-center gap-12">
        {/* main heading */}
        <h3 className="text-center text-3xl font-normal text-[#0A0A0A]">
          Meet the faces behind the success
        </h3>
        {/* our experience */}
        <div className="flex flex-col items-center gap-10">
          <h4 className="text-[11px] uppercase text-[#0A0A0A]">
            Our experience
          </h4>
          <div className="flex max-w-[51.25rem] flex-row flex-wrap items-center justify-center gap-[4.5rem]">
            <Image src={logo1} alt="logo" />
            <Image src={logo2} alt="logo" />
            <Image src={logo3} alt="logo" />
            <Image src={logo4} alt="logo" />
            <Image src={logo3} alt="logo" />
            <Image src={logo3} alt="logo" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <div className="flex flex-row flex-wrap justify-between gap-8">
          <MeetPerson />
          <MeetPerson />
          <MeetPerson />
          <MeetPerson />
        </div>
      </div>
    </div>
  );
}
