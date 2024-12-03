import ContactForm from "./_components/contact-form";
import ContactHeading from "./_components/heading";

export default function Contact() {
  return (
    <section id="about" className="container px-5 py-10 md:px-0">
      <div className="mx-auto flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-12">
        <ContactHeading />
        <div className="lg:flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
