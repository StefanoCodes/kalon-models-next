import PrimaryButton from "@/components/buttons/primary-button";
import Heading from "../about/_components/heading";
import Modal from "@/components/modal";

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
        </div>
      </div>
    </div>
  );
}
