"use client"

import React from "react"
import Hero from "@/components/Hero"
import FAQSection from "@/components/Faqs"
import Testimonials from "@/components/Testimonials"
import PricingSection from "@/components/Pricing"
import Why from "@/components/Why"
import SocialProofBar from "@/components/SocialProofBar"
import NoNomateSolution from "@/components/NoNomateSolution"
import NoNomateStudents from "@/components/NoNomateStudents"
import NoNomateStartups from "@/components/NoNomateStartups"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark relative overflow-hidden">
      {/* Hero */}
      <Hero/>

      {/* Social Proof Bar */}
      <SocialProofBar />

      {/* Why? */}
      <Why/>

      {/* Nonomate Solution */}
      <NoNomateSolution/>

      {/* NoNomate Benefits */}
      <NoNomateStudents/>

      {/* NoNomate Startups */}
      <NoNomateStartups/>

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection/>
    </div>
  )
}
