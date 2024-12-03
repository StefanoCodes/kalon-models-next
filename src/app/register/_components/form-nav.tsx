import { Button } from "@/components/ui/button";

export default function FormNav({
  currentStep,
  prev,
  next,
  steps,
  isPending,
}: {
  currentStep: number;
  prev: () => void;
  next: () => void;
  isPending: boolean;
  steps: (
    | {
        id: string;
        fields: string[];
        name?: undefined;
      }
    | {
        id: string;
        name: string;
        fields?: undefined;
      }
  )[];
}) {
  return (
    <>
      <Button
        disabled={currentStep === 0}
        onClick={prev}
        variant={"kalon"}
        className="disabled:opacity-50' bg-tertiaryColorRgba px-8 disabled:cursor-not-allowed"
      >
        Prev
      </Button>
      <Button
        variant={"kalon"}
        className="bg-tertiaryColorRgba px-8 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={next}
        disabled={currentStep === steps.length - 1 || isPending}
      >
        {isPending ? "Submitting..." : "Next"}
      </Button>
    </>
  );
}
