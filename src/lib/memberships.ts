import { courses, memberships } from "@/app/register/register.config";

export const getAllMemberships = () => {
  return Object.values(courses).flat();
};
