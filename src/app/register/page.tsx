import { Metadata } from "next";
import Heading from "../about/_components/heading";
import RegistrationDialog from "./_components/registration-dialog";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Register | #1 modelling academy in South Africa",
  description:
    "Register with Kalon Models today and begin your journey to becoming a professional model.",
};

export default async function Register() {
  return (
    <section className="container py-10" id="register">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <Heading headingSize="h1">Registration</Heading>
          <p className="body-text max-w-prose text-mutedColor">
            Join Kalon Models and take the first step towards your modeling
            career. Fill out the form below and our team will review your
            application.
          </p>
        </div>
        <RegistrationDialog />
      </div>
    </section>
  );
}
