import React, { JSX } from 'react';

interface Feature {
  number: number;
  badge: string;
  headline: string;
  bodyCopy: string;
  microStat: string;
  statLabel: string;
  icon: JSX.Element;
}

const NoNomateSolution = () => {
  const features: Feature[] = [
    {
      number: 1,
      badge: "AI Matching That Actually Works",
      headline: "We Read Your Code, Not Just Your Resume",
      bodyCopy: "Our AI scans your GitHub repos, side projects, Leetcode profile, and tech stack. You get matched with startups looking for YOUR specific skills—not just JavaScript developers with 2+ years experience. One student got hired because our AI noticed he built a chrome extension that solved the exact problem the startup was facing.",
      microStat: "76%",
      statLabel: "of matches lead to interviews",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    },
    {
      number: 2,
      badge: "Zero Tolerance Verification",
      headline: "We Reject 6 Out of 10 Startups Who Apply",
      bodyCopy: "Every company is manually vetted. We check their funding status, LinkedIn profiles, Glassdoor reviews, and previous intern feedback. If they've ghosted interns before? Banned. If they're offering 'stipend after 3 months'? Rejected. If they can't prove they're a real registered entity? Not happening. You deserve better than Craigslist for internships.",
      microStat: "100%",
      statLabel: "of listings guarantee payment within 7 days",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: 3,
      badge: "Your Growth Squad",
      headline: "Didn't Get Hired? We've Still Got You",
      bodyCopy: "Other platforms ghost you after a rejection. We double down. Get your resume reviewed by engineers from Google, Microsoft, and top startups. Join mock interview sessions. Access our Discord where seniors who landed at unicorns share exactly what worked. Your profile gets stronger with every 'no'.",
      microStat: "89%",
      statLabel: "of students get hired within 3 attempts",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    },
    {
      number: 4,
      badge: "Real Skill Building",
      headline: "Level Up Whether You're Hired or Not",
      bodyCopy: "Weekly live sessions with founders who've raised millions. Code review Fridays where senior devs tear apart your projects (in a good way). Exclusive project briefs from partner startups. Monthly hackathons with actual prizes. You're not just applying—you're becoming undeniable.",
      microStat: "42",
      statLabel: "hours of free content monthly",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-3xl font-bold text-text-green mb-6">
            How NoNoMate Fixes This
            <span className="block mt-2 bg-gradient-to-r from-text-green to-text-light_green bg-clip-text text-transparent leading-tight">
              Broken System
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-light_green mt-6 max-w-3xl mx-auto">
            Not another job board. An ecosystem built for{' '}
            <span className="font-bold text-text-green">underdogs.</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div 
              key={feature.number}
              className="relative bg-background-light rounded-3xl shadow-2xl shadow-text-light_green/20 overflow-hidden border border-text-light_green/20 hover:shadow-3xl transition-shadow duration-300"
            >
              <div className="relative z-10 p-8 md:p-12">
                {/* Feature Number & Badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 w-8 md:w-12 h-8 md:h-12 bg-gradient-to-r from-text-green to-text-light_green rounded-full flex items-center justify-center text-background-light font-bold text-lg md:text-xl">
                    {feature.number}
                  </div>
                  <div className="inline-flex items-center gap-2 text-background-light bg-gradient-to-r from-text-green to-text-light_green px-4 py-2 rounded-full text-sm font-semibold">
                    {feature.icon}
                    {feature.badge}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Left Column - Content */}
                  <div className="md:col-span-2">
                    {/* Headline */}
                    <h2 className="text-2xl md:text-3xl font-bold text-text-green mb-4 leading-tight">
                      {feature.headline}
                    </h2>

                    {/* Body Copy */}
                    <p className="text-text-light_green text-base md:text-lg leading-relaxed">
                      {feature.bodyCopy}
                    </p>
                  </div>

                  {/* Right Column - Stat */}
                  <div className="flex items-center justify-center">
                    <div className="bg-gradient-to-br from-text-green/90 to-text-light_green/70 rounded-2xl p-6 text-center w-full">
                      <div className="text-5xl md:text-6xl font-bold text-background-light mb-2">
                        {feature.microStat}
                      </div>
                      <div className="text-background-light text-sm md:text-base font-medium">
                        {feature.statLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom decorative element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-text-green via-text-light_green to-text-green"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-text-green to-text-light_green rounded-2xl p-8 shadow-2xl shadow-text-light_green/20">
            <h3 className="text-2xl md:text-3xl font-bold text-background-light mb-4">
              Ready to Join the Underdog Revolution?
            </h3>
            <p className="text-background-light/90 mb-6 max-w-2xl">
              Stop wasting time on platforms that don't care. Start building your future with NoNoMate.
            </p>
            <button className="bg-background-light text-text-green px-8 py-4 rounded-full font-bold text-md md:text-lg hover:scale-105 transition-transform duration-200 shadow-lg">
              Get Started Free →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoNomateSolution;