import content from "./about.config";
const { title } = content;
export default function About() {
  return (
    <main className="py-24">
      <section id="about" className="container">
        <div className="flex flex-col gap-16">
          <div>
            <h1 className="text-4xl font-medium leading-[1.5] tracking-tight text-whiteColor md:text-5xl lg:text-8xl">
              {title.main}
              <br />
              {title.sub}
            </h1>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="body-text">
                We have all had moments of doubt, standing in front of the
                mirror, wondering if we have what it takes. The truth? You do.
              </p>
              <p className="body-text">
                At Kalon we see more than just potential, we see people ready to
                redefine beauty on their own terms. This isn't just about about
                modelling; it's about providing the tools to shine on any stage,
                anywhere.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="body-text">
                Everyone, from every background, has a story worth sharing. We
                believe beauty is found in diversity, strength, and confidence.
                Whether it's your first step on the runway or your hundredth,
                this is where you uncover your voice, embrace your and step into
                the spotlight with purpose.
              </p>
              <p className="body-text">
                At the heart of everything we do is the belief that empowerment
                changes everything. Because when you're empowered, the world
                takes notice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
