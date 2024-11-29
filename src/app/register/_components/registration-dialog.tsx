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
import { AnimatePresence, motion } from "framer-motion";
export type ageRangeTypes = "lessThan18" | "18to25" | "morethan25" | undefined;
export default function RegistrationDialog() {
  const [selectedAge, setSelectedAge] = useState<ageRangeTypes>(undefined);

  return (
    <>
      <div className="flex flex-col gap-8 md:gap-12">
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
      {selectedAge === `lessThan18` && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          key={new Date().getTime()}
        >
          <GuardianMultiStepForm setSelectedAge={setSelectedAge} />
        </motion.div>
      )}
      {(selectedAge === `morethan25` || selectedAge === `18to25`) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          key={new Date().getTime()}
        >
          <AdultMultiStepForm setSelectedAge={setSelectedAge} />
        </motion.div>
      )}
    </>
  );
}
