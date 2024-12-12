import PrimaryButton from "@/components/buttons/primary-button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Heading from "../about/_components/heading";
import CoursesList from "./[slug]/_components/courses-list";
import RegistrationForm from "./_components/registration";

export const metadata: Metadata = {
  title: "Register | #1 modelling academy in South Africa",
  description:
    "Register with Kalon Models today and begin your journey to becoming a professional model.",
};
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Register({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const { course } = params;
  // decision to know what content to be displayed
  // const isCourseNameValid = course === `adults` || course === `kids`;
  const isCourseNameValid = course === `adults`;

  return (
    <div className="flex flex-col gap-8">
      {isCourseNameValid && (
        <PrimaryButton
          variant="outline"
          href="register"
          size="sm"
          className="w-fit"
        >
          <span className="flex items-center gap-2">
            <ArrowLeft className="size-4" />
            Go back
          </span>
        </PrimaryButton>
      )}
      {!isCourseNameValid && (
        <Heading headingSize="h1">Registration Info</Heading>
      )}
      {!isCourseNameValid && <CoursesList />}
      <div>{isCourseNameValid && <RegistrationForm query={course} />}</div>
    </div>
  );
}
