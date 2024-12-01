import Heading from "@/app/about/_components/heading";
import content from "@/app/about/about.config";
import ServicesCard from "./service-card";
const { services } = content;

export default function ServicesList() {
  return (
    <div className="flex flex-col gap-6">
      <Heading headingSize="h2" className="text-xl font-normal lg:text-2xl">
        Services
      </Heading>
      <div className="hidden flex-col gap-4 sm:flex sm:flex-row sm:justify-between sm:gap-6">
        {/* DESKTOP 2 ROWS */}
        <div className="flex flex-col gap-1 sm:gap-2">
          <ServicesCard title={services[0].title} />
          <ServicesCard title={services[3].title} />
        </div>
        <div className="flex flex-col gap-1 sm:gap-2">
          <ServicesCard title={services[2].title} />
          <ServicesCard title={services[5].title} />
        </div>
        <div className="flex flex-col gap-1 sm:gap-2">
          <ServicesCard title={services[4].title} />
          <ServicesCard title={services[1].title} />
        </div>
      </div>
      {/* MOBILE 2 COLS  */}
      <div className="flex flex-col gap-4 sm:hidden">
        <div className="flex flex-col gap-1 sm:gap-2">
          <ServicesCard title={services[0].title} />
          <ServicesCard title={services[3].title} />
          <ServicesCard title={services[2].title} />
        </div>
        <div className="flex flex-col gap-1 sm:gap-2">
          <ServicesCard title={services[5].title} />
          <ServicesCard title={services[4].title} />
          <ServicesCard title={services[1].title} />
        </div>
      </div>
    </div>
  );
}
