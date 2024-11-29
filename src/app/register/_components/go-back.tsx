import { ArrowLeft } from "lucide-react";

export default function GoBack({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex cursor-pointer items-center gap-2" onClick={onClick}>
      <ArrowLeft className="h-4 w-4" />
      <span>Go Back</span>
    </div>
  );
}
