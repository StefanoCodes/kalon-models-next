"use client";
import { Form } from "@/components/ui/form";
import { guardianRegistriationFormSchema } from "@/lib/validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useSubmit } from "@formspree/react";
import { z } from "zod";
import FormNav from "../form-nav";
import Success from "../sucess";
import StepFour from "./step-four";
import StepOne from "./step-one";
import StepThree from "./step-three";
import StepTwo from "./step-two";

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

export default function GuardianMultiStepForm() {
  const finalStep = steps.length - 1;
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const delta = currentStep - previousStep;

  const form = useForm<Inputs>({
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
  const {
    handleSubmit,
    setError,
    trigger,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = form;

  const submit = useSubmit<Inputs>(
    process.env.REACT_APP_REACT_HOOK_FORM_ID as string,
    {
      onError(errs) {
        const formErrs = errs.getFormErrors();
        setFormErrors(formErrs.map((e) => e.message));
        for (const { code, message } of formErrs) {
          setError(`root.${code}`, {
            type: code,
            message,
          });
        }

        const fieldErrs = errs.getAllFieldErrors();
        for (const [field, errs] of fieldErrs) {
          setError(field, {
            message: errs.map((e) => e.message).join(", "),
          });
        }
      },
    },
  );

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) return;

    if (currentStep < finalStep) {
      if (currentStep === finalStep - 1) {
        await handleSubmit(submit)();
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
        <form onSubmit={handleSubmit(submit)}>
          {/* STEP 1 */}
          {currentStep === 0 && <StepOne delta={delta} />}
          {/* STEP 2 */}
          {currentStep === 1 && <StepTwo delta={delta} />}
          {/* STEP 3  */}
          {currentStep === 2 && <StepThree delta={delta} />}
          {/* STEP 4 */}
          {currentStep === 3 && <StepFour delta={delta} />}
          {/* STEP 5 / SUCCESS PAGE / ERRORS */}
          {currentStep === 4 && isSubmitSuccessful && <Success delta={delta} />}
          {currentStep === 4 && !isSubmitSuccessful && (
            <div className="flex flex-col gap-4">
              <p>did not process because we will still add the form id </p>
              <pre>
                Errors:{" "}
                <span className="text-red-500">
                  {formErrors.map((e) => e).join(", ")}
                </span>
              </pre>
            </div>
          )}
        </form>
      </Form>
      {/* BUTTONS NEXT AND PREV */}
      <div className="flex w-full justify-end gap-4 md:max-w-[88%] md:items-center">
        {currentStep !== steps.length - 1 && (
          <FormNav
            isPending={isSubmitting}
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
