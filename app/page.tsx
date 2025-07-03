"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Hero from "@/components/Hero"
import Features from "@/components/Features"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark relative overflow-hidden">
      {/* Hero */}
      <Hero/>

      {/* Features */}
      <Features/>

      {/* Why? */}
      <section className="px-4 mt-12">
        <div className="max-w-7xl mx-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl text-text-light_green font-bold mb-4">Why 
              <span className="text-text-green"> NoNoMate Exists?</span>
            </h2>
            <p className="text-lg md:text-xl text-text-green dark:text-gray-300 max-w-2xl mx-auto">
              InternSteps was born from frustration, fake internships, no stipends, and “work for exposure” nonsense. So we’re flipping the script.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="flex flex-col md:flex-row items-center rounded-r-[3rem] bg-gradient-to-l from-text-light_green/50 via-transparent to-transparent">
              <h1 className="text-[3rem] md:text-[6rem] text-text-light_green/20 drop-shadow-2xl">Built<span className="text-text-green text-[1.5rem] md:text-[2rem]"> by devs who’ve been where you are</span></h1>
              <Image
                src="/vvv.png"
                alt="Why NoNoMate"
                width={500}
                height={300}
              />
            </div>
            <div className="flex flex-col md:flex-row items-center rounded-l-[3rem] bg-gradient-to-r from-text-light_green/50 via-transparent to-transparent">
            <h1 className="md:hidden p-10 text-[1.5rem] md:text-[2rem] text-text-green">Powered by AI to match you with the right <span className="text-[3rem] md:text-[6rem] text-text-light_green/20 drop-shadow-2xl">opportunities</span></h1>
              <Image
                src="/mind.png"
                alt="Why NoNoMate"
                width={500}
                height={300}
                />
                <h1 className="hidden md:block text-[1.5rem] md:text-[2rem] text-text-green">Powered by AI to match you with the right <span className="text-[3rem] md:text-[6rem] text-text-light_green/20 drop-shadow-2xl">opportunities</span></h1>
            </div>
            <div className="flex flex-col md:flex-row items-center rounded-r-[3rem] bg-gradient-to-l from-text-light_green/50 via-transparent to-transparent">
              <h1 className="text-[1.5rem] md:text-[2rem] text-text-green">Backed by a <span className="text-[3rem] md:text-[6rem] text-text-light_green/20 drop-shadow-2xl">no-scam</span> guarantee</h1>
              <Image
                src="/shield.png"
                alt="Why NoNoMate"
                width={500}
                height={300}
              />
            </div>
          </motion.div>
          <h1 className="text-center text-2xl text-text-light_green mt-6">
            This isn’t LinkedIn with filters. <span className="text-text-green">It’s career clarity for the underrated & underestimated.</span>
          </h1>
        </div>
      </section>

      {/* What you get? */}
      {/* <section className="px-4">
        <div className="max-w-7xl mx-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
          <h1 className="text-2xl md:text-3xl text-text-light_green font-bold mb-4">What You Get</h1>
          </motion.div>
          <div>
            <h1>Real Internships, Not Fake Job Postings</h1>
            <p>All opportunities are vetted by humans + AI. If it’s unpaid, exploitative, or shady — it’s gone.</p>
            <Image
              src="/what-you-get.png"
              alt="What you get"
              width={500}
              height={300}
              className="mx-auto"
            />
          </div>
          <div>
            <h1>Your Skill Path, Not Just Your CGPA</h1>
            <p>We match you based on your skills, goals, and vibe — not just your college name or marksheet.</p>
            <Image
              src="/what-you-get.png"
              alt="What you get"
              width={500}
              height={300}
              className="mx-auto"
            />
          </div>
          <div>
            <h1>Tiered Growth Tracks</h1>
            <p>Learn → Intern → Level Up → Build your resume without being a LinkedIn clone.</p>
            <Image
              src="/what-you-get.png"
              alt="What you get"
              width={500}
              height={300}
              className="mx-auto"
            />
          </div>
          <div>
            <h1>Mentors Who Actually Code</h1>
            <p>Learn from real devs, founders & PMs who don’t talk in HR jargon. Just skills, feedback, and guidance.</p>
            <Image
              src="/what-you-get.png"
              alt="What you get"
              width={500}
              height={300}
              className="mx-auto"
            />
          </div>
        </div>
      </section> */}

      {/* AI Career Chatbot */}
      {/* <section>
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-text-light_green font-bold mb-4">Meet Your 
              <span className="text-text-green"> AI Career Chatbot</span>
            </h2>
            <p className="text-xl text-text-green dark:text-gray-300 max-w-2xl mx-auto">
              Get instant answers to career questions, course recommendations, and personalized guidance 24/7
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Features Section */}
      {/* <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-text-light_green font-bold mb-4">Everything 
              <span className="text-text-green"> You Need to Succeed</span>
            </h2>
            <p className="text-xl text-text-green dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI-powered tools designed specifically for Indian students
            </p>
          </motion.div>
        </div>
      </section> */}

    </div>
  )
}
