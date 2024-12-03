import ServicesList from "./_components/services-list";
import { Metadata } from "next";
import StatsList from "./_components/stats-list";
import FounderContent from "./_components/founder-content";
import Header from "./_components/header";
import LatestWork from "./_components/latest-work";

export const metadata: Metadata = {
  title: "About | A Modeling Academy for Everyone, but Not Just Anyone.",
  description:
    "Discover Kalon Models, a top modeling academy since 2020, empowering aspiring models with expert training in runway, pageantry, and personal branding.",
};

export default function About() {
  return (
    <section id="about" className="container px-5 py-10 md:px-0">
      <div className="flex flex-col gap-16">
        <Header />
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8 md:gap-12">
            <StatsList />
            <ServicesList />
          </div>
          <FounderContent />
          <LatestWork />
        </div>
      </div>
    </section>
  );
}
