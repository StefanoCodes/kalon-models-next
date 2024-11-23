import KalonTag from "@/components/kalon-tag";
import content from "./about.config";
import Hr from "@/components/hr";
import Image from "next/image";
const { title } = content;
export default function About() {
  return (
    <main className="py-24">
      <section id="about" className="container">
        <div className="flex flex-col gap-16">

          {/* FIRST PART OF THE CONTENT */}
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
                  At <KalonTag text="Kalon" />, we see more than just potential,
                  we see people ready to redefine beauty on their own terms. This
                  isn't just about modelling; it's about providing the tools
                  to shine on any stage, anywhere.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="body-text">
                  Everyone, from every background, has a story worth sharing. We
                  believe beauty is found in diversity, strength, and confidence.
                  Whether it's your first step on the runway or your hundredth,
                  this is where you uncover your voice, embrace your uniqueness, and step into
                  the spotlight with purpose.
                </p>
                <p className="body-text">
                  At the heart of everything we do is the belief that empowerment
                  changes everything. Because when you're empowered, the world
                  takes notice.
                </p>
              </div>
            </div>
            <Hr />
          </div>

          {/* SECOND PART OF THE CONTENT */}
          <div className="flex flex-col gap-16">
            {/* FIRST PART OF THE SECOND PART */}
            <div className="flex flex-col gap-8">
              {/* SERVICES */}
              <div className=" flex flex-col gap-16">
                <div className="flex items-center justify-between">
                  <div>
                    <h3>Services</h3>
                  </div>
                  <div>
                    <h3>Services</h3>
                  </div>
                  <div>
                    <h3>Services</h3>
                  </div>
                </div>
                <Hr gradient="dark" />
              </div>
              {/* AUTOBIOGRAPHY */}
              <div className="flex items-start justify-between gap-16">
                <Image
                  src={'/about/kalon_placeholder.jpg'}
                  alt="Kalon"
                  width={400}
                  height={400}
                  className=" object-cover"
                />

                <div>
                  {/* CONTENT */}
                  <div className="flex flex-col gap-5">
                    <p className="body-text">
                      My modeling journey began in 2017, but my career truly started in 2020. The first three years were particularly challenging—not due to rejection or missed opportunities, but because I didn’t receive the proper guidance.
                    </p>

                    <p className="body-text">
                      This led me to establishing Kalon Models in 2020, from there on out I made it my mission to create a supportive environment where models can thrive, ensuring that no one has to navigate the industry alone.
                    </p>

                    <div>
                      <Image
                        src={'/about/signature.svg'}
                        alt="Kalon"
                        width={400}
                        height={400}
                        className=" object-cover"
                      />
                      <p className="body-text">
                        Founder, Kalon Models
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            {/* BOTTOM CONTENT OF THE SECOND PART */}
          </div>
        </div>
      </section>
    </main>
  );
}
