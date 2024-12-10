import { courses } from "../../register.config";
import GeneralCourseCard from "./general-course-card";

const { masterclass } = courses;
export default function GeneralCoursesList() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
      {masterclass.map((course) => {
        const courseDetails = course.masterclass;
        return (
          <GeneralCourseCard
            key={courseDetails.heading}
            courseDetails={courseDetails}
          />
        );
      })}
    </div>
  );
}