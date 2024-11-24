import { z } from "zod";
const genderEnum = z.enum(["Male", "Female", "Other"]);
const preferedMethodOfContactEnum = z.enum(["Whatsapp", "Email"]);

// zod schema for the registration form
export const registriationFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  surname: z
    .string()
    .min(2, { message: "Surname must be at least 2 characters" })
    .max(50, { message: "Surname must be less than 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters" })
    .max(15, { message: "Phone number must be less than 15 characters" }),
  age: z
    .string()
    .min(1, { message: "Age must be at least 1 character" })
    .max(3, { message: "Age must be less than 3 characters" }),
  dateOfBirth: z.date({
    message: "Date of birth is required",
  }),
  gender: genderEnum,
  cityResidingIn: z.string().min(2, { message: "City is required" }),
  preferedMethodOfContact: preferedMethodOfContactEnum,
  instgramUsername: z
    .string()
    .min(1, { message: "Instagram username is required" }),
  howDidYouHearAboutUs: z
    .string()
    .optional()
    .or(
      z.string().min(2, { message: "How did you hear about us is required" }),
    ),
});
