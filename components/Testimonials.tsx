'use client'

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        text: "What stood out was the clarity. Fewer applications, real conversations, and no confusion about expectations. It felt slower than mass applying, but much more focused.",
        name: "Final-year CS student",
        details: "Tier-3 college"
    },
    {
        text: "We didn’t get hundreds of applications, and that was the best part. Profiles were clearer and people actually read the role before applying.",
        name: "Early-stage founder",
        details: "SaaS startup"
    },
    {
        text: "Students using NonoMate seem more intentional. Less panic applying, more thinking about fit and learning.",
        name: "Industry mentor",
        details: "Works with early-career developers"
    },
];

export default function Testimonials() {
    return (
        <section className="my-12 py-20 px-6 md:px-12 bg-gradient-to-br from-text-green to-text-light_green">
        <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
            className="text-2xl md:text-3xl font-bold text-background-light mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
            Early users sharing their experience
            </motion.h2>
            <motion.p 
            className="text-lg md:text-xl text-background-light mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
            What people noticed after switching to NonoMate
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
