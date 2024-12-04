import Heading from "@/app/about/_components/heading";
import Link from "next/link";

export default function SocialItem({
  title,
  url,
  displayName,
}: {
  title: string;
  url: string;
  displayName: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Heading
        headingSize="h2"
        className="text-base font-normal sm:text-base md:text-base lg:text-base"
      >
        {title}
      </Heading>
      <Link href={url} target="_blank" className="text-sm text-mutedColor">
        {displayName}
      </Link>
    </div>
  );
}
