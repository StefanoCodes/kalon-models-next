'use client';
import { Metadata } from "next";
import ProgressBar from "./_components/progress-bar";
import { WordFadeIn } from "@/components/motion/text-slide";
import { FadeText } from "@/components/motion/text-fade";
import RegistrationFormImg from "./_components/registration-form-img";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { motion } from 'motion/react';
import { registriationFormSchema } from '@/lib/validations/schema';
type Inputs = z.infer<typeof registriationFormSchema>
const steps = [
    {
        id: 'Step 1',
        fields: ['name', 'surname', 'email', 'phoneNumber']
    },
    {
        id: 'Step 2',
        fields: ['age', 'dateOfBirth', 'gender', 'cityResidingIn',]
    },
    {
        id: 'Step 3',
        fields: ["preferedMethodOfContact", 'instagramUsername', 'howDidYouHearAboutUs']
    },

    { id: 'Step 4', name: 'Complete' }
]
const metadata: Metadata = {
    title: "Register | #1 modelling academy in South Africa",
    description: "Register with Kalon Models today and begin your journey to becoming a professional model.",
};



export default function Register() {
    const [progressBarPercentage, setProgressBarPercentage] = useState(25);
    const [previousStep, setPreviousStep] = useState(0)
    const [currentStep, setCurrentStep] = useState(0)
    const delta = currentStep - previousStep
    // 0,1,2
    // 3
    const {
        register,
        handleSubmit,
        watch,
        reset,
        trigger,
        formState: { errors }
    } = useForm<Inputs>({
        resolver: zodResolver(registriationFormSchema)
    })

    const processForm: SubmitHandler<Inputs> = data => {
        console.log(data)
        reset()
    }

    type FieldName = keyof Inputs

    const next = async () => {
        const fields = steps[currentStep].fields
        const output = await trigger(fields as FieldName[], { shouldFocus: true })

        if (!output) return
        1
        if (currentStep < steps.length - 1) {
            if (currentStep === steps.length - 2) {
                await handleSubmit(processForm)()
            }
            setPreviousStep(currentStep)
            setCurrentStep(step => step + 1)
            setProgressBarPercentage(progressBarPercentage + 25)
        }
    }

    const prev = () => {
        if (currentStep > 0) {
            setPreviousStep(currentStep)
            setCurrentStep(step => step - 1)
            setProgressBarPercentage(progressBarPercentage - 25)
        }
    }

    return (
        <main className=" py-10 px-5 w-full md:px-10">
            <div className="container flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <WordFadeIn words="Registration" delay={0.4} className="text-3xl md:text-4xl font-semibold lg:text-5xl" />
                    <FadeText text="This is a Multi-Part Form Demo! In this demonstration, we will showcase the powerful new forms tools available." className="body-text text-mutedColor" />
                </div>
                {/* MAIN BOX */}
                <section className="overflow-hidden rounded-2xl bg-backgroundLightColor shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl rounded-tl-none" id="register">
                    <div className="flex flex-col-reverse md:flex-row ">
                        <div className="flex flex-col md:flex-[1.5] gap-4">
                            <div className="flex flex-col gap-12">
                                <ProgressBar progressPercentage={progressBarPercentage} className="bg-primaryColor transition-all duration-300" />
                                <div className="text-black flex flex-col gap-12 p-4 pb-8">
                                    {/* INPUTS */}
                                    <div className="flex flex-col gap-4">
                                        <form onSubmit={handleSubmit(processForm)}>
                                            {currentStep === 0 && (
                                                <motion.div
                                                    initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                >
                                                    <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                                                        {/* NAME */}
                                                        <div className='sm:col-span-3'>
                                                            <label
                                                                htmlFor='name'
                                                                className='block text-sm font-medium leading-6 text-blackColor'
                                                            >
                                                                Name
                                                            </label>
                                                            <div className='mt-2'>
                                                                <input
                                                                    type='text'
                                                                    id='name'
                                                                    placeholder="Enter your name"
                                                                    {...register('name')}
                                                                    autoComplete='name'
                                                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4'
                                                                />
                                                                {errors.name?.message && (
                                                                    <p className='mt-2 text-sm text-red-400'>
                                                                        {errors.name.message}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                        {/* Surname */}
                                                        <div className='sm:col-span-3'>
                                                            <label
                                                                htmlFor='surname'
                                                                className='block text-sm font-medium leading-6 text-gray-900'
                                                            >
                                                                Surname
                                                            </label>
                                                            <div className='mt-2'>
                                                                <input
                                                                    type='text'
                                                                    id='surname'
                                                                    {...register('surname')}
                                                                    placeholder="Enter your surname"
                                                                    autoComplete='family-name'
                                                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4'
                                                                />
                                                                {errors.surname?.message && (
                                                                    <p className='mt-2 text-sm text-red-400'>
                                                                        {errors.surname.message}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                        {/* EMAIL */}
                                                        <div className='sm:col-span-3'>
                                                            <label
                                                                htmlFor='email'
                                                                className='block text-sm font-medium leading-6 text-gray-900'
                                                            >
                                                                Email address
                                                            </label>
                                                            <div className='mt-2'>
                                                                <input
                                                                    id='email'
                                                                    type='email'
                                                                    placeholder="Enter your email"
                                                                    {...register('email')}
                                                                    autoComplete='email'
                                                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4'
                                                                />
                                                                {errors.email?.message && (
                                                                    <p className='mt-2 text-sm text-red-400'>
                                                                        {errors.email.message}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                        {/* PHONE  */}
                                                        <div className='sm:col-span-3'>
                                                            <label
                                                                htmlFor='phoneNumber'
                                                                className='block text-sm font-medium leading-6 text-gray-900'
                                                            >
                                                                Phone Number
                                                            </label>
                                                            <div className='mt-2'>
                                                                <input
                                                                    type='tel'
                                                                    id='phoneNumber'
                                                                    {...register('phoneNumber')}
                                                                    placeholder="Enter your phone number"
                                                                    autoComplete='phone-number'
                                                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4'
                                                                />
                                                                {errors.phoneNumber?.message && (
                                                                    <p className='mt-2 text-sm text-red-400'>
                                                                        {errors.phoneNumber.message}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {currentStep === 1 && (
                                                <motion.div
                                                    initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                >
                                                    <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                                                        <div className='sm:col-span-3'>
                                                            <label
                                                                htmlFor='age'
                                                                className='block text-sm font-medium leading-6 text-gray-900'
                                                            >
                                                                Age
                                                            </label>
                                                            <div className='mt-2'>
                                                                <input
                                                                    type='text'
                                                                    id='age'
                                                                    {...register('age')}
                                                                    placeholder="Enter your age"
                                                                    autoComplete='age'
                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4"
                                                                />
                                                                {errors.age?.message && (
                                                                    <p className='mt-2 text-sm text-red-400'>
                                                                        {errors.age.message}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>

                                                        <div className='sm:col-span-3'>
                                                            <label
                                                                htmlFor='dateofbirth'
                                                                className='block text-sm font-medium leading-6 text-gray-900'
                                                            >
                                                                Date of Birth
                                                            </label>
                                                            <div className='mt-2'>
                                                                <input
                                                                    type='text'
                                                                    id='dateofbirth'
                                                                    {...register('dateOfBirth')}
                                                                    autoComplete='date-of-birth'
                                                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4'
                                                                    placeholder="Enter your date of birth"
                                                                />
                                                                {errors.dateOfBirth?.message && (
                                                                    <p className='mt-2 text-sm text-red-400'>
                                                                        {errors.dateOfBirth.message}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>

                                                        <div className='sm:col-span-3'>
                                                            <label
                                                                htmlFor='gender'
                                                                className='block text-sm font-medium leading-6 text-gray-900'
                                                            >
                                                                Gender
                                                            </label>
                                                            <div className='mt-2'>
                                                                <input
                                                                    type='text'
                                                                    id='gender'
                                                                    {...register('gender')}
                                                                    autoComplete='address-level2'
                                                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4'
                                                                    placeholder="Enter your gender"
                                                                />
                                                                {errors.gender?.message && (
                                                                    <p className='mt-2 text-sm text-red-400'>
                                                                        {errors.gender.message}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>

                                                        <div className='sm:col-span-3'>
                                                            <label
                                                                htmlFor='cityYouResideIn'
                                                                className='block text-sm font-medium leading-6 text-gray-900'
                                                            >
                                                                City You Reside In
                                                            </label>
                                                            <div className='mt-2'>
                                                                <input
                                                                    type='text'
                                                                    id='cityYouResideIn'
                                                                    {...register('cityResidingIn')}
                                                                    autoComplete='address-level1'
                                                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6 px-4'
                                                                    placeholder="Enter your city"
                                                                />
                                                                {errors.cityResidingIn?.message && (
                                                                    <p className='mt-2 text-sm text-red-400'>
                                                                        {errors.cityResidingIn.message}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>


                                                    </div>
                                                </motion.div>
                                            )}

                                            {
                                                currentStep === 2 && (
                                                    <motion.div
                                                        initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    >

                                                        <div className='sm:col-span-3'>
                                                            <label

                                                                htmlFor='zip'
                                                                className='block text-sm font-medium leading-6 text-gray-900'
                                                            >
                                                                Prefered mode of communication
                                                            </label>
                                                            <div className='mt-2'>
                                                                <input
                                                                    type='text'
                                                                    id='preferedMethodOfContact'
                                                                    {...register('preferedMethodOfContact')}
                                                                    autoComplete='preferedMethodOfContact'
                                                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                                                />
                                                                {errors.preferedMethodOfContact?.message && (
                                                                    <p className='mt-2 text-sm text-red-400'>
                                                                        {errors.preferedMethodOfContact.message}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )
                                            }
                                            {/* THANK YOU PAGE */}
                                            {currentStep === 3 && (
                                                <>
                                                    <h2 className='text-base font-semibold leading-7 text-gray-900'>
                                                        Complete
                                                    </h2>
                                                    <p className='mt-1 text-sm leading-6 text-gray-600'>
                                                        Thank you for your submission.
                                                    </p>
                                                </>
                                            )}


                                        </form>
                                    </div>
                                    {/* BUTTONS NEXT AND PREV */}
                                    <div className="justify-end flex gap-4 items-center w-full">
                                        <Button disabled={currentStep === 0} onClick={prev} variant={'kalon'} className="disabled:cursor-not-allowed disabled:opacity-50' px-8 ">
                                            Prev
                                        </Button>
                                        <Button variant={"kalon"} className="px-8 disabled:cursor-not-allowed disabled:opacity-50" onClick={next}
                                            disabled={currentStep === steps.length - 1}>
                                            Next
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <RegistrationFormImg />
                    </div>
                </section>
            </div >
        </main >

    );
}

