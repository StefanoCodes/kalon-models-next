import AdultMultiStepForm from "./adult-multi-step-form-steps/adult-multi-step-form";
import GuardianMultiStepForm from "./guardian-multi-step-form-steps/guardian-multi-step-form";
// import GuardianMultiStepForm from "./guardian-multi-step-form-steps/guardian-multi-step-form";
export type ageRangeTypes = "lessThan18" | "18to25" | "morethan25" | undefined;
// export type courseTypes = "adults" | "kids" | undefined; // with the kids integration
export type courseTypes = "adults" | "teens" | "undefined";
export default function RegistrationForm({ query }: { query: courseTypes }) {
  return (
    <>
      {query && (
        <p className="h-[3rem]">
          Registering for the
          <span className="capitalize">
            {" "}
            {query.charAt(0).toUpperCase() + query.slice(1)} course
          </span>
        </p>
      )}
      <>
        {query === `adults` && <AdultMultiStepForm course={query} />}
        {query === `teens` && <GuardianMultiStepForm course={query} />}
      </>
    </>
  );
}
