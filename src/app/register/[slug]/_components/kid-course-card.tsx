// import Heading from "@/app/about/_components/heading";
// import { KidCourseDetails } from "../../register.config";
// import ContentList from "./content-list";

// export default function KidCourseCard({
//   courseDetails,
// }: {
//   courseDetails: KidCourseDetails;
// }) {
//   const { heading, description, price, content } = courseDetails;
//   return (
//     <div className="flex flex-col gap-4">
//       {/* HEADING */}
//       <div className="border-borderColor flex flex-col gap-4 border-b pb-6 lg:gap-6">
//         <div className="flex flex-row items-center justify-between">
//           <Heading headingSize="h3" className="text-xl font-medium">
//             {heading}
//           </Heading>
//           <p className="text-xl font-normal sm:text-2xl">{price}</p>
//         </div>
//         <p className="text-mutedColor">{description}</p>
//       </div>
//       {/* MAIN */}
//       <ContentList content={content} />
//     </div>
//   );
// }
