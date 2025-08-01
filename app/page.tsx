"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import FAQSection from "@/components/Faqs"
import Testimonials from "@/components/Testimonials"
import PricingSection from "@/components/Pricing"
import Why from "@/components/Why"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark relative overflow-hidden">
      {/* Hero */}
      <Hero/>

      {/* Features */}
      <Features/>
      
      {/* Why? */}
      <Why/>

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection/>
    </div>
  )
}
