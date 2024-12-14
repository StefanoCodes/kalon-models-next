import AdultCourseCard from "./adult-course-card";

export default function AdultCoursesList({
  courseDetails,
}: {
  courseDetails: "standard" | "premium" | "exclusive";
}) {
  return (
    <div className="grid gap-8 lg:gap-16">
      <AdultCourseCard courseDetails={courseDetails} />
    </div>
  );
}
