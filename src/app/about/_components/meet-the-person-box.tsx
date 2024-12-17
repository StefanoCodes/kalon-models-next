import PrimaryButton from "@/components/buttons/primary-button";

export default function MeetPerson({
  name,
  role,
  image,
}: {
  name?: string;
  role?: string;
  image?: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      {/* image */}
      <div className="min-h-[17rem] min-w-[18rem] bg-black/5" />
      <div className="flex flex-row items-center justify-between">
        {/* founder content */}
        <div className="flex flex-col">
          <h5 className="text-base font-normal">{name || `Manana Baloyi`}</h5>
          <span className="text-base capitalize text-[#65697B]">
            {role || "Founder"}
          </span>
        </div>
        {/* button */}
        <PrimaryButton className="w-fit rounded-md" innerClassName="rounded-md">
          +
        </PrimaryButton>
      </div>
    </div>
  );
}
