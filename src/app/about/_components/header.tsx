import Hr from "@/components/hr";
import FacesBehindSuccess from "./faces-behind-success";
import HeaderOverview from "./header-overview";

export default function Header() {
  return (
    <div className="flex flex-col gap-16">
      <Hr className="bg-gradient-to-r from-[#F8F8F8] via-[#737373] to-[#F8F8F8]" />
      <HeaderOverview />
      <Hr className="bg-gradient-to-r from-[#F8F8F8] via-[#737373] to-[#F8F8F8]" />
      <FacesBehindSuccess />
    </div>
  );
}
