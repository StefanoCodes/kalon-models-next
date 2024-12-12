"use client";
import TextureButton from "@/components/buttons/primary-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { contactFormSchema } from "@/lib/validations/schema";
import { useSubmit } from "@formspree/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextArea } from "react-aria-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

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

  const {
    handleSubmit,
    setError,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = form;

  const submit = useSubmit<Inputs>(
    process.env.NEXT_PUBLIC_KALON_CONTACT_FORM_ID!,
    {
      onError(errs) {
        const formErrs = errs.getFormErrors();
        for (const { code, message } of formErrs) {
          setError(`root.${code}`, {
            type: code,
            message,
          });
        }

        const fieldErrs = errs.getAllFieldErrors();
        for (const [field, errs] of fieldErrs) {
          setError(field, {
            message: errs.map((e) => e.message).join(", "),
          });
        }
      },
    },
  );

  const submitForm: SubmitHandler<Inputs> = async (data) => {
    const { success } = contactFormSchema.safeParse(data);

    if (!success) {
      console.log(errors);
      return toast({
        title: "Form Error",
        description: "Please check your form for errors",
        duration: 5000,
      });
    }

    if (success) {
      try {
        await submit(data);
        toast({
          title: "Message Sent",
          description: "We will get back to you as soon as possible",
        });
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: "Something went wrong",
        });
      }
    }
    form.reset();
  };
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col justify-start gap-6">
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
                    className={`form-input`}
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
                    className={`form-input`}
                    autoComplete="email"
                  />
                </FormControl>
                <FormMessage className="mt-2" />
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
                    className={`form-input`}
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
                    className={`form-input`}
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
                    className={`form-input`}
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
          <TextureButton
            variant="kalon"
            size="sm"
            disabled={isSubmitting}
            className={cn(
              "w-full self-end xl:w-fit",
              isSubmitting && "opacity-75",
              isSubmitting && "cursor-not-allowed",
            )}
          >
            {isSubmitting ? "Sending..." : "Get In Touch"}
          </TextureButton>
        </div>
      </form>
    </Form>
  );
}
