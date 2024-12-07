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
export default function StepThree({ delta }: { delta: number }) {
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
      <div className="flex min-h-[18rem] flex-col gap-4 md:min-h-0 md:gap-8">
        <Row className="flex-col gap-4 md:flex-row md:gap-24">
          {/* Student Gender */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="studentGender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Gender</FormLabel>
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
                  <FormMessage className="mt-2" />
                </FormItem>
              )}
            />
          </div>
          {/* Student City Residing In */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="studentCityResidingIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student City You Reside In</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      name="studentCityResidingIn"
                      placeholder="Enter your city"
                      className="form-input"
                      autoComplete="city-residing-in"
                    />
                  </FormControl>
                  <FormMessage className="mt-2" />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row className="flex-col gap-4 md:flex-row md:gap-24">
          {/* Student Email */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="studentEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      name="studentEmail"
                      placeholder="Enter your email"
                      className="form-input"
                      autoComplete="studentEmail"
                    />
                  </FormControl>
                  <FormMessage className="mt-2" />
                </FormItem>
              )}
            />
          </div>
          {/* Student Phone Number */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="studentPhoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Phone Number</FormLabel>
                  <FormControl>
                    <PhoneInput
                      {...field}
                      name="studentPhoneNumber"
                      placeholder="Enter your phone number"
                      autoComplete="phone"
                      className="flex items-center"
                    />
                  </FormControl>
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
