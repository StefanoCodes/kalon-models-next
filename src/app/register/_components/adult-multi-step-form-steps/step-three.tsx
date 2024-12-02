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
import { registriationFormSchema } from "@/lib/validations/schema";
import { z } from "zod";
import {
  DateField,
  DateInput,
  DateSegment,
  FieldError,
} from "react-aria-components";
import { format } from "date-fns";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type Inputs = z.infer<typeof registriationFormSchema>;
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
                      className="form-input"
                      autoComplete="why-would-you-like-to-join-kalon-models"
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
