'use client'

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        text: "I was applying on Internshala for 4 months—800+ applications, 3 interviews, all unpaid. Joined NoNoMate, got matched with a fintech startup in week one. ₹15k stipend, converted to full-time after 6 months. I'm now making ₹8 LPA. Sometimes one platform changes everything.",
        name: "Aayush Sharma",
        details: "B.Tech CSE, Tier-3 College",
    },
    {
        text: "We're a 4-person team. Couldn't afford a senior dev. Found a second-year student on NoNoMate who knew React Native cold. Paid him ₹12k/month. He shipped our MVP's core feature in 3 weeks. Now he's employee #2 with equity. Best hire we've made.",
        name: "Tanvi Mehta",
        details: "Co-founder, SaasFlow"
    },
    {
        text: "I mentor 50+ students a semester. Most waste months on fake internship sites. I now tell everyone: if you're serious, try NoNoMate first. The community alone is worth it—I've seen juniors get referrals, freelance projects, even co-founder matches.",
        name: "Rohit Malhotra",
        details: "Career Mentor"
    },
    {
        text: "The AI matching is lowkey scary good. I built a Web3 wallet as a side project. Got matched with a DeFi startup the next day because their JD mentioned 'blockchain curious'. They didn't care I was self-taught or that I dropped out. First paycheck hit in 6 days.",
        name: "Neha Kapoor",
        details: "Self-taught Dev → Blockchain Intern"
    },
];

export default function Testimonials() {
    return (
        <section className="my-12 py-20 px-6 md:px-12 bg-text-light_green">
        <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
            className="text-2xl md:text-3xl font-bold text-background-light mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
            Real Students. Real Outcomes. Real Talk.
            </motion.h2>
            <motion.p 
            className="text-lg md:text-xl text-background-light mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
            These aren't cherry-picked. This is the group chat energy.
            </motion.p>

            <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            // className="swiper-pagination-bullet swiper-pagination-bullet-active"
            >
            {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                <motion.div 
                    className="bg-white/10 backdrop-blur-sm border border-background-light/20 p-6 mb-8 md:p-10 rounded-xl shadow-xl max-w-3xl mx-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <p className="text-sm md:text-xl text-background-light leading-relaxed text-justify mb-4 italic">"{item.text}"</p>
                    <h4 className="text-xs font-semibold text-background-light">— {item.name}</h4>
                    <p className="text-xs text-background-light">{item.details}</p>
                </motion.div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        </section>
    );
}
