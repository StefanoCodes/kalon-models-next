import { WordFadeIn } from "@/components/motion/text-slide";
import TextRevealByWord from "./text-reveal";
import Hr from "@/components/hr";
import FacesBehindSuccess from "./faces-behind-success";
const gridCols = {
  1: "col-span-12 md:col-span-4 xl:col-span-2",
  2: "col-span-12 md:col-span-8 xl:col-span-2",
  3: "col-span-12 lg:col-span-12 xl:col-span-4",
  4: "col-span-12 md:col-span-8 xl:col-span-4",
  5: "col-span-12 md:col-span-4 xl:col-span-12",
};
export default function Header() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex grid-cols-12 flex-col items-start gap-8 xs:grid md:gap-10 lg:gap-12">
        {/* FOUNDED IN */}
        <div className={`col-span-12 md:col-span-4 xl:col-span-2`}>
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-[11px] font-normal uppercase">founded in</h2>
            <p className="text-xl font-medium text-[#0A0A0A]">2020</p>
          </div>
        </div>
        {/* LOCATIONS */}
        <div className="col-span-12 md:col-span-8 xl:col-span-2">
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-[11px] font-normal uppercase">locations</h2>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-medium capitalize text-[#0A0A0A]">
                pretoria
              </p>
              <p className="text-xl font-medium capitalize text-[#0A0A0A]">
                rosebank
              </p>
              <p className="text-xl font-medium capitalize text-[#0A0A0A]">
                cape town
              </p>
            </div>
          </div>
        </div>
        {/* DESCRIPTION */}
        <div className="col-span-12 lg:col-span-12 xl:col-span-8">
          <div className="flex flex-col gap-4">
            <p className="text-2xl text-[#0A0A0A]">
              <strong>We are South Africa’s #1 modeling academy.</strong> Since
              2020, we’ve trained 65+ models, helping them find their place in
              the industry, from runway to pageantry, personal branding, and
              beyond.
            </p>
            <p className="text-2xl font-normal text-[#0A0A0A]">
              With a dedicated team of 7+ experienced professionals, some of
              whom have worked with the likes of Maxhosa, David Tlale, and SAFW,
              we’re proud to be shaping the future of modeling in Pretoria,
              Johannesburg and Cape Town.
            </p>
            <p className="text-2xl font-normal text-[#0A0A0A]">
              Whether it’s your first step on the runway or your hundredth,
              Kalon is where you find your place.
            </p>
            <p className="text-2xl font-normal text-[#0A0A0A]">Welcome home.</p>
          </div>
        </div>
      </div>
      <Hr className="bg-gradient-to-r from-[#F8F8F8] via-[#737373] to-[#F8F8F8]" />
      <FacesBehindSuccess />
    </div>
  );
}
