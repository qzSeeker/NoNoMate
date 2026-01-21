'use client';

import React, { useState } from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { Heart, Mail, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

function Footer() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
        // Here you would typically send the email to your backend
        console.log("Subscribing email:", email);
        setIsSubscribed(true);
        setEmail("");
        setTimeout(() => setIsSubscribed(false), 3000);
        }
    };
return (
    <div className="bg-text-light_green w-full">
        <div className="flex flex-col items-center gap-6 justify-center px-4 relative max-w-[1400px] mx-auto">
            <div className="mt-10 w-full flex items-center justify-between gap-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                    <p className="text-center text-background-light">
                    © {new Date().getFullYear()} NoNoMate. All rights reserved.
                    </p>
                {/* Links */}
                <div>
                    <ul className="text-[14px] md:text-[16px] flex gap-6 md:gap-10 flex-wrap">
                        <li><a href="/about" className="text-white hover:text-background-light/60 transition-colors">About Us</a></li>
                        <li><a href="/how-it-works" className="text-white hover:text-background-light/60 transition-colors">How It Works</a></li>
                        <li><a href="/contact" className="text-white hover:text-background-light/60 transition-colors">Contact</a></li>
                        <li><a href="/blog" className="text-white hover:text-background-light/60 transition-colors">Blog</a></li>
                    </ul>
                </div>
                <div className="flex space-x-4">
                    <a href="https://twitter.com/nonomate_" className="text-background-light hover:text-text-light_green" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="footer/x.jpg"
                        alt="Twitter"
                        width={24}
                        height={24}
                        className="w-8 md:w-10 h-8 md:h-10 rounded-full"
                    />
                    </a>
                    <a href="https://linkedin.com/company/nonomate" className="text-background-light hover:text-text-light_green" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="footer/in.png"
                        alt="Twitter"
                        width={24}
                        height={24}
                        className="w-8 md:w-10 h-8 md:h-10"
                    />
                    </a>
                    <a href="mailto:hello@nonomate.com" className="text-background-light hover:text-text-light_green" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="footer/mail.png"
                        alt="Mail"
                        width={24}
                        height={24}
                        className="w-10 h-10 md:w-12 md:h-12"
                    />
                    </a>
                    <a href="https://instagram.com/nonomate_" className="text-background-light hover:text-text-light_green" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="footer/instagram.png"
                        alt="Instagram"
                        width={24}
                        height={24}
                        className="w-10 md:w-12 h-10 md:h-12"
                    />
                    </a>
                </div>
            </div>
            {/* Newsletter Subscription */}
            <div className="flex items-center justify-between flex-col md:flex-row w-full gap-6 md:gap-0 py-10">
                <div className="max-w-lg">
                    <h1 className="text-xl md:text-4xl text-background-light mb-2">
                        Your Move. 
                        <br/>Stay Stuck or Start Building.
                    </h1>
                    <p className="text-background-light text-[16px] md:text-[18px] max-w-4xl mx-auto leading-relaxed mb-6 ">
                    999+ students already made the switch. Most of them were exactly where you are right now tired of fake opportunities, ready for something real.
                    </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <h3 className="text-background-light text-xl md:text-2xl">
                    Stay in the Loop
                    </h3>
                </div>

                <p className="text-background-light text-center mb-6 opacity-90 text-[14px] md:text-[16px]">
                    Get weekly updates on internship opportunities, startup resources,
                    and industry insights.
                </p>

                {isSubscribed ? (
                    <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-medium">
                        <Heart className="w-5 h-5" />
                        Thanks for subscribing!
                    </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="relative">
                        <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/20 border-white/30 text-background-light placeholder:text-white/70 rounded-xl h-12 pr-12 focus:bg-white/30 focus:border-white/50"
                        required
                        />
                        <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-background-light" />
                    </div>

                    <Button
                        type="submit"
                        className="w-max relative mx-auto bg-background-light/80 text-text-light_green hover:bg-background-light/90 rounded-xl h-12 px-6 font-semibold transition-all duration-300"
                    >
                        {/* <Send className="w-5 h-5 mr-2" /> */}
                        Subscribe
                    </Button>
                    </form>
                )}
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto flex justify-center bottom-0">
            <TextHoverEffect text="NoNoMate" duration={0.5} automatic={true} />
        </div>

    </div>
    );
}

export default Footer;
