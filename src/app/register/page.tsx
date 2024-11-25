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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { registriationFormSchema } from "@/lib/validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { Metadata } from "next";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import ProgressBar from "./_components/progress-bar";
import RegistrationFormImg from "./_components/registration-form-img";
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
    },
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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

    if (currentStep === steps.length - 1) {
      // run some code
      console.log("last step");
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
          className="overflow-hidden rounded-2xl bg-backgroundLightColor shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl"
          id="register"
        >
          <div className="flex flex-col-reverse md:flex-row">
            <div className="flex flex-col gap-4 md:flex-[1.5]">
              <div className="flex flex-col gap-12">
                <ProgressBar
                  progressPercentage={progressBarPercentage}
                  className="ease-[cubic-bezier(0.4,0,0.2,1)] rounded-2xl bg-primaryColor transition-all duration-700"
                />
                <div className="flex flex-col gap-12 p-4 pb-8 text-black">
                  {/* FORM */}
                  <div className="flex flex-col gap-4">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(processForm)}>
                        {currentStep === 0 && (
                          <motion.div
                            initial={{
                              x: delta >= 0 ? "50%" : "-50%",
                              opacity: 0,
                            }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                                          className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
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
                                          className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
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
                                          className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                          autoComplete="email"
                                        />
                                      </FormControl>
                                      <FormMessage className="text-red-400" />
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
                                        <Input
                                          {...field}
                                          type="tel"
                                          name="phoneNumber"
                                          placeholder="Enter your phone number"
                                          className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                          autoComplete="phone"
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
                                          type="text"
                                          name="age"
                                          placeholder="Enter your age"
                                          className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
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
                                        <Input
                                          {...field}
                                          type="text"
                                          name="dateOfBirth"
                                          placeholder="Enter your date of birth"
                                          className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                          autoComplete="date-of-birth"
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
                                  name="gender"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Gender</FormLabel>
                                      <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                      >
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select a gender" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          <SelectItem value="male">
                                            Male
                                          </SelectItem>
                                          <SelectItem value="female">
                                            Female
                                          </SelectItem>
                                          <SelectItem value="other">
                                            Other
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
                                          className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
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
                                          <SelectTrigger>
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
                                          className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                          autoComplete="instagram-username"
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="sm:col-span-6">
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
                                          className="block w-full flex-1 rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                          autoComplete="how-did-you-hear-about-us"
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
                        {/* THANK YOU PAGE */}
                        {currentStep === 3 && (
                          <>
                            <h2 className="text-base font-semibold leading-7 text-gray-900">
                              Complete
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                              Thank you for your submission, kindly check your
                              email
                            </p>
                          </>
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
                          className="disabled:opacity-50' px-8 disabled:cursor-not-allowed"
                        >
                          Prev
                        </Button>
                        <Button
                          variant={"kalon"}
                          className="px-8 disabled:cursor-not-allowed disabled:opacity-50"
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
            <RegistrationFormImg />
          </div>
        </section>
      </div>
    </main>
  );
}
