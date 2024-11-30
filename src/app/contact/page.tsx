import Heading from "../about/_components/heading";
import { content } from "./contact.config";
const { heading } = content;
export default function Contact() {
  return (
    <main className="w-full px-5 py-10 md:px-10">
      <section id="about" className="container">
        <div className="flex flex-col gap-16">
          <Heading headingSize="h1">{heading}</Heading>
        </div>
      </section>
    </main>
  );
}
