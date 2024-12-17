import PrimaryButton from "@/components/buttons/primary-button";
import { PlusIcon } from "lucide-react";

const team = [
  {
    name: "Manana Baloyi",
    role: "Founder",
    // image
  },
  {
    name: "Nkateko Baloyi",
    role: "Administrative Coordinator",
    // image
  },
  {
    name: "Mbhuri Baloyi",
    role: "Runway Coach",
    // image
  },
  {
    name: "Mikateko Mbhalati",
    role: "Pageant Coach",
    // image
  },
];

export function Person({
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
        <PrimaryButton
          className="max-w-fit rounded-md"
          innerClassName="rounded-md"
        >
          <PlusIcon className="size-4" />
        </PrimaryButton>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      {team.map(({ name, role }, idx) => {
        return <Person key={idx} name={name} role={role} />;
      })}
    </div>
  );
}
