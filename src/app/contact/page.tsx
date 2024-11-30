import Heading from "../about/_components/heading";
import ContactForm from "./_components/contact-form";
import ContactHeading from "./_components/heading";

export default function Contact() {
  return (
    <main className="w-full px-5 py-10 md:px-10">
      <section id="about" className="container">
        <div className="mx-auto flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-12">
          <ContactHeading />
          <div className="lg:flex-1">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
