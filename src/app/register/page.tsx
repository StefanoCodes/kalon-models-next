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
import { registriationFormSchema } from "@/lib/validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { motion } from "motion/react";
import { Metadata } from "next";
import { useState } from "react";
import { DateField, DateInput, DateSegment } from "react-aria-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import ProgressBar from "./_components/progress-bar";
import RegistrationFormImg from "./_components/registration-form-img";
import Success from "./_components/sucess";

type Inputs = z.infer<typeof registriationFormSchema>;
const steps = [
  {
    id: "Step 1",
    fields: ["name", "surname", "email", "phoneNumber"],
  },
  {
    id: "Step 2",
    fields: ["age", "dateOfBirth", "gender", "cityResidingIn"],
  },
  {
    id: "Step 3",
    fields: [
      "preferedMethodOfContact",
      "instagramUsername",
      "howDidYouHearAboutUs",
      "whyWouldYouLikeToJoinKalonModels",
    ],
  },

  { id: "Step 4", name: "Complete" },
];
const metadata: Metadata = {
  title: "Register | #1 modelling academy in South Africa",
  description:
    "Register with Kalon Models today and begin your journey to becoming a professional model.",
};

export default function Register() {
  const [progressBarPercentage, setProgressBarPercentage] = useState(25);
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
      age: "",
      dateOfBirth: "",
      gender: "female",
      cityResidingIn: "",
      preferedMethodOfContact: "whatsapp",
      instagramUsername: "",
      howDidYouHearAboutUs: "",
      whyWouldYouLikeToJoinKalonModels: "",
    },
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    const isDataValid = registriationFormSchema.safeParse(data);
    if (!isDataValid.success) {
      console.log("invalid");
      // we can send an email to the user saying we did not follow through with the application for whatber reason if the user decided to spoof the data
    }
    const formData = {
      ...data,
      age: Number(data.age),
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
      setProgressBarPercentage(progressBarPercentage + 25);
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
    <main className="w-full px-5 py-10 md:px-10">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <WordFadeIn
            words="Registration"
            delay={0.4}
            className="text-3xl font-semibold md:text-4xl lg:text-5xl"
          />
          <FadeText
            text="This is a Multi-Part Form Demo! In this demonstration, we will showcase the powerful new forms tools available."
            className="body-text text-mutedColor"
          />
        </div>
        {/* MAIN BOX */}
        <section
          className="min-h-full overflow-hidden rounded-2xl bg-transparent shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl"
          id="register"
        >
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
                                          className=""
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
                                  name="age"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Age</FormLabel>
                                      <FormControl>
                                        <Input
                                          {...field}
                                          type="number"
                                          name="age"
                                          placeholder="Enter your age"
                                          className="form-input"
                                          autoComplete="age"
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>

                              <div className="sm:col-span-3">
                                <FormField
                                  control={form.control}
                                  name="dateOfBirth"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Date of Birth</FormLabel>
                                      <FormControl>
                                        <DateField
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
                                            className={`form-input flex w-full border border-input bg-background py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`}
                                          >
                                            {(segment) => (
                                              <DateSegment
                                                segment={segment}
                                                className="inline rounded p-0.5 text-foreground caret-transparent outline outline-0 data-[disabled]:cursor-not-allowed data-[focused]:bg-accent data-[invalid]:data-[focused]:bg-destructive data-[type=literal]:px-0 data-[focused]:data-[placeholder]:text-foreground data-[focused]:text-foreground data-[invalid]:data-[focused]:data-[placeholder]:text-destructive-foreground data-[invalid]:data-[focused]:text-destructive-foreground data-[invalid]:data-[placeholder]:text-destructive data-[invalid]:text-destructive data-[placeholder]:text-muted-foreground/70 data-[type=literal]:text-muted-foreground/70 data-[disabled]:opacity-50"
                                              />
                                            )}
                                          </DateInput>
                                        </DateField>
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>

                              <div className="sm:col-span-3">
                                <FormField
                                  control={form.control}
                                  name="gender"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Gender</FormLabel>
                                      <FormControl>
                                        <Select
                                          onValueChange={field.onChange}
                                          defaultValue={field.value}
                                        >
                                          <SelectTrigger
                                            id="select-15"
                                            className="form-input"
                                          >
                                            <SelectValue placeholder="Select a gender" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="female">
                                              Female
                                            </SelectItem>
                                            <SelectItem value="male">
                                              Male
                                            </SelectItem>
                                            <SelectItem value="other">
                                              Other
                                            </SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>

                              <div className="sm:col-span-3">
                                <FormField
                                  control={form.control}
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
                            </div>
                          </motion.div>
                        )}
                        {/* STEP 3 */}
                        {currentStep === 2 && (
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
                                          <SelectTrigger className="form-input">
                                            <SelectValue placeholder="Select a prefered method of contact" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          <SelectItem value="whatsapp">
                                            Whatsapp
                                          </SelectItem>
                                          <SelectItem value="email">
                                            Email
                                          </SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>

                              <div className="sm:col-span-3">
                                <FormField
                                  control={form.control}
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
                              <div className="sm:col-span-3">
                                <FormField
                                  control={form.control}
                                  name="howDidYouHearAboutUs"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>
                                        How Did You Hear About Us
                                      </FormLabel>
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
                              <div className="sm:col-span-3">
                                <FormField
                                  control={form.control}
                                  name="whyWouldYouLikeToJoinKalonModels"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>
                                        Why would you like to join Kalon Models
                                      </FormLabel>
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
                            </div>
                          </motion.div>
                        )}
                        {/* STEP 4 / SUCCESS PAGE */}
                        {currentStep === 3 && (
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
            {/* <RegistrationFormImg /> */}
          </div>
        </section>
      </div>
    </main>
  );
}
