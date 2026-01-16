"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { TextLoop } from "./ui/text-loop";
import { text } from "stream/consumers";

function Hero() {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    };

    const staggerContainer = {
        animate: {
        transition: {
            staggerChildren: 0.1,
        },
        },
    };

return (
    <div>
        <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
            {/* Hero Section */}
            <section className="pt-[5.5rem] md:pt-[9rem] pb-20">
            <div className="mx-auto text-center">
                <motion.div
                variants={fadeInUp}
                className="absolute top-[4rem] md:top-12 right-0 left-0 mx-auto leading-tight mb-6 text-[3rem] md:text-[12rem] text-text-green/10"
                >
                Introducing
                <span className="block text-[3.5rem] md:text-[8rem]">
                    NoNoMate
                </span>
                </motion.div>
                <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="mt-6 max-w-4xl w-full mx-auto"
                >
                <div
                    className="bg-background-light w-max mx-auto relative rounded-full text-xs md:text-base text-text-light_green font-semibold py-3 px-5 mb-8 shadow-text-light_green overflow-hidden shadow-2xl border border-text-light_green/20"
                >
                    🔥 Trusted by 50+ funded startups
                </div>
                <motion.h1
                    variants={fadeInUp}
                    className="text-3xl md:text-5xl drop-shadow-sm font-semibold text-text-green mb-6 leading-tight"
                >
                    No More Fake 'Exposure' Internships.
                    <span className="gradient-text md:block text-text-light_green drop-shadow-sm">
                    {" "}
                        Just Real
                        {" "}
                    <TextLoop>
                        {[
                            "Work.",
                            "Pay.",
                            "Experience.",
                            "Growth.",
                        ].map((text) => (
                            <span key={text} className="block text-left">
                            {text}
                            </span>
                        ))}
                    </TextLoop>
                    </span>
                </motion.h1>

                <motion.p
                    variants={fadeInUp}
                    className="text-lg md:text-xl text-text-green mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-sm"
                >
                    {`Every startup verified. Every internship paid. Connect with founders who hire based on skills, not college names.`}
                </motion.p>

                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row items-center overflow-hidden rounded-2xl w-max mx-auto border border-text-light_green/20 bg-background-light text-lg shadow-2xl shadow-text-light_green/20"
                >
                    <Link href="/auth">
                    <Button
                        size="lg"
                        className="bg-background-light text-md md:text-lg py-4 text-text-green"
                    >
                        Find Your Paid Internship →
                    </Button>
                    </Link>
                    <Link href="/auth">
                    <Button
                        size="lg"
                        className="bg-text-light_green rounded-xl text-md md:text-lg px-8 py-4 m-2 shadow-text-light_green text-background-light hover:bg-text-green hover:text-background-light transition-colors"
                    >
                        Post Your Opening →
                    </Button>
                    </Link>
                </motion.div>
                </motion.div>
            </div>

            {/* Stats */}
            <section className="mt-20">
                <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 text-center">
                <motion.div
                    variants={fadeInUp}
                    className="bg-background-light rounded-xl p-3 md:p-6 border border-text-light_green/20 shadow-2xl shadow-text-light_green/20"
                >
                    <h3 className="text-xl md:text-2xl font-bold text-text-green mb-2">50+</h3>
                    <p className="text-text-green text-sm md:text-base">Verified Startups</p>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    className="bg-background-light rounded-xl p-3 md:p-6 border border-text-light_green/20 shadow-2xl shadow-text-light_green/20"
                >
                    <h3 className="text-xl md:text-2xl font-bold text-text-green mb-2">100+</h3>
                    <p className="text-text-green text-sm md:text-base">Students Hired</p>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    className="bg-background-light rounded-xl p-3 md:p-6 border border-text-light_green/20 shadow-2xl shadow-text-light_green/20"
                >
                    <h3 className="text-xl md:text-2xl font-bold text-text-green mb-2">₹6.2L</h3>
                    <p className="text-text-green text-sm md:text-base">Total Stipends Paid Out</p>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    className="bg-background-light rounded-xl p-3 md:p-6 border border-text-light_green/20 shadow-2xl shadow-text-light_green/20"
                >
                    <h3 className="text-xl md:text-2xl font-bold text-text-green mb-2">89%</h3>
                    <p className="text-text-green text-sm md:text-base">Interview-to-Offer-Rate</p>
                </motion.div>
                </div>
            </section>

            </section>
        </motion.div>
        </div>
    );
}

export default Hero;
