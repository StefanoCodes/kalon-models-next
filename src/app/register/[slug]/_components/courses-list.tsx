import { coursesMetaData } from "../../register.config";
import { CourseCard } from "./course-card";

export default function CoursesList() {
  return (
    <div className="flex flex-col items-start justify-start gap-4 md:flex-row md:items-center md:justify-between">
      {coursesMetaData.map((course) => (
        <CourseCard key={course.title} {...course} />
      ))}
    </div>
  );
}
