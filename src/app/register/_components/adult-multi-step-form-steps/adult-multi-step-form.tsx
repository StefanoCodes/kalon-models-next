"use client";
import { Form } from "@/components/ui/form";
import { registriationFormSchema } from "@/lib/validations/schema";
import { useSubmit } from "@formspree/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormNav from "../form-nav";
import Success from "../sucess";
import StepOne from "./step-one";
import StepThree from "./step-three";
import StepTwo from "./step-two";
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
      "membership",
    ],
  },

  // we still need to figure out the kids component adding the guardiant stuff

  { id: "Step 4", name: "Complete" },
];

export default function AdultMultiStepForm({ course }: { course?: "adults" }) {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const finalStep = steps.length - 1;

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
      selectedCourse: course,
      membership: undefined,
    },
  });
  const {
    handleSubmit,
    setError,
    trigger,
    getValues,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = form;

  const submit = useSubmit<Inputs>(
    process.env.NEXT_PUBLIC_REACT_APP_REACT_HOOK_FORM_ID_REGISTRATION_FORM!,
    {
      onError(errs) {
        const formErrs = errs.getFormErrors();
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
      // final form submission
      if (currentStep === finalStep - 1) {
        const { success } = registriationFormSchema.safeParse(getValues());
        if (success) {
          try {
            await handleSubmit(async (data) => {
              await submit(data);
            })();
          } catch (error) {
            console.error(error);
          }
        }
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
    <div className="flex flex-col gap-8 overflow-hidden py-0 md:gap-12 md:py-4">
      {/* FORM */}
      <Form {...form}>
        <form onSubmit={handleSubmit(submit)}>
          {/* STEP 1 */}
          {currentStep === 0 && <StepOne delta={delta} />}
          {/* STEP 2 */}
          {currentStep === 1 && <StepTwo delta={delta} />}
          {/* STEP 3 */}
          {currentStep === 2 && <StepThree delta={delta} course={course} />}
          {/* STEP 4 / SUCCESS PAGE */}
          {currentStep === finalStep && isSubmitSuccessful && (
            <Success delta={delta} />
          )}
          {currentStep === finalStep && !isSubmitSuccessful && (
            <div className="flex flex-col gap-4">
              <pre>Something went wrong, please try again</pre>
            </div>
          )}
        </form>
      </Form>
      {/* BUTTONS NEXT AND PREV */}
      <div className="flex w-full justify-end gap-4 md:items-center">
        {/* FORM NAV */}
        {currentStep !== steps.length - 1 && (
          <FormNav
            currentStep={currentStep}
            next={next}
            prev={prev}
            steps={steps}
            isPending={isSubmitting}
          />
        )}
      </div>
    </div>
  );
}
