"use client";
import { contactFormSchema } from "@/lib/validations/schema";
// import { SubmitHandler, useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { TextArea } from "react-aria-components";

type Inputs = z.infer<typeof contactFormSchema>;
export default function ContactForm() {
  const form = useForm<Inputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      country: "",
      message: "",
    },
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    const formData = {
      ...data,
      name: data.name,
    };
    console.log(formData);
    // business logic here
    form.reset();
  };

  type FieldName = keyof Inputs;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(processForm)}>
        <div className="flex flex-col gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    name="name"
                    type="text"
                    placeholder="e.g.James Kinfolk"
                    className={`form-input max-w-full`}
                    autoComplete="name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    name="email"
                    type="email"
                    placeholder="e.g.james@kinfolk.com"
                    className={`form-input max-w-full`}
                    autoComplete="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    name="phoneNumber"
                    type="tel"
                    placeholder="e.g.+27641234567"
                    className={`form-input max-w-full`}
                    autoComplete="phoneNumber"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    name="companyName"
                    type="text"
                    placeholder="e.g.Kinfolk Inc."
                    className={`form-input max-w-full`}
                    autoComplete="companyName"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    name="country"
                    type="text"
                    placeholder="e.g.South Africa"
                    className={`form-input max-w-full`}
                    autoComplete="country"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-6">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <TextArea
                    {...field}
                    name="message"
                    placeholder="e.g.I would like to know more about your services"
                    autoComplete="message"
                    className={`placeholder-sentri-font-body h-32 w-full resize-none rounded-md border border-input bg-transparent p-2 text-paragraph outline-none focus:ring-0`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
