"use client";
import { FadeText } from "@/components/motion/text-fade";
import { WordFadeIn } from "@/components/motion/text-slide";
import { Metadata } from "next";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import GuardianMultiStepForm from "./_components/guardian-multi-step-form";
import AdultMultiStepForm from "./_components/adult-multi-step-form";
import Heading from "../about/_components/heading";

const metadata: Metadata = {
  title: "Register | #1 modelling academy in South Africa",
  description:
    "Register with Kalon Models today and begin your journey to becoming a professional model.",
};

type ageRangeTypes = "lessThan18" | "18to25" | "morethan25";

export default function Register() {
  const [selectedAge, setSelectedAge] = useState<ageRangeTypes | undefined>(
    undefined,
  );

  return (
    <main className="w-full px-5 py-10 md:px-10">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Heading headingSize="h1">Registration</Heading>
          <p className="body-text text-mutedColor">
            Join Kalon Models and take the first step towards your modeling
            career. Fill out the form below and our team will review your
            application.
          </p>
        </div>
        {/* MAIN BOX */}
        <section className="min-h-full overflow-hidden" id="register">
          <div className={cn("w-full", selectedAge && `hidden`)}>
            <div className="flex flex-col gap-8 md:gap-12">
              <Select
                onValueChange={(e) => {
                  setSelectedAge(e as ageRangeTypes);
                }}
              >
                <SelectTrigger
                  id="select-15"
                  className={cn(
                    "max-w-xl rounded-md border-b-0 bg-tertiaryColor p-4 py-6 text-secondaryColor",
                  )}
                >
                  <SelectValue placeholder="Select your age range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lessThan18">Less Than 18</SelectItem>
                  <SelectItem value="18to25">18-25</SelectItem>
                  <SelectItem value="morethan25">Greater Than 25</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {selectedAge === `lessThan18` && <GuardianMultiStepForm />}
          {(selectedAge === `morethan25` || selectedAge === `18to25`) && (
            <AdultMultiStepForm />
          )}
        </section>
      </div>
    </main>
  );
}
