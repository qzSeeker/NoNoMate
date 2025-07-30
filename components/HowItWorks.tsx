import React from 'react'
import { AlertTriangle, Users, TrendingUp, CheckCircle, Target, Shield } from 'lucide-react'

function HowItWorks() {
    const painPoints = [
        {
            icon: <AlertTriangle className="w-8 h-8 text-text-green/50" />,
            title: "Fake internship offers with no real work",
            description: "Students waste time on meaningless tasks that don't build skills or add value to their resume."
        },
        {
            icon: <Users className="w-8 h-8 text-orange-500" />,
            title: "Unpaid 'exposure' jobs with zero mentorship",
            description: "Companies promise learning opportunities but deliver coffee runs and data entry with no guidance."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
            title: "Startups can't find skilled, reliable interns — or get ghosted",
            description: "Growing companies struggle to find committed students who show up and contribute meaningfully."
        }
    ]

    const solutions = [
        {
            icon: <Target className="w-8 h-8 text-green-600" />,
            title: "Smart Matching",
            description: "Our algorithm connects students with startups based on skills, interests, and growth potential."
        },
        {
            icon: <Shield className="w-8 h-8 text-green-600" />,
            title: "Verified Users",
            description: "Every student and startup goes through our verification process to ensure authenticity."
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-green-600" />,
            title: "Clear Growth Paths",
            description: "Structured programs with defined milestones, mentorship, and real skill development."
        }
    ]

    return (
        <div className="min-h-screen mt-16 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="text-text-green">Internships in India Are Broken.</span>
                        <br />
                        <span className="text-text-light_green">We're Fixing Them.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-green max-w-3xl mx-auto">
                        The current internship ecosystem fails both students and startups. Here's how we're changing that.
                    </p>
                </div>

                {/* Pain Points Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-semibold text-text-green text-center mb-12">
                        The Pain Points
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {painPoints.map((point, index) => (
                            <div key={index} className="bg-text-light_green rounded-xl p-8 shadow-lg hover:shadow-xl">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 mt-1">
                                        {point.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-background-light mb-3">
                                            {point.title}
                                        </h3>
                                        <p className="text-background-light leading-relaxed">
                                            {point.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center mb-16">
                    <div className="h-px bg-gray-300 flex-1"></div>
                    <div className="mx-6 p-4 bg-green-100 rounded-full">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>
                    <div className="h-px bg-gray-300 flex-1"></div>
                </div>

                {/* Solution Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
                        Our Solution
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200">
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                                        {solution.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                        {solution.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {solution.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Experience Real Internships?
                    </h2>
                    <p className="text-xl mb-8 text-green-100">
                        NonoMate is here to rebuild trust — with smart matching, verified users, and clear growth paths.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                            Find Internships
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200">
                            Hire Interns
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks