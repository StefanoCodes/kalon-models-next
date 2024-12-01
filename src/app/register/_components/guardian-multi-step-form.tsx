"use client";
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
import { guardianRegistriationFormSchema } from "@/lib/validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Success from "./sucess";
import Row from "@/components/row";
import { cn } from "@/lib/utils";
import { ageRangeTypes } from "./registration-dialog";
import { format } from "date-fns";
import {
  DateField,
  DateInput,
  DateSegment,
  FieldError,
} from "react-aria-components";

type Inputs = z.infer<typeof guardianRegistriationFormSchema>;

const steps = [
  {
    id: "Step 1",
    fields: ["name", "surname", "email", "phoneNumber"],
  },
  {
    id: "Step 2",
    fields: [
      "preferedMethodOfContact",
      "studentName",
      "studentSurname",
      "studentDateOfBirth",
    ],
  },
  {
    id: "Step 3",
    fields: [
      "studentGender",
      "studentCityResidingIn",
      "studentEmail",
      "studentPhoneNumber",
    ],
  },
  {
    id: "Step 4",
    fields: [
      "studentInstagramUsername",
      "studentPreferedMethodOfContact",
      "studentHowDidYouHearAboutUs",
    ],
  },
  { id: "Step 5", name: "Complete" },
];

export default function GuardianMultiStepForm({
  setSelectedAge,
}: {
  setSelectedAge: (age: ageRangeTypes) => void;
}) {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const form = useForm<z.infer<typeof guardianRegistriationFormSchema>>({
    resolver: zodResolver(guardianRegistriationFormSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      preferedMethodOfContact: "whatsapp",
      studentName: "",
      studentSurname: "",
      studentDateOfBirth: "",
      studentGender: undefined,
      studentCityResidingIn: "",
      studentEmail: "",
      studentPhoneNumber: "",
      studentInstagramUsername: "",
      studentPreferedMethodOfContact: "whatsapp",
      studentHowDidYouHearAboutUs: "",
    },
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    // business logic here
    console.log(data);
    // we will check for any empty fields and preset them with n/a
    const formData = {
      ...data,
      studentEmail: data.studentEmail || "n/a",
      studentPhoneNumber: data.studentPhoneNumber || "n/a",
      studentInstagramUsername: data.studentInstagramUsername || "n/a",
    };
    console.log(formData);
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
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <div className="flex flex-col gap-8 py-8 md:gap-12 md:py-12">
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
              <div className="flex min-h-[18rem] flex-col gap-4 md:min-h-0 md:gap-8">
                <Row className="flex-col gap-4 md:flex-row">
                  {/* NAME */}
                  <div className="md:flex-1">
                    <FormField
                      control={form.control}
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
                      control={form.control}
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
                      control={form.control}
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
                      control={form.control}
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
              <div className="flex min-h-[18rem] flex-col gap-4 md:min-h-0 md:gap-8">
                <Row className="flex-col gap-4 md:flex-row">
                  {/* Guardian Prefered Method Of Contact */}
                  <div className="md:flex-1">
                    <FormField
                      control={form.control}
                      name="preferedMethodOfContact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Guardian Prefered Method of Contact
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger
                                className={cn(
                                  "form-input px-0",
                                  `md:max-w-[88%]`,
                                )}
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
                  {/* Student Name */}
                  <div className="md:flex-1">
                    <FormField
                      control={form.control}
                      name="studentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              name="studentName"
                              type="text"
                              placeholder="Enter your student name"
                              className="form-input"
                              autoComplete="studentName"
                            />
                          </FormControl>
                          <FormMessage className="mt-2" />
                        </FormItem>
                      )}
                    />
                  </div>
                </Row>
                <Row className="flex-col gap-4 md:flex-row">
                  {/* Student Surname */}
                  <div className="md:flex-1">
                    <FormField
                      control={form.control}
                      name="studentSurname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student Surname</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              name="studentSurname"
                              type="text"
                              placeholder="Enter your student surname"
                              className="form-input"
                              autoComplete="studentSurname"
                            />
                          </FormControl>
                          <FormMessage className="mt-2" />
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* Student Date of Birth */}
                  <div className="md:flex-1">
                    <FormField
                      control={form.control}
                      name="studentDateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student Date of Birth</FormLabel>
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
                                console.log(birthDate);
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
                          <FormMessage className="mt-2" />
                        </FormItem>
                      )}
                    />
                  </div>
                </Row>
              </div>
            </motion.div>
          )}
          {/* STEP 3  */}
          {currentStep === 2 && (
            <motion.div
              initial={{
                x: delta >= 0 ? "50%" : "-50%",
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex min-h-[18rem] flex-col gap-4 md:min-h-0 md:gap-8">
                <Row className="flex-col gap-4 md:flex-row">
                  {/* Student Gender */}
                  <div className="md:flex-1">
                    <FormField
                      control={form.control}
                      name="studentGender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student Gender</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger
                                id="select-15"
                                className="form-input px-0"
                              >
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
                      control={form.control}
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
                <Row className="flex-col gap-4 md:flex-row">
                  {/* Student Email */}
                  <div className="md:flex-1">
                    <FormField
                      control={form.control}
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
                      control={form.control}
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
          )}
          {/* STEP 4 */}
          {currentStep === 3 && (
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
                      control={form.control}
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
                      control={form.control}
                      name="studentPreferedMethodOfContact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Student Prefered Method of Contact
                          </FormLabel>
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
                      control={form.control}
                      name="studentHowDidYouHearAboutUs"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Student How Did You Hear About Us
                          </FormLabel>
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
                </Row>
              </div>
            </motion.div>
          )}
          {/* STEP 5 / SUCCESS PAGE */}
          {currentStep === 4 && (
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
      {/* BUTTONS NEXT AND PREV */}
      <div className="flex w-full justify-end gap-4 md:max-w-[88%] md:items-center">
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
  );
}
