import AdultCourseWrapper from "./_components/adult-course-wrapper";
import GeneralCourseWrapper from "./_components/general-course-wrapper";
import KidsCourseWrapper from "./_components/kids-course-wrapper";

export default function Pricing() {
  return (
    <main className="min-h-screen-mobile md:min-h-screen-desktop w-full px-5 py-10 md:px-10">
      <section
        id="pricing"
        className="min-h-screen-mobile md:min-h-screen-desktop container"
      >
        <div className="flex flex-col gap-8 md:gap-16">
          {/* ADULT COURSES */}
          <AdultCourseWrapper />
          {/* KIDS COURSES */}
          <KidsCourseWrapper />
          {/* GENERAL COURSES */}
          <GeneralCourseWrapper />
        </div>
      </section>
    </main>
  );
}
