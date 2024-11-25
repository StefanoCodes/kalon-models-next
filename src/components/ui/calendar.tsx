// "use client";

// import * as React from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// // import {
// //   addMonths,
// //   addYears,
// //   format,
// //   isAfter,
// //   isBefore,
// //   isSameDay,
// //   isSameMonth,
// //   setYear,
// //   startOfMonth,
// // } from "date-fns";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// interface CustomDatePickerProps {
//   selected?: Date;
//   onSelect?: (date: Date) => void;
//   minDate?: Date;
//   maxDate?: Date;
//   className?: string;
// }

// export function CustomDatePicker({
//   selected,
//   onSelect,
//   minDate,
//   maxDate,
//   className,
// }: CustomDatePickerProps) {
//   const [date, setDate] = React.useState(selected || new Date());
//   const [isOpen, setIsOpen] = React.useState(false);

//   const handleDateChange = (newDate: Date) => {
//     setDate(newDate);
//     onSelect?.(newDate);
//     setIsOpen(false);
//   };

//   const handleMonthChange = (increment: number) => {
//     const newDate = addMonths(date, increment);
//     if (
//       (!minDate || isAfter(newDate, minDate)) &&
//       (!maxDate || isBefore(newDate, maxDate))
//     ) {
//       setDate(newDate);
//     }
//   };

//   const handleYearChange = (year: string) => {
//     const newDate = setYear(date, parseInt(year));
//     if (
//       (!minDate || isAfter(newDate, minDate)) &&
//       (!maxDate || isBefore(newDate, maxDate))
//     ) {
//       setDate(newDate);
//     }
//   };

//   const years = React.useMemo(() => {
//     const currentYear = new Date().getFullYear();
//     const minYear = minDate ? minDate.getFullYear() : currentYear - 100;
//     const maxYear = maxDate ? maxDate.getFullYear() : currentYear + 100;
//     return Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i);
//   }, [minDate, maxDate]);

//   const days = React.useMemo(() => {
//     const start = startOfMonth(date);
//     const daysInMonth = new Array(42)
//       .fill(null)
//       .map((_, i) => addDays(start, i - start.getDay()));
//     return daysInMonth;
//   }, [date]);

//   return (
//     <Popover open={isOpen} onOpenChange={setIsOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant={"outline"}
//           className={cn(
//             "w-[280px] justify-start text-left font-normal",
//             !selected && "text-muted-foreground",
//             className,
//           )}
//         >
//           {selected ? format(selected, "PPP") : <span>Pick a date</span>}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-auto p-0">
//         <div className="space-y-4 p-3">
//           <div className="flex items-center justify-between">
//             <Button
//               variant="outline"
//               className="h-7 w-7 p-0"
//               onClick={() => handleMonthChange(-1)}
//               disabled={minDate && isSameMonth(date, minDate)}
//             >
//               <ChevronLeft className="h-4 w-4" />
//             </Button>
//             <Select
//               value={date.getFullYear().toString()}
//               onValueChange={handleYearChange}
//             >
//               <SelectTrigger className="w-[120px]">
//                 <SelectValue>{format(date, "MMMM yyyy")}</SelectValue>
//               </SelectTrigger>
//               <SelectContent>
//                 {years.map((year) => (
//                   <SelectItem key={year} value={year.toString()}>
//                     {year}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             <Button
//               variant="outline"
//               className="h-7 w-7 p-0"
//               onClick={() => handleMonthChange(1)}
//               disabled={maxDate && isSameMonth(date, maxDate)}
//             >
//               <ChevronRight className="h-4 w-4" />
//             </Button>
//           </div>
//           <div className="grid grid-cols-7 gap-1 text-center text-sm">
//             {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
//               <div key={day} className="text-muted-foreground">
//                 {day}
//               </div>
//             ))}
//             {days.map((day, index) => {
//               const isDisabled =
//                 (minDate && isBefore(day, minDate)) ||
//                 (maxDate && isAfter(day, maxDate)) ||
//                 !isSameMonth(day, date);
//               return (
//                 <Button
//                   key={index}
//                   variant="ghost"
//                   className={cn(
//                     "h-7 w-7 p-0",
//                     !isSameMonth(day, date) &&
//                       "text-muted-foreground opacity-50",
//                     isSameDay(day, selected ?? "") &&
//                       "bg-primary text-primary-foreground",
//                   )}
//                   disabled={isDisabled}
//                   onClick={() => handleDateChange(day)}
//                 >
//                   {format(day, "d")}
//                 </Button>
//               );
//             })}
//           </div>
//         </div>
//       </PopoverContent>
//     </Popover>
//   );
// }

// function addDays(date: Date, days: number): Date {
//   const result = new Date(date);
//   result.setDate(result.getDate() + days);
//   return result;
// }
