"use client";
import { motion } from "framer-motion";
import Row from "@/components/row";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { useFormContext } from "react-hook-form";
import {
  guardianRegistriationFormSchema,
  registriationFormSchema,
} from "@/lib/validations/schema";
import { z } from "zod";
import {
  DateField,
  DateInput,
  DateSegment,
  FieldError,
} from "react-aria-components";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
type Inputs = z.infer<typeof guardianRegistriationFormSchema>;
export default function StepTwo({ delta }: { delta: number }) {
  const { control } = useFormContext<Inputs>();
  return (
    <motion.div
      initial={{
        x: delta >= 0 ? "50%" : "-50%",
        opacity: 0,
      }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div className="flex flex-col gap-4 overflow-hidden md:min-h-0 md:gap-8">
        <Row className="flex-col gap-4 md:flex-row md:gap-24">
          {/* Guardian Prefered Method Of Contact */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="preferedMethodOfContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guardian Prefered Method of Contact</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        className={cn("form-input px-0")}
                        id="select-16"
                      >
                        <SelectValue placeholder="Select a preferred method of contact" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="whatsapp">Whatsapp</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="mt-2" />
                </FormItem>
              )}
            />
          </div>
          {/* Student Name */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="studentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      name="studentName"
                      type="text"
                      placeholder="Enter your student name"
                      className="form-input"
                      autoComplete="studentName"
                    />
                  </FormControl>
                  <FormMessage className="mt-2" />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row className="flex-col gap-4 md:flex-row md:gap-24">
          {/* Student Surname */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="studentSurname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Surname</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      name="studentSurname"
                      type="text"
                      placeholder="Enter your student surname"
                      className="form-input"
                      autoComplete="studentSurname"
                    />
                  </FormControl>
                  <FormMessage className="mt-2" />
                </FormItem>
              )}
            />
          </div>
          {/* Student Date of Birth */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="studentDateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Date of Birth</FormLabel>
                  <FormControl>
                    <DateField
                      aria-label="Date of Birth"
                      aria-describedby="date-of-birth-description"
                      className="space-y-2"
                      onChange={(e) => {
                        if (!e) return;
                        const day = e.day;
                        const month = e.month - 1;
                        const year = e.year;
                        const birthDate = format(
                          new Date(year, month, day),
                          "MM/dd/yyyy",
                        );
                        console.log(birthDate);
                        field.onChange(birthDate);
                      }}
                    >
                      <DateInput
                        className={`form-input flex w-full border-b border-input bg-background py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`}
                      >
                        {(segment) => {
                          if (segment.type === "year") {
                            return (
                              <DateSegment
                                segment={{
                                  ...segment,
                                  minValue: 1900,
                                  maxValue: new Date().getFullYear(),
                                }}
                                className="inline rounded p-0.5 text-foreground caret-transparent outline outline-0 data-[disabled]:cursor-not-allowed data-[focused]:bg-accent data-[invalid]:data-[focused]:bg-destructive data-[type=literal]:px-0 data-[focused]:data-[placeholder]:text-foreground data-[focused]:text-foreground data-[invalid]:data-[focused]:data-[placeholder]:text-destructive-foreground data-[invalid]:data-[focused]:text-destructive-foreground data-[invalid]:data-[placeholder]:text-destructive data-[invalid]:text-destructive data-[placeholder]:text-muted-foreground/70 data-[type=literal]:text-muted-foreground/70 data-[disabled]:opacity-50"
                              />
                            );
                          }
                          return (
                            <DateSegment
                              segment={segment}
                              className="inline rounded p-0.5 text-foreground caret-transparent outline outline-0 data-[disabled]:cursor-not-allowed data-[focused]:bg-accent data-[invalid]:data-[focused]:bg-destructive data-[type=literal]:px-0 data-[focused]:data-[placeholder]:text-foreground data-[focused]:text-foreground data-[invalid]:data-[focused]:data-[placeholder]:text-destructive-foreground data-[invalid]:data-[focused]:text-destructive-foreground data-[invalid]:data-[placeholder]:text-destructive data-[invalid]:text-destructive data-[placeholder]:text-muted-foreground/70 data-[type=literal]:text-muted-foreground/70 data-[disabled]:opacity-50"
                            />
                          );
                        }}
                      </DateInput>
                      <FieldError />
                    </DateField>
                  </FormControl>
                  <FormMessage className="mt-2" />
                </FormItem>
              )}
            />
          </div>
        </Row>
      </div>
    </motion.div>
  );
}
