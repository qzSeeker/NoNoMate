"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

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
                <Badge
                    className="bg-background-light text-xs md:text-base text-text-light_green font-semibold py-3 px-5 mb-8 shadow-text-light_green overflow-hidden shadow-2xl border border-text-light_green/20"
                    variant="secondary"
                >
                    🔥Trusted by 50+ funded startups
                </Badge>
                <motion.h1
                    variants={fadeInUp}
                    className="text-3xl md:text-5xl drop-shadow-sm font-semibold text-text-green mb-6 leading-tight"
                >
                    No More Fake 'Exposure' Internships.
                    <span className="gradient-text md:block text-text-light_green drop-shadow-sm">
                    {" "}
                    Just Real Work. Real Pay.
                    </span>
                </motion.h1>

                <motion.p
                    variants={fadeInUp}
                    className="text-lg md:text-xl text-text-green mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-sm"
                >
                    {`If you're from a Tier 2/3 college and tired of being rejected by companies who only want IIT/NIT grads—welcome home. We connect ambitious builders with startups who value hustle over pedigree. Every internship is paid. Every company is verified. Zero BS.`}
                </motion.p>

                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row items-center rounded-2xl w-max mx-auto bg-background-light text-lg shadow-2xl shadow-text-light_green"
                >
                    <Link href="/auth">
                    <Button
                        size="lg"
                        className="bg-background-light text-lg text-text-green"
                    >
                        Find Your Paid Internship →
                    </Button>
                    </Link>
                    <Link href="/auth">
                    <Button
                        size="lg"
                        className="bg-text-light_green rounded-xl text-lg px-8 py-6 m-2 shadow-text-light_green text-background-light hover:bg-text-green hover:text-background-light transition-colors"
                    >
                        Post Your Opening →
                    </Button>
                    </Link>
                </motion.div>
                </motion.div>
            </div>

            {/* Stats */}
            <section className="mt-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
                <motion.div
                    variants={fadeInUp}
                    className="bg-background-light rounded-xl p-6 border border-text-light_green/20 shadow-2xl"
                >
                    <h3 className="text-2xl font-bold text-text-green mb-2">50+</h3>
                    <p className="text-text-green">Verified Startups</p>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    className="bg-background-light rounded-xl p-6 border border-text-light_green/20 shadow-2xl"
                >
                    <h3 className="text-2xl font-bold text-text-green mb-2">100+</h3>
                    <p className="text-text-green">Students Hired</p>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    className="bg-background-light rounded-xl p-6 border border-text-light_green/20 shadow-2xl"
                >
                    <h3 className="text-2xl font-bold text-text-green mb-2">₹18.2L</h3>
                    <p className="text-text-green">Total Stipends Paid Out</p>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    className="bg-background-light rounded-xl p-6 border border-text-light_green/20 shadow-2xl"
                >
                    <h3 className="text-2xl font-bold text-text-green mb-2">89%</h3>
                    <p className="text-text-green">Interview-to-Offer-Rate</p>
                </motion.div>
                </div>
            </section>

            </section>
        </motion.div>
        </div>
    );
}

export default Hero;
