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
      quote: "Applied to 300+ internships. Got 2 replies. Both unpaid.",
      subtext: "Ghosting shouldn’t be part of the hiring process.",
      gradient: "from-text-light_green to-background-light/50"
    },
    {
      number: 2,
      title: "The Exposure Scam",
      quote: "'Great opportunity for learning!'",
      subtext: "Translation: Unpaid work with unclear learning or mentorship.",
      gradient: "from-text-light_green to-background-light/50"
    },
    {
      number: 3,
      title: "The IIT Filter",
      quote: "Your portfolio has 6 live projects.",
      subtext: "Skill matters. But often, college names decide before skills are seen.",
      gradient: "from-text-light_green to-background-light/50"
    },
    {
      number: 4,
      title: "The Fake Listing",
      quote: "Company doesn't exist. Founder's LinkedIn is fake.",
      subtext: "Hours spent on assignments for companies that don’t exist..",
      gradient: "from-text-light_green to-background-light/50"
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
            <h2 className="text-2xl md:text-3xl text-text-light_green font-bold mb-4">We built NonoMate  
              <span className="text-text-green"> after facing this ourselves</span>
            </h2>
            <p className="text-lg md:text-xl text-text-green max-w-2xl mx-auto">
              {`If you’ve experienced any of these, you’re not imagining it.`}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:gap-12">
          {cards.map((card) => (
            <div
              key={card.number}
              className={`relative bg-gradient-to-br ${card.gradient} rounded-2xl p-4 md:p-8 shadow-2xl shadow-text-light_green/20 hover:scale-105 transition-transform duration-300 `}
            >
              {/* Card Number Badge */}
              <div className="absolute -top-4 -left-4 w-8 md:w-12 h-8 md:h-12 bg-text-light_green text-background-light rounded-full flex items-center justify-center text-lg md:text-2xl font-bold shadow-lg">
                {card.number}
              </div>
              
              {/* Card Content */}
              <div className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-background-light md:pt-4">
                  {card.title}
                </h2>
                
                <div className="border-l-4 border-white/30 pl-4">
                  <p className="text-background-light text-md md:text-lg font-medium italic">
                    {card.quote}
                  </p>
                </div>
                
                <p className="text-background-light text-sm md:text-base leading-relaxed">
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
          <h1 className="text-center text-xl md:text-2xl text-text-green mt-12">
            {`We were tired of this system.`}
            <br/>
            <span className='text-text-light_green'>
            {`So we built the platform we wish existed when we were students.`}
            </span>
          </h1>
        </div>
      </section>
  )
}

export default Why
