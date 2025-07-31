"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqData = {
    "For Students": [
        {
        question: "How do I apply for internships?",
        answer:
            "Just sign in, complete your profile, and browse internships. Apply with one click directly from your dashboard.",
        },
        {
        question: "Do I need a resume to apply?",
        answer:
            "It's recommended, but if you don't have one — NoNoMate provides a free Resume Builder tool to create one in minutes.",
        },
        {
        question: "Is NoNoMate free for students?",
        answer:
            "Yes! All essential features like internship search, resume tools, and AI career help are free for students.",
        },
    ],
    "For Startups": [
        {
        question: "How can I hire interns from NoNoMate?",
        answer:
            "You can register as an employer and post internship opportunities for free. We'll help match you with ideal candidates.",
        },
        {
        question: "Is there any cost for posting internships?",
        answer: "No, it's free for startups to post and connect with candidates.",
        },
    ],
    "AI Career Tools": [
        {
        question: "How does the AI assistant help me?",
        answer:
            "It suggests internships, answers career questions, gives resume feedback, and provides custom study plans — all based on your goals.",
        },
        {
        question: "Can I get personalized job alerts?",
        answer:
            "Yes! Just sign in and enable alerts in your profile settings to get internship/job updates tailored to your interests.",
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
    <section className="w-full flex flex-col md:flex-row max-w-7xl h-full md:h-[55rem] mx-auto py-16 px-4 md:px-0" id="faqs">
        {/* 🔥 Vibey Heading */}
        <div className="text-start mb-12 max-w-[32rem] md:pr-6 flex flex-col gap-6 md:gap-0 justify-between">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-text-green to-text-light_green text-transparent bg-clip-text">
                Got Questions? <span className="block">We’ve Got Answers</span>
                </h2>
                <p className="text-text-green mt-4 text-md md:text-lg">
                Everything you need to know about internships, hiring, and smart
                career tools — simplified.
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
