import Hr from "@/components/hr";
import ContactForm from "./_components/contact-form";
import ContactHeading from "./_components/heading";

export default function Contact() {
  return (
    <section id="about" className="container px-4 py-10 xl:px-0">
      <div className="flex flex-col items-start justify-start gap-16">
        <div className="mx-auto flex w-full flex-col gap-12 lg:flex-row lg:items-start lg:gap-12">
          <ContactHeading />
          <div className="lg:flex-1">
            <ContactForm />
          </div>
        </div>
        <Hr gradient="tertiary" />
        {/* Social List  whatsapp, email and instragram */}
      </div>
    </section>
  );
}
