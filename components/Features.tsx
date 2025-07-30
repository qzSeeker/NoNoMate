import Image from "next/image";
import React from "react";

function Features() {
    return (
        <div className="min-h-screen max-w-7xl mx-auto w-full py-12">
        <div className="">
            <h1 className="text-3xl md:text-4xl text-text-green font-semibold text-center mb-12">
                Built for Students.
                <span className="text-text-light_green"> Designed for Startups.</span>
            </h1>

            <div className="flex flex-col gap-10 relative top-14 bg-gradient-to-t from-text-green/70 to-transparent p-6 md:p-12 rounded-[6rem] md:rounded-[8rem]">
            <div className="grid md:grid-cols-2 items-center bg-gradient-to-b from-text-green/80 to-transparent p-4 md:p-12 rounded-[6rem] md:rounded-[7rem]">
            <Image
                src="/studentImg.png"
                alt="Placeholder image"
                height={414}
                width={414}
                className="rounded-[6rem] opacity-80 shadow-2xl border-[4px] border-background-light/60"
                />
                <div className="p-6 flex flex-col">
                    <h1 className="text-2xl md:text-3xl text-background-light font-semibold mb-8">
                        For Students.
                    </h1>
                    <div className="flex flex-col gap-4">
                        <p className="text-[18px] md:text-[24px] text-background-light text-justify">
                        Get matched with real internships based on your skills.
                        </p>
                        <p className="text-[18px] md:text-[24px] text-background-light text-justify">
                        Get mentorship, resume help, and growth guidance even if
                        you're not hired.
                        </p>
                    </div>
                </div>
                
            </div>

            <div className="grid md:grid-cols-2 items-center bg-gradient-to-t from-text-green/80 to-transparent p-4 md:p-12 rounded-[6rem] md:rounded-[7rem]">
                <Image
                src="/startupImg.png"
                alt="Placeholder image"
                height={414}
                width={414}
                className="rounded-[6rem] opacity-80 shadow-2xl border-[4px] border-background-light/60"
                />
                <div className="p-6 flex flex-col">
                    <h1 className="text-2xl md:text-3xl text-background-light font-semibold mb-8">
                        For Startups.
                    </h1>
                    <div className="flex flex-col gap-4">
                        <p className="text-[18px] md:text-[24px] text-background-light text-justify">
                        List verified roles, find reliable interns, and grow your team
                        even with a tight budget.
                        </p>
                        <p className="text-[18px] md:text-[24px] text-background-light text-justify">
                        Only legit, growth-stage startups allowed.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Features;
