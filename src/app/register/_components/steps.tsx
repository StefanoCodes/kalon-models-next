// import { cn } from "@/lib/utils";
// import { Calendar, Contact, Timer, User } from "lucide-react";
// // Configuration
// const steps = [
//     {
//         icon: User,
//     },
//     {
//         icon: Timer,
//     },
//     {
//         icon: Calendar,
//     },
// ];

// const Step = ({ idx, step }: { idx: number; step: (typeof steps)[0] }) => {
//     return (
//         <div className="flex items-center relative">
//             <div className={cn(
//                 `flex items-center justify-center rounded-full text-black z-10 bg-white`
//             )}>
//                 <step.icon className="w-10 h-10" />
//             </div>

//             {idx !== steps.length - 1 && (
//                 <div className={cn(
//                     `h-1 bg-primaryColor absolute left-0 right-0`
//                 )} />
//             )}
//         </div>
//     );
// };

// export default function DisplaySteps() {
//     return (
//         <div className="flex items-center justify-between">
//             {steps.map((step, idx) => <Step key={idx} idx={idx} step={step} />)}
//         </div>
//     );
// }
