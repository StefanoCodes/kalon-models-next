"use client";
import Row from "@/components/row";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { registriationFormSchema } from "@/lib/validations/schema";
import { format } from "date-fns";
import { motion } from "framer-motion";
import {
  DateField,
  DateInput,
  DateSegment,
  FieldError,
} from "react-aria-components";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

type Inputs = z.infer<typeof registriationFormSchema>;
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
    >
      {/* START FROM HERE APPLYING THE SAME CLASSES APPLIED YESTERDAY */}
      <div className="flex flex-col gap-4 md:gap-8">
        <Row className="flex-col gap-4 md:flex-row md:gap-24">
          {/* Date of Birth */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Gender */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger id="select-15" className="form-input px-0">
                        <SelectValue placeholder="Select a gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        {/* City Residing In */}
        <Row className="flex-col gap-4 md:flex-row md:gap-24">
          <div className="md:flex-1">
            <FormField
              control={control}
              name="cityResidingIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City You Reside In</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      name="cityResidingIn"
                      placeholder="Enter your city"
                      className="form-input"
                      autoComplete="city-residing-in"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Prefered method of contact */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="preferedMethodOfContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prefered Method of Contact</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="form-input px-0" id="select-16">
                        <SelectValue placeholder="Select a prefered method of contact" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="whatsapp">Whatsapp</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
      </div>
    </motion.div>
  );
}
