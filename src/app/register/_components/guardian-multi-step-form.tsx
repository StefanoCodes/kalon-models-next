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
import {
  guardianRegistriationFormSchema,
  registriationFormSchema,
} from "@/lib/validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Success from "./sucess";
import Row from "@/components/row";
import { cn } from "@/lib/utils";
import GoBack from "./go-back";
import { ageRangeTypes } from "./registration-dialog";

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
    },
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
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
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <div className="flex flex-col gap-8 py-4 md:gap-12 md:py-8">
      {/* when the button is clicked we want to set the selectedAge to undefined */}
      {currentStep === 0 && (
        <motion.div
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-50%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <GoBack onClick={() => setSelectedAge(undefined)} />
        </motion.div>
      )}
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
                          <FormMessage />
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
                          <FormMessage />
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
                          <FormMessage />
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
                          <FormMessage />
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
                  <div className="md:flex-1">
                    <FormField
                      control={form.control}
                      name="preferedMethodOfContact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prefered Method of Contact</FormLabel>
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
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </Row>
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
