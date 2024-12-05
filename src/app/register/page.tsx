import { Metadata } from "next";
import Heading from "../about/_components/heading";
import RegistrationDialog from "./_components/registration-dialog";

export const metadata: Metadata = {
  title: "Register | #1 modelling academy in South Africa",
  description:
    "Register with Kalon Models today and begin your journey to becoming a professional model.",
};

export default async function Register({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const course = searchParams.course;
  console.log(course);
  return (
    <section className="container px-4 py-10 xl:px-0" id="register">
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
        <RegistrationDialog course={course} />
      </div>
    </section>
  );
}
