import PrimaryButton from "@/components/buttons/primary-button";
import Heading from "../about/_components/heading";
import Modal from "@/components/modal";
import ShimmerDotConcept from "./_components/shimmer-dot";
import ShimmerShapes from "./_components/shimmer-dot";

export default function Testing() {
  return (
    <div className="container py-10 xl:px-0">
      <div className="flex flex-col gap-8">
        <Heading headingSize="h1">Stef's Hidden Playground</Heading>
        <div className="flex flex-col items-start gap-8">
          <Modal />
          <PrimaryButton
            variant="outline"
            className="w-fit rounded-[8px]"
            innerClassName="rounded-[8px]"
          >
            Transfer
          </PrimaryButton>
          <main
            style={{
              margin: 0,
              padding: 0,
              overflow: "hidden",
            }}
          >
            <ShimmerShapes />
          </main>
        </div>
      </div>
    </div>
  );
}
