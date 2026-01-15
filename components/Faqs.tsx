"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqData = {
    "For Students": [
        {
        question: "Is this actually free for students?",
        answer:
            "Yes! Our Explorer plan is 100% free forever. You can apply to internships, build your profile, and access the community without paying a rupee. We make money by charging startups and offering optional premium features for students—but you never HAVE to pay.",
        },
        {
        question: "I'm not from CS/IT. Can I still use NoNoMate?",
        answer:
            "Absolutely! We have internships for designers, content writers, marketers, finance analysts, operations roles, and more. Tech startups need diverse talent—your degree matters less than your ability to learn and deliver.",
        },
        {
        question: "Do I need a fancy resume to apply?",
        answer:
            "Nope. Our AI looks beyond resumes—it analyzes your GitHub, projects, portfolio, and even Twitter if you link it. Some of our best-placed students had no traditional resume, just strong real-world work.",
        },
        {
        question: "What’s the average stipend?",
        answer:
            "Most internships pay ₹10–20k/month. Design and development roles usually pay ₹15–25k. Specialized roles like ML, DevOps, or blockchain can go up to ₹30–40k. We do not allow unpaid internships. Period.",
        },
        {
        question: "Can I apply to multiple startups at once?",
        answer:
            "Yes, there’s no limit. But quality beats quantity—applying to 5–10 relevant roles gives you a higher match score and better responses than spamming 50 random applications.",
        },
        {
        question: "What if I’m still in first year?",
        answer:
            "You’re exactly who we built this for. Many startups on NoNoMate care about potential, not seniority. Some of our youngest hires are first-year students who proved their skills through projects.",
        },
        {
        question: "How long does it take to get hired?",
        answer:
            "On average, students receive offers within 18 days of signing up. Some get hired in as little as 3 days, while others take longer by choice. Staying active and keeping your profile updated makes a big difference.",
        },
    ],

    "For Startups": [
        {
        question: "How do you verify startups aren’t scams?",
        answer:
            "Every startup goes through a 5-step verification: registered company details, founder LinkedIn profiles, funding or revenue proof, office address verification, and references from past interns. If they fail any step, they’re rejected. We’ve blocked 2,300+ fake listings so far.",
        },
        {
        question: "What if a startup hires me and doesn’t pay?",
        answer:
            "We use a payment-guarantee system. Startups must deposit the first month’s stipend before posting. If they ghost you, we release the money to you and permanently ban the startup. This has happened only 3 times—and every student got paid.",
        },
    ],

    "Platform Comparison": [
        {
        question: "How is NoNoMate different from LinkedIn, Internshala, or AngelList?",
        answer:
            "LinkedIn favors experienced professionals, Internshala is flooded with unpaid or low-quality listings, and AngelList is U.S.-focused and overwhelming. NoNoMate is built specifically for Indian students and Indian startups—with strict anti-scam checks and built-in mentorship.",
        },
    ],
};

export default function FAQSection() {
    const [open, setOpen] = useState<{ category: string; index: number } | null>(
        null
    );

    const toggleFAQ = (category: string, index: number) => {
        if (open && open.category === category && open.index === index) {
        setOpen(null);
        } else {
        setOpen({ category, index });
        }
    };

return (
    <section className="w-full flex flex-col md:flex-row max-w-7xl h-full mx-auto py-16 px-4 md:px-0" id="faqs">
        {/* 🔥 Vibey Heading */}
        <div className="text-start mb-12 max-w-[32rem] md:pr-6 flex flex-col gap-6 md:gap-0 justify-between">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-text-green to-text-light_green text-transparent bg-clip-text">
                Questions? <span className="block">We’ve Got Answers</span>
                </h2>
                <p className="text-text-green mt-4 text-md md:text-lg">
                If it's not here, ask us in Discord—we reply in minutes
                </p>
            </div>

            <div className="bg-gradient-to-t from-text-light_green/30 to-text-light_green/10 rounded-xl border border-text-light_green/20 shadow-sm overflow-hidden">
                <Image
                src="/faq-girl.png"
                alt="FAQ Illustration"
                width={500}
                height={300}
                className="mt-8 w-full max-w-md mx-auto opacity-90"
                />
            </div>
        </div>

        <div className="w-full max-w-2xl mx-auto space-y-6">
        {/* FAQ Categories */}
        {Object.entries(faqData).map(([category, faqs]) => (
            <div key={category} className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-text-green mb-4">
                {category}
            </h3>
            <div className="space-y-3">
                {faqs.map((faq, index) => {
                const isOpen =
                    open?.category === category && open.index === index;

                return (
                    <div
                    key={index}
                    className="bg-gradient-to-r from-text-light_green/30 to-text-light_green/10 rounded-xl border border-text-light_green/20 shadow-sm transition-all ease-in"
                    >
                    <button
                        onClick={() => toggleFAQ(category, index)}
                        className="w-full flex justify-between font-semibold items-center px-6 py-4 text-left text-text-green text-md"
                    >
                        <span>{faq.question}</span>
                        {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                        ) : (
                        <ChevronDown className="w-5 h-5" />
                        )}
                    </button>

                    <AnimatePresence initial={false}>
                        {isOpen && (
                        <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="px-6 pb-4 text-md text-text-light_green font-medium">
                            {faq.answer}
                            </div>
                        </motion.div>
                        )}
                    </AnimatePresence>
                    </div>
                );
                })}
            </div>
            </div>
        ))}
        </div>
        </section>
    );
}
