import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import PricingBreadcrumb from "../[slug]/_components/pricing-breadcrumb";
type Params = Promise<{ slug: string }>;
export default async function PricingPage({ params }: { params: Params }) {
  const { slug } = await params;
  // early check if the course name exists
  const isCourseNameValid =
    slug === `adults` || slug === `kids` || slug === `masterclass`;
  if (!isCourseNameValid) return notFound();
  // this way we are reducing the client side bundle size becauase we only importing the component that is needed
  const config = {
    adults: dynamic(() => import("../[slug]/_components/adult-course-wrapper")),
    kids: dynamic(() => import("../[slug]/_components/kids-course-wrapper")),
    masterclass: dynamic(
      () => import("../[slug]/_components/general-course-wrapper"),
    ),
  };

  const Component = config[slug as keyof typeof config];

  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <PricingBreadcrumb title={slug} />
      <Component />
    </div>
  );
}