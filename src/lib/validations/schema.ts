import { z } from "zod";
import {
  ADULT_MAX_AGE,
  ADULT_MIN_AGE,
  STUDENT_MIN_AGE,
  STUDENT_MAX_AGE,
} from "../constants";

const genderEnum = z.enum(["male", "female", "other"], {
  message: "Gender is required",
});
const preferedMethodOfContactEnum = z.enum(["whatsapp", "email"], {
  message: "Prefered method of contact is required",
});
const adultCourseEnum = z.enum(["adults"], {
  message: "Course is required",
});
const guardianCourseEnum = z.enum(["teens"], {
  message: "Course is required",
});
const MemebershipsEnum = z.enum(
  ["standard", "premium", "exclusive", "undefined"],
  {
    message: "Membership is required",
  },
);

// ADULT ZOD SCHEMA for the registration form
export const registriationFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  surname: z
    .string()
    .trim()
    .min(2, { message: "Surname must be at least 2 characters" })
    .max(50, { message: "Surname must be less than 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z
    .string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 characters" })
    .max(15, { message: "Phone number must be less than 15 characters" }),
  dateOfBirth: z
    .string()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, {
      message: "Date is required",
    })
    .refine(
      (date) => {
        const [, , year] = date.split("/").map(Number);
        const currentYear = new Date().getFullYear();
        const age = currentYear - year;
        return age >= ADULT_MIN_AGE && age <= ADULT_MAX_AGE;
      },
      {
        message: `Age must be between ${ADULT_MIN_AGE} and ${ADULT_MAX_AGE} years`,
      },
    ),
  gender: genderEnum,
  cityResidingIn: z.string().trim().min(2, { message: "City is required" }),
  preferedMethodOfContact: preferedMethodOfContactEnum,
  instagramUsername: z
    .string()
    .trim()
    .min(1, { message: "Instagram username is required" }),
  howDidYouHearAboutUs: z
    .string()
    .trim()
    .min(2, { message: "How did you hear about us is required" }),
  whyWouldYouLikeToJoinKalonModels: z
    .string()
    .trim()
    .min(2, { message: "Reason is required" }),
  selectedCourse: adultCourseEnum,
  membership: MemebershipsEnum,
});
// GUARDIAN ZOD SCHEMA for the registartion form
export const guardianRegistriationFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  surname: z
    .string()
    .trim()
    .min(2, { message: "Surname must be at least 2 characters" })
    .max(50, { message: "Surname must be less than 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z
    .string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 characters" })
    .max(15, { message: "Phone number must be less than 15 characters" }),
  preferedMethodOfContact: preferedMethodOfContactEnum,
  studentName: z
    .string()
    .trim()
    .min(2, { message: "Student name is required" }),
  studentSurname: z
    .string()
    .trim()
    .min(2, { message: "Student surname is required" }),
  studentDateOfBirth: z
    .string()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, {
      message: "Date is required",
    })
    .refine(
      (date) => {
        const [, , year] = date.split("/").map(Number);
        const currentYear = new Date().getFullYear();
        const age = currentYear - year;
        return age >= STUDENT_MIN_AGE && age <= STUDENT_MAX_AGE;
      },
      {
        message: `Age must be between ${STUDENT_MIN_AGE} and ${STUDENT_MAX_AGE} years`,
      },
    ),
  studentGender: genderEnum,

  studentCityResidingIn: z
    .string()
    .trim()
    .min(2, { message: "City is required" }),

  studentEmail: z
    .string()
    .optional()
    .refine(
      (email) => email === "" || z.string().email().safeParse(email).success,
      { message: "Invalid email address" },
    ),
  studentPhoneNumber: z
    .string()
    .trim()
    .optional()
    .refine(
      (phoneNumber) =>
        phoneNumber === "" ||
        z
          .string()
          .min(10, { message: "Phone number must be at least 10 characters" })
          .max(15, { message: "Phone number must be less than 15 characters" })
          .safeParse(phoneNumber).success,
      { message: "Invalid phone number" },
    ),
  studentInstagramUsername: z
    .string()
    .trim()
    .optional()
    .refine(
      (username) =>
        username === "" || z.string().min(3).safeParse(username).success,
      {
        message: "Instagram username must be at least 3 characters",
      },
    ),
  studentPreferedMethodOfContact: preferedMethodOfContactEnum,
  studentHowDidYouHearAboutUs: z
    .string()
    .trim()
    .min(2, { message: "How did you hear about us is required" }),
  selectedCourse: guardianCourseEnum,
  membership: MemebershipsEnum,
});
// CONTACT FORM ZOD SCHEMA
export const contactFormSchema = z.object({
  name: z.string().trim().min(2, { message: "Name is required" }),
  email: z.string().trim().email({ message: "Invalid email address" }),
  phoneNumber: z
    .string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 characters" })
    .max(15, { message: "Phone number must be less than 15 characters" }),
  companyName: z.string().trim().optional(),
  country: z.string().trim().min(2, { message: "Country is required" }),
  message: z.string().trim().optional(),
});
