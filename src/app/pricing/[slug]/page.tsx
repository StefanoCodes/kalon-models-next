import { notFound } from "next/navigation";
import AdultCourseWrapper from "../_components/adult-course-wrapper";
import GeneralCourseWrapper from "../_components/general-course-wrapper";
import KidsCourseWrapper from "../_components/kids-course-wrapper";
import PricingBreadcrumb from "../_components/pricing-breadcrumb";

type Params = Promise<{ slug: string }>;
export default async function PricingPage({ params }: { params: Params }) {
  const { slug } = await params;
  const config = {
    adult: AdultCourseWrapper,
    kids: KidsCourseWrapper,
    masterclass: GeneralCourseWrapper,
  };
  const Component = config[slug as keyof typeof config];
  if (!Component) {
    return notFound();
  }
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <PricingBreadcrumb title={slug} />
      <Component />
    </div>
  );
}
