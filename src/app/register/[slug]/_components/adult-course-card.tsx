import Heading from "@/app/about/_components/heading";
import ContentList from "./content-list";
import { AdultCourseDetails, courses } from "../../register.config";
export default function AdultCourseCard({
  courseDetails,
}: {
  courseDetails: "standard" | "premium" | "exclusive";
}) {
  const courseInfo = courses[courseDetails];
  return (
    <div className="flex flex-col gap-4">
      {/* HEADING */}
      <div className="border-borderColor flex flex-col gap-4 border-b pb-6 lg:gap-6">
        <div className="flex flex-row items-center justify-between">
          <Heading headingSize="h3" className="text-xl font-medium">
            {courseInfo.heading}
          </Heading>
          <p className="text-xl font-normal sm:text-2xl">{courseInfo.price}</p>
        </div>
        <p className="text-mutedColor">{courseInfo.description}</p>
      </div>
      {/* MAIN */}
      <ContentList content={courseInfo.content} />
    </div>
  );
}
