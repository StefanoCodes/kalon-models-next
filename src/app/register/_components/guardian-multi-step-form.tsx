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
import StepOne from "./guardian-multi-step-form-steps/step-one";
import StepTwo from "./guardian-multi-step-form-steps/step-two";
import StepThree from "./guardian-multi-step-form-steps/step-three";
import StepFour from "./guardian-multi-step-form-steps/step-four";
import FormNav from "./adult-multi-step-form-steps/form-nav";

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
          {currentStep === 0 && <StepOne delta={delta} />}
          {/* STEP 2 */}
          {currentStep === 1 && <StepTwo delta={delta} />}
          {/* STEP 3  */}
          {currentStep === 2 && <StepThree delta={delta} />}
          {/* STEP 4 */}
          {currentStep === 3 && <StepFour delta={delta} />}
          {/* STEP 5 / SUCCESS PAGE */}
          {currentStep === 4 && <Success delta={delta} />}
        </form>
      </Form>
      {/* BUTTONS NEXT AND PREV */}
      <div className="flex w-full justify-end gap-4 md:max-w-[88%] md:items-center">
        {currentStep !== steps.length - 1 && (
          <FormNav
            currentStep={currentStep}
            next={next}
            prev={prev}
            steps={steps}
          />
        )}
      </div>
    </div>
  );
}
