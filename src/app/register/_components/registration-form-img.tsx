import Image from "next/image";

export default function RegistrationFormImg() {
    return (
        <div className="relative md:flex-1 w-full min-h-[300px]">
            <Image
                fill
                src="/about/founder.webp"
                alt="founder image"
                className="w-full h-full rounded-t-2xl object-cover transition-all duration-300 ease-in-out md:rounded-l-none md:rounded-r-2xl"
                priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
                <h2 className="text-2xl font-bold">Academy Today</h2>
                <p className="mt-2 text-sm">Runway tommorow</p>
            </div>
        </div>
    )
}