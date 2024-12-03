import Heading from "../about/_components/heading";
import CoursesList from "./_components/courses-list";

export default function Pricing() {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <Heading headingSize="h1">Pricing</Heading>
      <CoursesList />
    </div>
  );
}
