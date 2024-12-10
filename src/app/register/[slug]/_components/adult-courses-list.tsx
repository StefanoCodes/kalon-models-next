import { courses } from "../../register.config";
import AdultCourseCard from "./adult-course-card";

const { adults } = courses;

export default function AdultCoursesList() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
      {adults.map((course) => {
        const courseDetails =
          course.standard || course.premium || course.exclusive;
        return (
          <AdultCourseCard
            key={courseDetails.heading}
            courseDetails={courseDetails}
          />
        );
      })}
    </div>
  );
}
