import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

interface CardData {
  number: number;
  title: string;
  quote: string;
  subtext: string;
  gradient: string;
}

function Why() {

  const cards: CardData[] = [
    {
      number: 1,
      title: "The Ghost Zone",
      quote: "Applied to 300+ internships. Got 2 replies. Both were unpaid.",
      subtext: "Sound familiar?",
      gradient: "from-text-light_green to-background-light"
    },
    {
      number: 2,
      title: "The Exposure Scam",
      quote: "'Great opportunity for learning!'",
      subtext: "Translation: We want free labor and won't teach you anything.",
      gradient: "from-text-light_green to-background-light"
    },
    {
      number: 3,
      title: "The IIT Filter",
      quote: "Your portfolio has 6 live projects.",
      subtext: "But your college name ends the conversation before it starts.",
      gradient: "from-text-light_green to-background-light"
    },
    {
      number: 4,
      title: "The Fake Listing",
      quote: "Company doesn't exist. Founder's LinkedIn is fake.",
      subtext: "But hey, at least you wasted 3 hours on the assessment.",
      gradient: "from-text-light_green to-background-light"
    }
  ];

  return (
    <section className="px-4">
        <div className="max-w-7xl mx-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl text-text-light_green font-bold mb-4">We Built 
              <span className="text-text-green"> This Because We've Been There</span>
            </h2>
            <p className="text-lg md:text-xl text-text-green max-w-2xl mx-auto">
              Tired of these? You're not alone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.number}
              className={`relative bg-gradient-to-br ${card.gradient} rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300 `}
            >
              {/* Card Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-text-light_green text-background-light rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                {card.number}
              </div>
              
              {/* Card Content */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-background-light pt-4">
                  {card.title}
                </h2>
                
                <div className="border-l-4 border-white/30 pl-4">
                  <p className="text-background-light text-lg font-medium italic">
                    "{card.quote}"
                  </p>
                </div>
                
                <p className="text-background-light/90 text-base leading-relaxed">
                  {card.subtext}
                </p>
              </div>
              
              {/* Decorative element */}
              <div className="absolute bottom-4 right-4 opacity-10">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor" className="text-text-light_green">
                  <path d="M50 10 L90 90 L10 90 Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
          <h1 className="text-center text-2xl text-text-light_green mt-12">
            We were tired of this circus. So we built the platform we wish existed when we were grinding.
          </h1>
        </div>
      </section>
  )
}

export default Why
