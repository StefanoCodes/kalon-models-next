import { courses } from "../pricing.config";
import GeneralCourseCard from "./general-course-card";

const { general } = courses;
export default function GeneralCoursesList() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
      {general.map((course) => {
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
