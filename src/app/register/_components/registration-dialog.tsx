"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import GuardianMultiStepForm from "./guardian-multi-step-form";
import AdultMultiStepForm from "./adult-multi-step-form";
import { useState } from "react";
export type ageRangeTypes = "lessThan18" | "18to25" | "morethan25" | undefined;
export default function RegistrationDialog() {
  const [selectedAge, setSelectedAge] = useState<ageRangeTypes>(undefined);
  return (
    <>
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
              <SelectItem value="lessThan18" defaultValue={selectedAge}>
                Less Than 18
              </SelectItem>
              <SelectItem value="18to25">18-25</SelectItem>
              <SelectItem value="morethan25">Greater Than 25</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* TODO: check if they need to know the information regarding the age range if so we can pass it down as props to both components */}
      {selectedAge === `lessThan18` && (
        <GuardianMultiStepForm setSelectedAge={setSelectedAge} />
      )}
      {(selectedAge === `morethan25` || selectedAge === `18to25`) && (
        <AdultMultiStepForm setSelectedAge={setSelectedAge} />
      )}
    </>
  );
}
