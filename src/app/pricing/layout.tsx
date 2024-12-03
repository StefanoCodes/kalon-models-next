import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Our pricing plans",
  description: "Explore our pricing plans.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section id="pricing" className="container px-5 py-10 md:px-0">
      {children}
    </section>
  );
}
