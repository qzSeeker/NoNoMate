import React, { useState } from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { Heart, Mail, Rocket, Send, Users } from "lucide-react";
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
    <div className="bg-text-light_green">
        <div className="flex flex-col md:flex-row md:items-end items-center gap-6 justify-center py-12 px-4">
            {/* Newsletter Subscription */}
            <div className="">
                <div className="">
                    <TextHoverEffect text="NoNoMate" duration={0.5} automatic={true} />
                </div>
                <p className="text-white text-[16px] md:text-[18px] max-w-4xl text-center mx-auto leading-relaxed opacity-90 mb-6">
                Join thousands of ambitious interns and innovative startups in our
                community. Get exclusive insights, opportunities, and resources
                delivered to your inbox.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <h3 className="text-white text-xl md:text-2xl font-semibold">
                    Stay in the Loop
                    </h3>
                </div>

                <p className="text-white text-center mb-6 opacity-90 text-[14px] md:text-[16px]">
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
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-lg h-12 pr-12 focus:bg-white/30 focus:border-white/50"
                        required
                        />
                        <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-white text-text-light_green hover:bg-white/90 rounded-lg h-12 font-semibold transition-all duration-300 hover:scale-105"
                    >
                        <Send className="w-5 h-5 mr-2" />
                        Subscribe to Newsletter
                    </Button>
                    </form>
                )}
                </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
            {/* Useful Links */}
            <div>
                <h3 className="text-white text-md md:text-xl font-semibold mb-4">
                Useful Links
                </h3>
                <ul className="space-y-2 text-[14px] md:text-[16px]">
                <li><a href="/about" className="text-white hover:text-background-light/60 transition-colors">About Us</a></li>
                <li><a href="/how-it-works" className="text-white hover:text-background-light/60 transition-colors">How It Works</a></li>
                <li><a href="/contact" className="text-white hover:text-background-light/60 transition-colors">Contact</a></li>
                <li><a href="/blog" className="text-white hover:text-background-light/60 transition-colors">Blog</a></li>
                <li><a href="/faqs" className="text-white hover:text-background-light/60 transition-colors">FAQs</a></li>
                </ul>
            </div>

            {/* Opportunities */}
            <div>
                <h3 className="text-white text-md md:text-xl font-semibold mb-4">
                Opportunities
                </h3>
                <ul className="space-y-2 text-[14px] md:text-[16px]">
                <li><a href="/internships" className="text-white hover:text-background-light/60 transition-colors">Find Internships</a></li>
                <li><a href="/apply" className="text-white hover:text-background-light/60 transition-colors">Apply as a Student</a></li>
                <li><a href="/startup-program" className="text-white hover:text-background-light/60 transition-colors">Startup Program</a></li>
                <li><a href="/partner-with-us" className="text-white hover:text-background-light/60 transition-colors">Partner With Us</a></li>
                </ul>
            </div>

            {/* For Students */}
            <div>
                <h3 className="text-white text-md md:text-xl font-semibold mb-4">
                For Students
                </h3>
                <ul className="space-y-2 text-[14px] md:text-[16px]">
                <li><a href="/student-dashboard" className="text-white hover:text-background-light/60 transition-colors">Dashboard</a></li>
                <li><a href="/profile-builder" className="text-white hover:text-background-light/60 transition-colors">Build Resume</a></li>
                <li><a href="/community" className="text-white hover:text-background-light/60 transition-colors">Join Community</a></li>
                <li><a href="/discord" className="text-white hover:text-background-light/60 transition-colors">Join Discord</a></li>
                </ul>
            </div>

            {/* For Employers */}
            <div>
                <h3 className="text-white text-md md:text-xl font-semibold mb-4">
                For Employers
                </h3>
                <ul className="space-y-2 text-[14px] md:text-[16px]">
                <li><a href="/hire-interns" className="text-white hover:text-background-light/60 transition-colors">Hire Interns</a></li>
                <li><a href="/post-opportunity" className="text-white hover:text-background-light/60 transition-colors">Post an Opportunity</a></li>
                <li><a href="/why-nonomate" className="text-white hover:text-background-light/60 transition-colors">Why NoNoMate</a></li>
                </ul>
            </div>
            {/* Social Section (below the grid) */}
            <div className="mt-10">
            <h3 className="text-white text-md md:text-xl font-semibold mb-4">
                Follow Us
            </h3>
            <div className="flex space-x-4">
                <a href="https://twitter.com/nonomate_" className="text-white hover:text-text-light_green" target="_blank" rel="noopener noreferrer">
                <Image
                    src="footer/x.png"
                    alt="Twitter"
                    width={24}
                    height={24}
                    className="w-8 md:w-10 h-8 md:h-10"
                />
                </a>
                <a href="https://linkedin.com/company/nonomate" className="text-white hover:text-text-light_green" target="_blank" rel="noopener noreferrer">
                <Image
                    src="footer/in.png"
                    alt="Twitter"
                    width={24}
                    height={24}
                    className="w-8 md:w-10 h-8 md:h-10"
                />
                </a>
                <a href="mailto:hello@nonomate.com" className="text-white hover:text-text-light_green" target="_blank" rel="noopener noreferrer">
                <Image
                    src="footer/mail.png"
                    alt="Mail"
                    width={24}
                    height={24}
                    className="w-10 h-10 md:w-12 md:h-12"
                />
                </a>
                <a href="https://instagram.com/nonomate_" className="text-white hover:text-text-light_green" target="_blank" rel="noopener noreferrer">
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
            </div>

        </div>

        <div className="space-y-2 w-max mx-auto bg-white/10 backdrop-blur-sm border-t border-white/20 rounded-t-xl text-center py-4 px-6 text-sm">
            <p className="text-center text-background-light">
            © {new Date().getFullYear()} NoNoMate. All rights reserved.
            </p>
        </div>
    </div>
    );
}

export default Footer;
