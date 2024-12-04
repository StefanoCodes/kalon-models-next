import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import PricingBreadcrumb from "../_components/pricing-breadcrumb";
type Params = Promise<{ slug: string }>;
export default async function PricingPage({ params }: { params: Params }) {
  const { slug } = await params;
  // this way we are reducing the client side bundle size becauase we only importing the component that is needed
  const config = {
    adult: dynamic(() => import("../_components/adult-course-wrapper")),
    kids: dynamic(() => import("../_components/kids-course-wrapper")),
    masterclass: dynamic(() => import("../_components/general-course-wrapper")),
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
