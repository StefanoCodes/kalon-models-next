import { getAllGalleryItems } from "@/lib/gallery";
import AdultMultiStepForm from "./adult-multi-step-form-steps/adult-multi-step-form";
import GuardianMultiStepForm from "./guardian-multi-step-form-steps/guardian-multi-step-form";
// import GuardianMultiStepForm from "./guardian-multi-step-form-steps/guardian-multi-step-form";
export type ageRangeTypes = "lessThan18" | "18to25" | "morethan25" | undefined;
// export type courseTypes = "adults" | "kids" | undefined; // with the kids integration
export type courseTypes = "adults" | "teens" | "undefined";
export type membershipTypes =
  | "standard"
  | "premium"
  | "exclusive"
  | "undefined";
export default function RegistrationForm({
  courseName,
  membership,
}: {
  courseName: courseTypes;
  membership: membershipTypes;
}) {
  return (
    <>
      {courseName && (
        <p className="h-[3rem]">
          Registering for the
          <span className="capitalize">
            {" "}
            {courseName.charAt(0).toUpperCase() + courseName.slice(1)} course
          </span>
        </p>
      )}
      <>
        {courseName === `adults` && (
          <AdultMultiStepForm course={courseName} membership={membership} />
        )}
        {courseName === `teens` && (
          <GuardianMultiStepForm course={courseName} membership={membership} />
        )}
      </>
    </>
  );
}
