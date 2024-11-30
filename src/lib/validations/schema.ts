import { z } from "zod";
import { MAX_AGE } from "../constants";
import { MIN_AGE } from "../constants";
const genderEnum = z.enum(["male", "female", "other"], {
  message: "Invalid Entry",
});
const preferedMethodOfContactEnum = z.enum(["whatsapp", "email"], {
  message: "Invalid Entry",
});
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

        // Check if age is between 5 and 60 years
        return age >= MIN_AGE && age <= MAX_AGE;
      },
      {
        message: `Age must be between ${MIN_AGE} and ${MAX_AGE} years`,
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
