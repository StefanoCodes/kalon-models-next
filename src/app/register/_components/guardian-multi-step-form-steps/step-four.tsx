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
export default function StepFour({
  delta,
  course,
}: {
  delta: number;
  course: "kids" | undefined;
}) {
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
      <div className="flex flex-col gap-4 md:gap-8">
        <Row className="flex-col gap-4 md:flex-row">
          {/* Instagram UserName */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="studentInstagramUsername"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Instagram Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      name="studentInstagramUsername"
                      placeholder="Leah Robinson"
                      className="form-input"
                      autoComplete="instagram-username"
                    />
                  </FormControl>
                  <FormMessage className="mt-2" />
                </FormItem>
              )}
            />
          </div>
          {/* Student Preffered Method Of Contact */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="studentPreferedMethodOfContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Prefered Method of Contact</FormLabel>
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
        </Row>

        <Row className="flex-col gap-4 md:flex-row">
          {/* How Did you Hear About Kalon */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="studentHowDidYouHearAboutUs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student How Did You Hear About Us</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      name="studentHowDidYouHearAboutUs"
                      placeholder="I heard about Kalon through instagram"
                      className="form-input md:max-w-[88%]"
                      autoComplete="how-did-you-hear-about-us"
                    />
                  </FormControl>
                  <FormMessage className="mt-2" />
                </FormItem>
              )}
            />
          </div>
          {/* Selected Course however disabled */}
          {!course && (
            <div className="md:flex-1">
              <FormField
                control={control}
                name="selectedCourse"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Selected Course</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled
                    >
                      <FormControl>
                        <SelectTrigger
                          className={cn("form-input px-0")}
                          id="select-36"
                        >
                          <SelectValue placeholder="Kids" />
                          <SelectContent>
                            <SelectItem value="kids">Kids</SelectItem>
                          </SelectContent>
                        </SelectTrigger>
                      </FormControl>
                    </Select>
                    <FormMessage className="mt-2" />
                  </FormItem>
                )}
              />
            </div>
          )}
        </Row>
      </div>
    </motion.div>
  );
}
