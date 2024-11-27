"use client";
import { FadeText } from "@/components/motion/text-fade";
import { WordFadeIn } from "@/components/motion/text-slide";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  guardianRegistriationFormSchema,
  registriationFormSchema,
} from "@/lib/validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { motion } from "motion/react";
import { useState } from "react";
import {
  DateField,
  DateInput,
  DateSegment,
  FieldError,
} from "react-aria-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import ProgressBar from "./progress-bar";
import Success from "./sucess";

type Inputs = z.infer<typeof guardianRegistriationFormSchema>;
const steps = [
  {
    id: "Step 1",
    fields: ["name", "surname", "email", "phoneNumber"],
  },
  {
    id: "Step 2",
    fields: ["preferedMethodOfContact"],
  },
  { id: "Step 3", name: "Complete" },
];

export default function GuardianMultiStepForm() {
  const [progressBarPercentage, setProgressBarPercentage] = useState(50);
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;
  const registrationFinished = currentStep === steps.length - 1;

  const form = useForm<z.infer<typeof registriationFormSchema>>({
    resolver: zodResolver(registriationFormSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      preferedMethodOfContact: "whatsapp",
    },
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    const isDataValid = registriationFormSchema.safeParse(data);
    if (!isDataValid.success) {
      console.log("invalid");
      // we can send an email to the user saying we did not follow through with the application for whatber reason if the user decided to spoof the data
      return;
    }
    const formData = {
      ...data,
      name: data.name,
    };
    console.log(formData);
    // business logic here
    form.reset();
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await form.handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((prevStep) => prevStep + 1);
      setProgressBarPercentage(progressBarPercentage + 50);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
      setProgressBarPercentage(progressBarPercentage - 25);
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row lg:h-full">
      <div className="flex flex-col gap-4 md:flex-[1.5]">
        <div className="flex flex-col gap-8 md:gap-12">
          <ProgressBar
            progressPercentage={progressBarPercentage}
            className={cn(
              "ease-[cubic-bezier(0.4,0,0.2,1)] rounded-2xl bg-primaryColor bg-gradient-to-r from-primaryColor to-tertiaryColor transition-all duration-700",
              registrationFinished && "animate-none rounded-none",
            )}
          />
          <div className="flex flex-col gap-8 px-8 py-4 md:gap-12 md:px-12 md:py-8">
            <div className="flex flex-col gap-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(processForm)}>
                  {/* STEP 1 */}
                  {currentStep === 0 && (
                    <motion.div
                      initial={{
                        x: delta >= 0 ? "50%" : "-50%",
                        opacity: 0,
                      }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="grid min-h-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {/* NAME */}
                        <div className="sm:col-span-3">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name</FormLabel>
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
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        {/* Surname */}
                        <div className="sm:col-span-3">
                          <FormField
                            control={form.control}
                            name="surname"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Surname</FormLabel>
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
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        {/* EMAIL */}
                        <div className="sm:col-span-3">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
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
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        {/* PHONE  */}
                        <div className="sm:col-span-3">
                          <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <PhoneInput
                                    {...field}
                                    name="phoneNumber"
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
                      </div>
                    </motion.div>
                  )}
                  {/* STEP 2 */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{
                        x: delta >= 0 ? "50%" : "-50%",
                        opacity: 0,
                      }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <FormField
                            control={form.control}
                            name="preferedMethodOfContact"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Prefered Method of Contact
                                </FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger
                                      className="form-input px-0"
                                      id="select-16"
                                    >
                                      <SelectValue placeholder="Select a prefered method of contact" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="whatsapp">
                                      Whatsapp
                                    </SelectItem>
                                    <SelectItem value="email">Email</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3 / SUCCESS PAGE */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{
                        x: delta >= 0 ? "50%" : "-50%",
                        opacity: 0,
                      }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <Success />
                    </motion.div>
                  )}
                </form>
              </Form>
            </div>
            {/* BUTTONS NEXT AND PREV */}
            <div className="flex w-full items-center justify-end gap-4">
              {currentStep !== steps.length - 1 && (
                <>
                  <Button
                    disabled={currentStep === 0}
                    onClick={prev}
                    variant={"kalon"}
                    className="disabled:opacity-50' bg-tertiaryColorRgba px-8 disabled:cursor-not-allowed"
                  >
                    Prev
                  </Button>
                  <Button
                    variant={"kalon"}
                    className="bg-tertiaryColorRgba px-8 disabled:cursor-not-allowed disabled:opacity-50"
                    onClick={next}
                    disabled={currentStep === steps.length - 1}
                  >
                    Next
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
