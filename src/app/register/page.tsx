import { Metadata } from "next";
import Image from "next/image";
import ProgressBar from "./_components/progress-bar";
import { WordFadeIn } from "@/components/motion/text-slide";
import { FadeText } from "@/components/motion/text-fade";
import RegistrationFormImg from "./_components/registration-form-img";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = {
    title: "Register | #1 modelling academy in South Africa",
    description: "The Masterclass",
};


export default function Register() {
    return (
        <main className=" py-10 px-5 w-full md:px-10">
            <div className="container flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <WordFadeIn words="Registration" delay={0.4} className="text-3xl md:text-4xl font-semibold lg:text-5xl" />
                    <FadeText text="This is a Multi-Part Form Demo! In this demonstration, we will showcase the powerful new forms tools available." className="body-text text-mutedColor" />
                </div>
                {/* MAIN BOX */}
                <section className="overflow-hidden rounded-2xl bg-backgroundLightColor shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl rounded-l-none" id="register">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="flex flex-col flex-[1.5] gap-4">
                            <div className="flex flex-col gap-4">
                                <ProgressBar progressPercentage={33} className="bg-primaryColor" />
                                <div className="text-black flex flex-col gap-8 p-4">
                                    {/* INPUTS */}
                                    <div className="flex flex-col gap-4">


                                        <p>CONTENT</p>
                                        <p>CONTENT</p>
                                        <p>CONTENT</p>
                                        <p>CONTENT</p>
                                        <p>CONTENT</p>
                                        <p>CONTENT</p>
                                        <p>CONTENT</p>
                                        <p>CONTENT</p>
                                    </div>
                                    {/* BUTTONS NEXT AND PREV */}
                                    <div className="justify-end flex gap-4 items-center w-full">
                                        <Button variant={'kalon'} className="opacity-75 px-8">
                                            Prev
                                        </Button>
                                        <Button variant={"kalon"} className="px-8">
                                            Next
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <RegistrationFormImg />
                    </div>
                </section>
            </div>
        </main>

    );
}
