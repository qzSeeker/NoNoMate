"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkIsMobile();

        // Add event listener
        window.addEventListener("resize", checkIsMobile);

        // Cleanup
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

return (
    <header className="absolute w-full z-50">
        <div className="w-full max-w-[1400px] mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-3 items-center">
            <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            >
            <span className="text-xl text-text-green font-bold gradient-text">NoNoMate</span>
            </motion.div>

            <nav className="hidden text-md font-bold md:flex justify-center items-center space-x-8 rounded-2xl p-3">
            <a
                href="#features"
                className="text-text-light_green hover:text-text-green transition-colors"
            >
                Features
            </a>
            <a
                href="#testimonials"
                className="text-text-light_green hover:text-text-green transition-colors"
            >
                Success Stories
            </a>
            <a
                href="#pricing"
                className="text-text-light_green hover:text-text-green transition-colors"
            >
                Pricing
            </a>
            </nav>
            <div className="w-full flex justify-end">
            {/* <Link href="/auth"> */}
                <Button 
                    onClick={() => setIsMenuOpen(true)}
                    variant="outline" 
                    className="md:mr-2 font-semibold border border-text-light_green text-text-green hover:bg-text-light_green hover:text-button-text transition-colors">
                Sign In
                </Button>
            {/* </Link> */}
            <Button
            className="bg-button-bg font-semibold hidden md:block text-button-text hover:bg-button-bg/90"
            >
            Try for Free!
            </Button>
            </div>

        </div>
            {/* Modal Overlay */}
            {isMenuOpen && (
            <div
                className="fixed inset-0 z-40"
                onClick={() => setIsMenuOpen(false)}
            />
            )}

            {/* Modal Menu */}
            <div
            className={`fixed bg-[#fffef9] rounded-[2rem] shadow-xl z-50 transition-all duration-300 ease-in-out ${
                isMobile
                ? `bottom-0 left-0 right-0 ${
                    isMenuOpen ? "translate-y-0" : "translate-y-full"
                    }`
                : `top-20 right-4 w-72 ${
                    isMenuOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`
            }`}
            >
            <div className="m-2 p-2 rounded-[2rem] bg-[#fffdf4]/70 border flex flex-col justify-between items-center border-b">
                <h2 className="ml-3 text-[12px] font-medium text-center text-[#333333]">
                Create an account or sign in to unlock personalized career
                guidance, study plans, job alerts, and voice-enabled AI help.
                </h2>
            </div>

            <div className="p-4">
                <Button
                className="w-full bg-[#333333] hover:bg-[#333333]/90 text-white rounded-[1rem] py-2"
                onClick={() => (window.location.href = "/login")}
                >
                Sign in
                </Button>
            </div>

            <div className="px-4 py-3 space-y-4">
                <div className="flex justify-between items-center text-sm font-medium">
                <div className="text-[#333333]">Profile</div>
                <div className="text-[#555555]">Update</div>
                </div>

                <div className="flex justify-between items-center text-sm font-medium">
                <div className="text-[#333333]">Voice Assistant</div>
                <div className="text-[#555555]">On</div>
                </div>

                <div className="flex justify-between items-center text-sm font-medium">
                <div className="text-[#333333]">Language</div>
                <div className="text-[#555555]">EN</div>
                </div>

                {/* <div className="flex justify-between items-center text-sm font-medium">
                <div className="text-[#333333]">Theme</div>
                <ThemeToggle />
                </div> */}

                <div className="flex justify-between items-center text-sm font-medium">
                <div className="text-[#333333]">Study Plan</div>
                <button className="text-[#555555] hover:underline">View</button>
                </div>

                <div className="flex justify-between items-center text-sm font-medium">
                <div className="text-[#333333]">Job Alerts</div>
                <button className="text-[#555555] hover:underline">Manage</button>
                </div>

                <div className="flex justify-between items-center text-sm font-medium">
                <div className="text-[#333333]">Resume Builder</div>
                <button className="text-[#555555] hover:underline">Start</button>
                </div>

                <div className="flex justify-between items-center text-sm font-medium">
                <div className="text-[#333333]">About CareerMate</div>
                <button className="text-[#555555] hover:underline">Read</button>
                </div>
            </div>

            <div className="flex justify-center gap-4 p-4 border-t text-xs font-medium">
                <button className="hover:text-[#333333]">Privacy</button>
                <button className="hover:text-[#333333]">Terms</button>
                <button className="hover:text-[#333333]">FAQ</button>
            </div>
            </div>
        </header>
    );
    }

export default Header;
