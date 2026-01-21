'use client';
import { motion } from 'framer-motion';

const pricingPlans = [
    {
        name: 'Explorer',
        price: '₹0',
        description: 'For students exploring internships seriously',
        features: [
            'Apply to verified startup internships',
            'Create a public student profile',
            'Basic matching based on skills',
            'Access to open opportunities',
        ],
        cta: 'Start Free'
    },
    {
        name: 'Connector',
        price: '₹199/month',
        description: 'For students who want higher signal and visibility',
        features: [
            'Everything in Explorer',
            'Profile shown higher to startups',
            'Ability to message startups first',
            'Early access to selected roles',
            'Manual profile review (when available)',
        ],
        highlighted: true,
        cta: 'Upgrade to Connector'
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
            className="text-2xl md:text-3xl font-bold text-center mb-5 md:mb-12 bg-gradient-to-r from-text-green to-text-light_green text-transparent bg-clip-text"
            >
            Simple pricing. No hidden incentives.
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-lg md:text-xl text-text-light_green mb-8 text-center'
                >
                    Every plan includes verified internships. No hidden fees. Cancel anytime.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8 relative">
            {pricingPlans.map((plan, i) => (
                <motion.div
                key={plan.name}
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 0.4}}
                className={`p-6 rounded-2xl border-2 flex flex-col justify-evenly shadow-2xl shadow-text-light_green/20 ${
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
                    Try any paid plan for 14 days. Cancel anytime. No long-term commitment.
                </p>
            </div>

        </div>
        </section>
    );
}
