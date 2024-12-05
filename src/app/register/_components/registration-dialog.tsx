"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import AdultMultiStepForm from "./adult-multi-step-form-steps/adult-multi-step-form";
import GuardianMultiStepForm from "./guardian-multi-step-form-steps/guardian-multi-step-form";
export type ageRangeTypes = "lessThan18" | "18to25" | "morethan25" | undefined;
export type courseTypes = "adults" | "kids" | "masterclass" | undefined;
export default function RegistrationDialog({
  course,
}: {
  course: string | string[] | undefined;
}) {
  const [selectedAge, setSelectedAge] = useState<ageRangeTypes>(undefined);
  const [query, setQuery] = useState<courseTypes>(undefined);
  const isQueryValid =
    course === `adults` || course === `kids` || course === `masterclass`;
  // we need to check that the query is valid and if it is we set the query to the course type
  useEffect(() => {
    if (course) {
      isQueryValid && setQuery(course as courseTypes);
    } else {
      setQuery(undefined);
    }
  }, [course]);

  return (
    <>
      {/* if they are not coming from the pricing page or the query is not valid we will render out the select */}
      {!query && (
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <Select
            onValueChange={(e) => {
              setSelectedAge(e as ageRangeTypes);
            }}
            value={selectedAge}
            defaultValue={selectedAge}
          >
            <SelectTrigger
              id="select-15"
              className={cn(
                "max-w-sm rounded-md border-b-0 bg-tertiaryColor p-4 py-6 text-secondaryColor",
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
      )}
      {query && (
        <p>
          Registering for the
          <span className="capitalize">
            {" "}
            {query.charAt(0).toUpperCase() + query.slice(1)} course
          </span>
        </p>
      )}

      {/* once they select an age we will render out the form */}
      {selectedAge && selectedAge === "lessThan18" && <GuardianMultiStepForm />}
      {selectedAge && selectedAge === "18to25" && <AdultMultiStepForm />}
      {selectedAge && selectedAge === "morethan25" && <AdultMultiStepForm />}

      {/* if they are coming from the pricing page */}
      <>
        {/* if there is a query we want to pass that down to the form component so that we dont need to show the select button in the end if they already selected a course there */}
        {/* render out the last input of the form based on the query */}
        {query === `kids` && <GuardianMultiStepForm course={query} />}
        {query === `adults` && <AdultMultiStepForm course={query} />}
        {query === `masterclass` && <AdultMultiStepForm course={query} />}
      </>
    </>
  );
}
