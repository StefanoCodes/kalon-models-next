import Heading from "@/app/about/_components/heading";
import AdultCoursesList from "./adult-courses-list";

export default function AdultCourseWrapper() {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <div className="flex flex-row gap-3">
        <Heading
          headingSize="h1"
          className="text-3xl uppercase sm:text-5xl md:text-6xl lg:text-8xl"
        >
          Courses
        </Heading>
        <p className="text-mutedColor">Ages: 13-25</p>
      </div>
      <AdultCoursesList />
    </div>
  );
}
