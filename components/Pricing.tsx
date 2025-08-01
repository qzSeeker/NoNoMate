'use client';
import { motion } from 'framer-motion';

const pricingPlans = [
    {
        name: 'Explorer',
        price: '₹0',
        description: 'Perfect for students exploring startup internships.',
        features: [
        'Apply to verified internships',
        'Build your profile',
        'Limited access to top startups',
        ],
        highlighted: false,
    },
    {
        name: 'Connector',
        price: '₹199/mo',
        description: 'Great for passionate learners looking to connect with fast-growing startups.',
        features: [
        'Priority internship access',
        'Direct connect with HRs',
        'Support group access',
        'Monthly growth newsletter',
        ],
        highlighted: true,
    },
    {
        name: 'Trailblazer',
        price: '₹499/mo',
        description: 'Best for ambitious folks wanting to lead and scale with top startups.',
        features: [
        'Guaranteed interview invites',
        'Startup founder AMAs',
        'Skill-building webinars',
        'Exclusive startup tasks',
        ],
        highlighted: false,
    },
];

export default function PricingSection() {
    return (
        <section className="py-4 md:py-20 dark:bg-neutral-950" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
            <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-text-green to-text-light_green text-transparent bg-clip-text dark:text-background-light"
            >
            Find Your Vibe, Pick Your Plan
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
                <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`p-6 rounded-2xl border-2 shadow-2xl shadow-text-light_green/40 ${
                    plan.highlighted
                    ? 'bg-gradient-to-br from-text-light_green/50 to-text-light_green/10 text-text-green border-text-light_green/20 scale-105'
                    : 'bg-transparent border-text-light_green/20 text-text-green'
                }`}
                >
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <p className="mb-6 text-sm opacity-80 font-semibold">{plan.description}</p>
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
                    {plan.name === 'Explorer' ? 'Start Free' : 'Get Started'}
                </button>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    );
}
