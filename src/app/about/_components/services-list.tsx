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
    <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2 lg:grid-cols-3">
      {/*we will have three srevices for each row so will the module operator to know if the index  */}
      {services.map((service, index) => (
        <ServicesCard service={service} key={index} />
      ))}
    </div>
  );
}
