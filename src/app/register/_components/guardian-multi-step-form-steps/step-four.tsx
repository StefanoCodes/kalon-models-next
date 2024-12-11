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
import { cn } from "@/lib/utils";
import { guardianRegistriationFormSchema } from "@/lib/validations/schema";
import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
type Inputs = z.infer<typeof guardianRegistriationFormSchema>;
export default function StepFour({ delta }: { delta: number }) {
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
        <Row className="flex-col gap-4 md:flex-row md:gap-24">
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

        <Row className="flex-col gap-4 md:flex-row md:gap-24">
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
                      className="form-input"
                      autoComplete="how-did-you-hear-about-us"
                    />
                  </FormControl>
                  <FormMessage className="mt-2" />
                </FormItem>
              )}
            />
          </div>
          {/* membership */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="membership"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select your membership</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        className={cn("form-input px-0")}
                        id="select-43"
                      >
                        <SelectValue placeholder="Select your membership" />
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="premium">Premium</SelectItem>
                          <SelectItem value="exclusive">Exclusive</SelectItem>
                        </SelectContent>
                      </SelectTrigger>
                    </FormControl>
                  </Select>
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
