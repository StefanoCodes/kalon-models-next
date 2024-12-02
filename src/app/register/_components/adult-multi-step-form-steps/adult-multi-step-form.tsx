"use client";
import { Form } from "@/components/ui/form";
import { registriationFormSchema } from "@/lib/validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import FormNav from "../form-nav";
import StepOne from "./step-one";
import StepThree from "./step-three";
import StepTwo from "./step-two";
import Success from "../sucess";

type Inputs = z.infer<typeof registriationFormSchema>;
const steps = [
  {
    id: "Step 1",
    fields: ["name", "surname", "email", "phoneNumber"],
  },
  {
    id: "Step 2",
    fields: [
      "dateOfBirth",
      "gender",
      "cityResidingIn",
      "preferedMethodOfContact",
    ],
  },
  {
    id: "Step 3",
    fields: [
      "instagramUsername",
      "howDidYouHearAboutUs",
      "whyWouldYouLikeToJoinKalonModels",
    ],
  },

  // we still need to figure out the kids component adding the guardiant stuff

  { id: "Step 4", name: "Complete" },
];

export default function AdultMultiStepForm() {
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
    if (!isDataValid.success) return;
    console.log(isDataValid.data);
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
    <div className="flex flex-col gap-8 py-8 md:gap-12 md:py-12">
      {/* FORM */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processForm)}>
          {/* STEP 1 */}
          {currentStep === 0 && <StepOne delta={delta} />}
          {/* STEP 2 */}
          {currentStep === 1 && <StepTwo delta={delta} />}
          {/* STEP 3 */}
          {currentStep === 2 && <StepThree delta={delta} />}
          {/* STEP 4 / SUCCESS PAGE */}
          {currentStep === 3 && <Success delta={delta} />}
        </form>
      </Form>
      {/* BUTTONS NEXT AND PREV */}
      <div className="flex w-full justify-end gap-4 md:max-w-[88%] md:items-center">
        {/* FORM NAV */}
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
