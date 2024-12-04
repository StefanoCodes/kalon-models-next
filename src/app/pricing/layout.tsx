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
    <section id="pricing" className="container px-4 py-10 md:pb-20 xl:px-0">
      {children}
    </section>
  );
}
