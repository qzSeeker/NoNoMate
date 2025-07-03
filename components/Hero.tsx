"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    FileText,
    Bell,
    Star,
    Users,
    TrendingUp,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";

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
                    className="bg-text-light_green text-xs md:text-base text-background-light mb-8 shadow-text-light_green overflow-hidden shadow-2xl"
                    variant="secondary"
                >
                    Students Who Grind.
                    <span className="bg-background-light text-text-light_green ml-2 p-2 md:p-3 shadow-sm">
                    Startups That Build
                    </span>
                </Badge>
                <motion.h1
                    variants={fadeInUp}
                    className="text-3xl md:text-5xl drop-shadow-sm font-semibold text-text-green mb-6 leading-tight"
                >
                    No Free Labor. No Fake Offers.
                    <span className="gradient-text md:block text-text-light_green drop-shadow-sm">
                    {" "}
                    Just Real Internships.
                    </span>
                </motion.h1>

                <motion.p
                    variants={fadeInUp}
                    className="text-lg md:text-xl text-text-green mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-sm"
                >
                    You're not just “looking for experience", you're building your
                    future. NoNoMate connects Tier 2/3 students with legit, paid,
                    skill-based internships at real startups. No fluff. No scams.
                    Just serious glow-ups.
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
                        Find Internships
                    </Button>
                    </Link>
                    <Link href="/auth">
                    <Button
                        size="lg"
                        className="bg-text-light_green rounded-xl text-lg px-8 py-6 m-2 shadow-text-light_green text-background-light hover:bg-text-green hover:text-background-light transition-colors"
                    >
                        Hire Interns
                    </Button>
                    </Link>
                </motion.div>
                </motion.div>
            </div>
            </section>
        </motion.div>
        </div>
    );
}

export default Hero;
