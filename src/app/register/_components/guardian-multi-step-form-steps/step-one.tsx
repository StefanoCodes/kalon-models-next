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
type Inputs = z.infer<typeof guardianRegistriationFormSchema>;
export default function StepOne({ delta }: { delta: number }) {
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
      <div className="flex min-h-[18rem] flex-col gap-4 overflow-hidden md:min-h-0 md:gap-8">
        <Row className="flex-col gap-4 md:flex-row">
          {/* NAME */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guardian Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      className={`form-input`}
                      autoComplete="name"
                    />
                  </FormControl>
                  <FormMessage className="mt-2" />
                </FormItem>
              )}
            />
          </div>
          {/* Surname */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guardian Surname</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      name="surname"
                      type="text"
                      placeholder="Enter your surname"
                      className="form-input"
                      autoComplete="surname"
                    />
                  </FormControl>
                  <FormMessage className="mt-2" />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row className="flex-col gap-4 md:flex-row">
          {/* EMAIL */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guardian Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      name="email"
                      type="text"
                      placeholder="Enter your email"
                      className="form-input"
                      autoComplete="email"
                    />
                  </FormControl>
                  <FormMessage className="mt-2" />
                </FormItem>
              )}
            />
          </div>
          {/* PHONE */}
          <div className="md:flex-1">
            <FormField
              control={control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guardian Phone Number</FormLabel>
                  <FormControl>
                    <PhoneInput
                      {...field}
                      name="phoneNumber"
                      placeholder="Enter your phone number"
                      autoComplete="phone"
                      className="flex items-center"
                    />
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
