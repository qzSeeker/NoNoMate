'use client';
import { motion } from 'framer-motion';

const pricingPlans = [
    {
        name: 'Explorer',
        price: '₹0',
        description: 'For students just getting started',
        features: [
        'Apply to unlimited verified internships',
        'Build your public profile',
        'Basic AI matching',
        'Community Discord access',
        'Weekly newsletter with new postings',
        'Resume builder (basic templates)',
        ],
        bestfor: 'Students exploring what\'s out there',
        highlighted: false,
        cta: 'Get Started for Free'
    },
    {
        name: 'Connector',
        price: '₹199/month',
        description: 'For students ready to stand out',
        features: [
        'Everything in Explorer, PLUS:',
        'Priority in search results (10x more views)',
        'Direct message startups',
        'Advanced AI matching (considers projects, not just skills)',
        'Resume reviews by senior devs (2 per month)',
        'Early access to new postings (24 hours before free users)',
        'Monthly 1-on-1 career call',
        'Premium support (response in 4 hours)',
        ],
        bestfor: 'Students serious about landing an offer fast',
        highlighted: true,
        cta: 'Upgrade to Connector'
    },
    {
        name: 'Trailblazer',
        price: '₹499/mo',
        description: 'For students building legendary careers',
        features: [
        'Everything in Connector, PLUS:',
        'Guaranteed interview requests (apply to 3 dream startups, we ensure they review you)',
        'Monthly live AMA with funded founders',
        'Exclusive project briefs (paid freelance gigs from our startup network)',
        'Priority support (response in 1 hour)',
        'Custom portfolio website builder',
        'Access to premium skill-building workshops',
        'Lifetime alumni network access'
        ],
        bestfor: 'Ambitious builders who want the VIP treatment',
        highlighted: false,
        cta: 'Go Trailblazer'
    },
];

export default function PricingSection() {
    return (
        <section className="py-4 md:py-20 bg-background-light" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
            <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-text-green to-text-light_green text-transparent bg-clip-text"
            >
            Pick Your Path. Upgrade When You're Ready.
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-lg md:text-xl text-text-light_green mb-8 text-center'
                >
                    Every plan includes verified internships. No hidden fees. Cancel anytime.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
                <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`p-6 rounded-2xl border-2 flex flex-col justify-evenly shadow-2xl shadow-text-light_green/40 ${
                    plan.highlighted
                    ? 'bg-gradient-to-br from-text-light_green/20 to-text-light_green/10 text-text-green border-text-light_green/20 scale-105'
                    : 'bg-transparent border-text-light_green/20 text-text-green'
                }`}
                >
                    <div>
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <p className="mb-6 text-sm opacity-80 font-semibold">{plan.description}</p>
                </div>
                <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                        <span className="mr-2 text-text-light_green">✔</span> {feature}
                    </li>
                    ))}
                </ul>
                <button
                    className={`w-full py-2 px-4 rounded-lg font-semibold ${
                    plan.highlighted
                        ? 'bg-background-light text-text-green hover:bg-gray-100'
                        : 'bg-text-light_green text-background-light hover:bg-text-light_green/90'
                    } transition`}
                >
                    {plan.cta}
                </button>
                </motion.div>
            ))}
            </div>

            <div className='relative mt-12 text-center'>
                <h1 className='text-lg md:text-xl font-semibold text-text-light_green'>
                    Not sure? Start free. 89% of our paid users started with Explorer.
                </h1>
                <p className='text-md md:text-lg text-text-light_green'>
                    Try any paid plan for 14 days. If you don't get at least 2 quality matches, we'll refund you fully.
                </p>
            </div>

        </div>
        </section>
    );
}
