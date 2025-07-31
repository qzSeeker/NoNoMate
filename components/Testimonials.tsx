'use client'

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: "Aayush, B.Tech Student",
        text: "I always struggled to find real, meaningful internships as a student from a tier-3 college. This platform made it simple relevant opportunities, no spam, just value. It feels like someone finally built something for us.",
    },
    {
        name: "Tanvi, Startup Founder",
        text: "Hiring interns used to be chaos. Now, it's organized, fast, and the students actually care. Nonomate helped us hire two rockstar devs who delivered from day one.",
    },
    {
        name: "Rohit, Friend & Beta User",
        text: "Watched this platform grow from day one, the vision was always clear, connect ambitious students with real-world learning. If you're reading this, you're at the right place.",
    },
    {
        name: "Neha, Career Mentor",
        text: "I mentor dozens of students every month, and this is the first tool I genuinely recommend. It's more than just internships, it’s a confidence booster.",
    }
];

export default function Testimonials() {
    return (
        <section className="my-12 py-20 px-6 md:px-12 bg-text-light_green">
        <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
            className="text-3xl md:text-4xl font-bold text-background-light mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
            What They’re Saying About Us?
            </motion.h2>

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
                </motion.div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        </section>
    );
}
