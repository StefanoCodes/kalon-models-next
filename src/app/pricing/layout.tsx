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
    <section
      id="pricing"
      className="container min-h-screen-mobile py-10 md:min-h-screen-desktop xl:px-0"
    >
      {children}
    </section>
  );
}
