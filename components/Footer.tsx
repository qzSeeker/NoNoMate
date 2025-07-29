import React, { useState } from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { Heart, Mail, Rocket, Send, Users } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
        <div className="">
            <TextHoverEffect text="NoNoMate" duration={0.5} automatic={true} />

            <p className="text-white text-lg max-w-4xl text-center mx-auto leading-relaxed opacity-90">
            Join thousands of ambitious interns and innovative startups in our
            community. Get exclusive insights, opportunities, and resources
            delivered to your inbox.
            </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="max-w-2xl mx-6 md:mx-auto my-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-4">
                <h3 className="text-white text-xl md:text-2xl font-semibold">
                Stay in the Loop
                </h3>
            </div>

            <p className="text-white text-center mb-6 opacity-90">
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

        <div className="space-y-4 text-center py-8 text-sm md:text-base">
            <p className="text-center text-white">
            © {new Date().getFullYear()} NoNoMate. All rights reserved.
            </p>
            <p className="text-center text-white">
            Made with ❤️ by the NoNoMate Team
            </p>
        </div>
    </div>
    );
}

export default Footer;
