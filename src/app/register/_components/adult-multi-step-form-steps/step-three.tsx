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
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { registriationFormSchema } from "@/lib/validations/schema";
import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

type Inputs = z.infer<typeof registriationFormSchema>;
export default function StepThree({
  delta,
  course,
}: {
  delta: number;
  course?: "adults" | "masterclass";
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
              name="instagramUsername"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      name="instagramUsername"
                      placeholder="Leah Robinson"
                      className="form-input"
                      autoComplete="instagram-username"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* How Did you Hear About Kalon */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="howDidYouHearAboutUs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How Did You Hear About Us</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      name="howDidYouHearAboutUs"
                      placeholder="I heard about Kalon through instagram"
                      className="form-input"
                      autoComplete="how-did-you-hear-about-us"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        {/* Why Join Kalon */}
        <Row className="flex-col gap-4 md:flex-row">
          <div className="md:flex-1">
            <FormField
              control={control}
              name="whyWouldYouLikeToJoinKalonModels"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why would you like to join Kalon Models</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      name="whyWouldYouLikeToJoinKalonModels"
                      placeholder="I want to be a model"
                      className="form-input max-w-[88%]"
                      autoComplete="why-would-you-like-to-join-kalon-models"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {!course && (
            <div className="md:flex-1">
              <FormField
                control={control}
                name="selectedCourse"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger
                          id="select-20"
                          className="form-input px-0"
                        >
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="adults">Adults</SelectItem>
                          <SelectItem value="masterclass">
                            Masterclass
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
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
