import ServicesCard from "./service-card";
import content from "@/app/about/about.config";
const { services } = content;
// export default function ServicesList() {
//   return (
//     <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//       {services.map((service, index) => (
//         <ServicesCard service={service} key={index} />
//         // <Service
//       ))}
//     </div>
//   );
//

export default function ServicesList() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col gap-2">
        <ServicesCard title={services[0].title} />
        <ServicesCard title={services[3].title} />
      </div>
      <div className="flex flex-col gap-2">
        <ServicesCard title={services[2].title} />
        <ServicesCard title={services[5].title} />
      </div>
      <div className="flex flex-col gap-2">
        <ServicesCard title={services[4].title} />
        <ServicesCard title={services[1].title} />
      </div>
    </div>
  );
}
