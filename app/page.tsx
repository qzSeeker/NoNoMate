"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, BookOpen, FileText, Bell, Star, Users, TrendingUp, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { AuroraBackground } from "@/components/ui/aurora-background"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark relative overflow-hidden">
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
      <section className="pt-[9rem] pb-20">
        <div className="mx-auto text-center">
            <motion.div variants={fadeInUp} className="absolute top-[4rem] md:top-12 right-0 left-0 mx-auto leading-tight mb-6 text-[3rem] md:text-[12rem] text-text-green/10">
                Introducing
                <span className="block text-[3.5rem] md:text-[8rem]">NoNoMate</span>
            </motion.div>
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="mt-6 md:mt-16 max-w-4xl w-full mx-auto">
            <Badge
              className="bg-text-light_green text-xs md:text-base text-background-light mb-4 shadow-text-light_green overflow-hidden shadow-2xl"
              variant="secondary"
            >
              Students Who Grind.<span className="bg-background-light text-text-light_green ml-2 p-2 md:p-3 shadow-sm">Startups That Build</span>
            </Badge>
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl drop-shadow-sm font-semibold text-text-green mb-6 leading-tight">
              No Free Labor. No Fake Offers.
              <span className="gradient-text md:block text-text-light_green drop-shadow-sm"> Just Real Internships.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-text-green mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-sm"
            >
              You're not just “looking for experience", you're building your future. NoNoMate connects Tier 2/3 students with legit, paid, skill-based internships at real startups. No fluff. No scams. Just serious glow-ups.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center rounded-2xl w-max mx-auto bg-background-light text-lg shadow-2xl shadow-text-light_green">
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

      {/* Why? */}
      <section className="px-4">
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
      {/* AI Career Chatbot */}
      <section>
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
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
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
      </section>

    </div>
  )
}
