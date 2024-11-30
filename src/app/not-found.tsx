import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100dvh-72px)] flex-col items-center justify-center bg-white px-4 text-gray-900">
      <h1 className="mb-4 text-center text-6xl font-bold">404</h1>
      <h2 className="mb-6 text-center text-4xl font-semibold">
        Page Not Found
      </h2>
      <p className="text-colorBlack mb-8 max-w-md text-center text-xl">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Button
        variant="kalon"
        asChild
        className="rounded px-6 py-3 text-blackColor transition-opacity duration-300 hover:opacity-80"
      >
        <Link href="/">Go Back Home</Link>
      </Button>
    </div>
  );
}
