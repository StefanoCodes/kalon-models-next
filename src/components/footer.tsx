import Link from "next/link";
import Hr from "./hr";

const lastestYear = new Date().getFullYear();
export default function Footer() {
    return (
        <footer className="bg-blackColor rounded-lg shadow py-8 px-8">
            <div className="w-full flex items-center flex-col gap-4">
                <Hr gradient="dark" className="opacity-50" />
                <div className="flex flex-col md items-center md:justify-between w-full pt-4">
                    <div className="flex flex-col gap-8 md:flex-row justify-center items-center md:justify-between w-full">
                        <Link href="https://flowbite.com/" className="flex items-center">
                            <img src="/Kalon.svg" className="h-8" alt="Flowbite Logo" />
                        </Link>

                        <span className="block text-sm text-mutedColor">© {lastestYear} Kalon All Rights Reserved.</span>

                    </div>
                </div>
            </div>
        </footer>

    )

}