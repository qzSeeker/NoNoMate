"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Footer from "@/components/Footer"

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

      {/* Footer */}
      <Footer/>
    </div>
  )
}
