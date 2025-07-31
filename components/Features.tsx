import Image from "next/image";
import React from "react";

function Features() {
    return (
        <div className="min-h-screen max-w-7xl mx-auto w-full space-y-4 px-4">
            <h1 className="text-3xl md:text-4xl text-text-green font-semibold text-center mb-12">
                Built for Students.
                <span className="text-text-light_green"> Designed for Startups.</span>
            </h1>

            <div className="grid md:grid-cols-2 items-center bg-gradient-to-t from-text-light_green/50 to-transparent p-4 md:p-12 rounded-b-[3rem]">
                <div className="p-6 flex flex-col">
                    <h1 className="text-2xl md:text-3xl text-text-green font-semibold mb-8">
                        For Students.
                    </h1>
                    <div className="flex flex-col gap-4">
                        <p className="text-[18px] md:text-[24px] text-text-light_green text-justify">
                        Get matched with real internships based on your skills.
                        </p>
                        <p className="text-[18px] md:text-[24px] text-text-light_green text-justify">
                        Get mentorship, resume help, and growth guidance even if
                        you're not hired.
                        </p>
                    </div>
                </div>
                <div className="flex justify-end p-6 md:p-0">
                <Image
                    src="/studentImg.png"
                    alt="Placeholder image"
                    height={414}
                    width={414}
                    className="rounded-[36px] opacity-90 shadow-2xl border-[4px] border-background-light/60"
                />
                </div>
            </div>

            <div className="grid md:grid-cols-2 items-center bg-gradient-to-t from-text-light_green/50 to-transparent p-4 md:p-12 rounded-b-[3rem]">
                <Image
                src="/startupImg.png"
                alt="Placeholder image"
                height={414}
                width={414}
                className="rounded-[36px] opacity-90 hidden md:block shadow-2xl border-[4px] border-background-light/60"
                />
                <div className="p-6 flex flex-col">
                    <h1 className="text-2xl md:text-3xl text-text-green font-semibold mb-8">
                        For Startups.
                    </h1>
                    <div className="flex flex-col gap-4">
                        <p className="text-[18px] md:text-[24px] text-text-light_green text-justify">
                        List verified roles, find reliable interns, and grow your team
                        even with a tight budget.
                        </p>
                        <p className="text-[18px] md:text-[24px] text-text-light_green text-justify">
                        Only legit, growth-stage startups allowed.
                        </p>
                    </div>
                </div>
                <div className="flex justify-end p-6 md:p-0">
                <Image
                    src="/startupImg.png"
                    alt="Placeholder image"
                    height={414}
                    width={414}
                    className="rounded-[36px] opacity-90 shadow-2xl md:hidden border-[4px] border-background-light/60"
                />
                </div>
            </div>
        </div>
    );
}

export default Features;
