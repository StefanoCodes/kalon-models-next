import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Our pricing plans",
  description: "Explore our pricing plans.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="container flex min-h-screen-mobile flex-col py-10 md:min-h-screen-desktop xl:px-0"
      id="register"
    >
      {children}
    </section>
  );
}
