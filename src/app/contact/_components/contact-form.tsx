"use client";

import { contactFormSchema } from "@/lib/validations/schema";

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
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type Inputs = z.infer<typeof contactFormSchema>;
export default function ContactForm() {
  const { toast } = useToast();
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
    const isValidData = contactFormSchema.safeParse(data);
    if (!isValidData.success) {
      toast({
        title: "Form Error",
        description: "Please check your form for errors",
        duration: 5000,
      });
      return;
    }
    // business logic here
    console.log(data);
    toast({
      title: "Message Sent",
      description: "We will get back to you as soon as possible",
    });
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
                <FormMessage className="mt-2" />
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
                <FormMessage className="mt-2" />
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
                <FormMessage className="mt-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
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
                <FormMessage className="mt-2" />
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
                <FormMessage className="mt-2" />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button variant="kalon">Get In Touch</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
