import React from 'react';

interface StartupBenefit {
    text: string;
    highlight: string;
}

const NoNomateStartups = () => {
    const benefits: StartupBenefit[] = [
        {
        text: "Pre-vetted candidates only",
        highlight: "Every student has completed projects, passed our skill assessments, and been background checked. You're not sorting through 500 spam applications."
        },
        {
        text: "Hire within 48 hours",
        highlight: "Post a role. Get 10-15 matches in your inbox by next morning. Interview the best 3-5. Hire by end of week."
        },
        {
        text: "Budget-friendly pricing",
        highlight: "You're a startup. We get it. Students on NoNoMate are realistic about stipends if the learning is real. Fair terms for both sides."
        },
        {
        text: "Retention support",
        highlight: "We check in with both parties at week 2, month 1, and month 3. If something's off, we mediate. Our 89% intern retention rate isn't luck."
        },
        {
        text: "Community vouches for you",
        highlight: "When students see you treat interns well, word spreads FAST. Good startups get repeat applicants. Bad ones get flagged."
        }
    ];

    return (
        <div className="min-h-screen py-12 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
            <h1 className="text-2xl md:text-3xl font-bold text-text-green mb-6 leading-tight">
                If You're a Startup That Wants
                <span className="md:block mt-2 bg-gradient-to-r from-text-green to-text-light_green bg-clip-text text-transparent">
                {" "}Hungry Talent, Not Pedigree
                </span>
            </h1>
            <p className="text-lg md:text-xl text-text-light_green font-medium max-w-3xl mx-auto">
                Here's why 280+ founders choose NoNoMate over LinkedIn/Internshala
            </p>
            </div>

            {/* Benefits List */}
            <div className="bg-background-light rounded-3xl shadow-2xl shadow-text-light_green/20 p-2 md:p-12 border border-text-light_green/20 mb-12">
            <div className="space-y-0 md:space-y-6">
                {benefits.map((benefit, index) => (
                <div 
                    key={index}
                    className="flex gap-4 items-start group hover:bg-text-light_green/5 p-4 rounded-xl transition-all duration-200"
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

            {/* Social Proof Quote */}
            <div className="bg-gradient-to-br from-text-green/10 to-text-light_green/10 rounded-2xl p-8 md:p-10 mb-12 border-l-4 border-text-green">
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Quote Icon */}
                <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-text-green opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                </div>
                
                {/* Quote Content */}
                <div className="flex-1">
                <p className="text-text-green text-md md:text-lg font-medium mb-4 leading-relaxed italic">
                    "We hired our first backend intern through NoNoMate in 2 days. He's now our lead engineer and holds 4% equity."
                </p>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-text-green to-text-light_green rounded-full flex items-center justify-center text-background-light font-bold text-lg">
                    R
                    </div>
                    <div>
                    <p className="text-text-green font-bold">Rohan M.</p>
                    <p className="text-text-light_green text-sm">Founder of FinVault (Series A)</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
            <button className="group relative bg-gradient-to-r from-text-green to-text-light_green text-background-light px-10 py-5 rounded-full font-bold text-sm md:text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 mb-6">
                Post Your First Role Free
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
                →
                </span>
            </button>
            
            {/* Trust Signal */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-text-light_green">
                <svg className="w-5 h-5 text-text-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-base md:text-lg font-medium">
                No payment until you make your first hire.
                </p>
            </div>
            </div>

            {/* Stats Grid */}
            <div className="mt-12 grid grid-cols-3 gap-2 md:gap-6">
            <div className="bg-background-light rounded-xl p-3 md:p-6 border border-text-light_green/20 text-center shadow-2xl shadow-text-light_green/20">
                <div className="text-xl md:text-3xl font-bold text-text-green mb-2">280+</div>
                <div className="text-sm text-text-light_green">Active Startups</div>
            </div>
            <div className="bg-background-light rounded-xl p-3 md:p-6 border border-text-light_green/20 text-center shadow-2xl shadow-text-light_green/20">
                <div className="text-xl md:text-3xl font-bold text-text-green mb-2">48hrs</div>
                <div className="text-sm text-text-light_green">Avg. Time to Hire</div>
            </div>
            <div className="bg-background-light rounded-xl p-3 md:p-6 border border-text-light_green/20 text-center shadow-2xl shadow-text-light_green/20">
                <div className="text-xl md:text-3xl font-bold text-text-green mb-2">89%</div>
                <div className="text-sm text-text-light_green">Retention Rate</div>
            </div>
            </div>

            {/* Additional Value Props */}
            <div className="mt-12 bg-text-green/5 rounded-2xl p-6 md:p-8 border border-text-green/20 shadow-2xl shadow-text-light_green/20">
            <h3 className="text-2xl font-bold text-text-green mb-4 text-center">
                Trusted by Startups From
            </h3>
            <div className="flex flex-wrap justify-start items-center gap-6 text-text-light_green font-medium">
                <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-text-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Y Combinator
                </span>
                <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-text-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Sequoia Portfolio
                </span>
                <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-text-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Accel-backed
                </span>
                <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-text-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Bootstrapped Winners
                </span>
            </div>
            </div>
        </div>
        </div>
    );
};

export default NoNomateStartups