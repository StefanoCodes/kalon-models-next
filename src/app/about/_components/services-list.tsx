import ServicesCard from "./service-card";
import content from "@/app/about/about.config";
const { services } = content;

export default function ServicesList() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:gap-6">
      <div className="flex flex-col gap-1 md:gap-2">
        <ServicesCard title={services[0].title} />
        <ServicesCard title={services[3].title} />
      </div>
      <div className="flex flex-col gap-1 md:gap-2">
        <ServicesCard title={services[2].title} />
        <ServicesCard title={services[5].title} />
      </div>
      <div className="flex flex-col gap-1 md:gap-2">
        <ServicesCard title={services[4].title} />
        <ServicesCard title={services[1].title} />
      </div>
    </div>
  );
}
