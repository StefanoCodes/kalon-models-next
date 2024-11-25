import { Button } from "@/components/ui/button";
import RegistrationSuccess from "./sucess-animation";
import Link from "next/link";

export default function Success() {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="flex flex-col gap-4 sm:col-span-3 md:items-start md:gap-8">
        <div className="flex flex-col gap-4">
          <div>
            <RegistrationSuccess />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="body-text text-2xl font-semibold">
              Registration Successful!
            </h2>
            <p className="body-text">
              Thank you for registering with Kalon Models.Your Application has
              been received and is being processed.
            </p>
          </div>
        </div>
        <Button asChild variant={"kalon"}>
          <Link href={"/about"}>Learn More About Us</Link>
        </Button>
      </div>
    </div>
  );
}
