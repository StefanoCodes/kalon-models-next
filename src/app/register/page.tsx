import { Metadata } from "next";
import Heading from "../about/_components/heading";
import RegistrationDialog from "./_components/registration-dialog";
export const metadata: Metadata = {
  title: "Register | #1 modelling academy in South Africa",
  description:
    "Register with Kalon Models today and begin your journey to becoming a professional model.",
};

export default function Register() {
  return (
    <main className="min-h-screen-mobile md:min-h-screen-desktop w-full px-5 py-10 md:px-10">
      <div className="container flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <Heading headingSize="h1">Registration</Heading>
          <p className="body-text text-mutedColor">
            Join Kalon Models and take the first step towards your modeling
            career. Fill out the form below and our team will review your
            application.
          </p>
        </div>
        {/* Registration  */}
        <section className="min-h-full overflow-hidden" id="register">
          <RegistrationDialog />
        </section>
      </div>
    </main>
  );
}
