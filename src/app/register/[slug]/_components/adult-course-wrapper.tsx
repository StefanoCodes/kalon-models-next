import Heading from "@/app/about/_components/heading";
import AdultCoursesList from "./adult-courses-list";
import { notFound } from "next/navigation";

export default function AdultCourseWrapper({
  params,
}: {
  params: "standard" | "premium" | "exclusive";
}) {
  const isParamsValid =
    params === "standard" || params === "premium" || params === "exclusive";
  console.log(params);
  if (!isParamsValid) return notFound();
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      {/* <div className="flex flex-row gap-3"> */}
      {/* <Heading
          headingSize="h1"
          className="text-3xl uppercase sm:text-5xl md:text-6xl lg:text-8xl"
        >
          Courses
        </Heading> */}
      {/* <p className="text-mutedColor">Ages: 13-25</p> */}
      {/* </div> */}
      <AdultCoursesList courseDetails={params} />
    </div>
  );
}
