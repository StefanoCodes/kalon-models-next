import { z } from "zod";
const genderEnum = z.enum(["male", "female", "other"], {
  message: "Invalid Entry",
});
const preferedMethodOfContactEnum = z.enum(["whatsapp", "email"], {
  message: "Invalid Entry",
});
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
  age: z.coerce
    .number()
    .min(1, {
      message: "Invalid age",
    })
    .max(90, {
      message: "Invalid age",
    }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required" }),
  gender: genderEnum,
  cityResidingIn: z.string().min(2, { message: "City is required" }),
  preferedMethodOfContact: preferedMethodOfContactEnum,
  instagramUsername: z
    .string()
    .min(1, { message: "Instagram username is required" }),
  howDidYouHearAboutUs: z
    .string()
    .optional()
    .or(
      z.string().min(2, { message: "How did you hear about us is required" }),
    ),
});
