import React from 'react';

interface Benefit {
  text: string;
  highlight: string;
}

const NoNomateStudents = () => {
  const benefits: Benefit[] = [
    {
      text: "Stop applying blindly",
      highlight: "Get matched with 5-7 startups where you're actually a fit. Not 500 random listings."
    },
    {
      text: "Talk to actual founders",
      highlight: "No 7-round HR screenings. Most startups here let you chat with the CTO or founder directly."
    },
    {
      text: "Get paid fairly",
      highlight: "Our minimum is ₹10k/month. Average is ₹15-20k. We've seen up to ₹40k for specialized roles. All paid on time—or we remove the company."
    },
    {
      text: "Build a real portfolio",
      highlight: "Work on features that go to production. Ship code that thousands use. Startups move fast—you'll learn more in 3 months than a year at a slow corporate."
    },
    {
      text: "Network with the tribe",
      highlight: "3,800+ students who are just as hungry. They share interview experiences, referrals, freelance gigs, and moral support when rejections hit."
    },
    {
      text: "Get mentored by people who care",
      highlight: "Not some generic career coach. Real developers, designers, and product folks who remember what it's like to grind from tier-3 colleges."
    }
  ];

  return (
    <div className="min-h-screen py-12 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-text-green mb-6 leading-tight">
            If You're a Student Who's
            <span className="block mt-2 bg-gradient-to-r from-text-green to-text-light_green bg-clip-text text-transparent">
              Done Settling
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-light_green font-medium">
            Here's what changes when you join NoNoMate
          </p>
        </div>

        {/* Benefits List */}
        <div className="bg-background-light rounded-3xl shadow-2xl p-3 md:p-12 border border-text-light_green/20 mb-12">
          <div className="space-y-2 md:space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex gap-2 items-start group hover:bg-text-light_green/5 p-4 rounded-xl transition-all duration-200"
              >
                {/* Checkmark Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-7 h-7 bg-gradient-to-br from-text-green to-text-light_green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg 
                      className="w-4 h-4 text-background-light" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={3} 
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="text-text-green font-bold text-lg md:text-xl">
                    {benefit.text}
                  </span>
                  <span className="text-text-light_green text-base md:text-lg ml-2">
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="group relative bg-gradient-to-r from-text-green to-text-light_green text-background-light px-10 py-5 rounded-full font-bold text-sm md:text-lg shadow-xl shadow-text-light_green/20 hover:shadow-2xl hover:scale-105 transition-all duration-200 mb-6">
            Start Applying to Real Internships
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </button>
          
          {/* Trust Signal */}
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-3 text-text-light_green">
            <svg className="w-5 h-5 text-text-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-base md:text-lg">
              No credit card required. Forever free tier available.
            </p>
          </div>
        </div>

        {/* Additional Trust Signals */}
        <div className="mt-12 grid grid-cols-3 gap-3 md:gap-6 text-center">
          <div className="bg-background-light rounded-xl p-3 md:p-6 border border-text-light_green/20 shadow-2xl shadow-text-light_green/20">
            <div className="text-xl md:text-2xl font-bold text-text-green mb-2">400+</div>
            <div className="text-sm text-text-light_green">Active Students</div>
          </div>
          <div className="bg-background-light rounded-xl p-3 md:p-6 border border-text-light_green/20 shadow-2xl shadow-text-light_green/20">
            <div className="text-xl md:text-2xl font-bold text-text-green mb-2">50+</div>
            <div className="text-sm text-text-light_green">Vetted Startups</div>
          </div>
          <div className="bg-background-light rounded-xl p-3 md:p-6 border border-text-light_green/20 shadow-2xl shadow-text-light_green/20">
            <div className="text-xl md:text-2xl font-bold text-text-green mb-2">₹11k</div>
            <div className="text-sm text-text-light_green">Avg. Stipend</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoNomateStudents;