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
            <span className="text-xl text-text-green font-bold gradient-text">Nonomate</span>
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
        className={`fixed bg-background-light rounded-[1rem] p-2 shadow-xl border-t border-text-light_green z-50 transition-all duration-300 ease-in-out ${
            isMobile
            ? `bottom-0 left-0 right-0 ${isMenuOpen ? "translate-y-0" : "translate-y-full"}`
            : `top-20 right-4 w-72 ${
                isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`
        }`}
        >
        {/* Header message */}
        <div className="m-2 p-3 rounded-xl bg-text-light_green border flex flex-col justify-between items-center border-b">
            <h2 className="ml-3 text-[12px] font-medium text-center text-background-light">
            Sign in to explore internships, get personalized alerts, and build your career with NoNoMate.
            </h2>
        </div>

        {/* Sign In Button */}
        <div className="p-2">
            <Button
            className="w-full bg-text-light_green hover:bg-text-light_green/50 text-background-light rounded-xl py-2"
            onClick={() => (window.location.href = "/login")}
            >
            Sign in
            </Button>
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-3 space-y-4">
            <div className="flex justify-between items-center text-sm font-medium">
            <div className="text-text-green">Find Internships</div>
            <button className="text-text-light_green hover:underline" onClick={() => (window.location.href = "/internships")}>
                Browse
            </button>
            </div>

            <div className="flex justify-between items-center text-sm font-medium">
            <div className="text-text-green">Job Alerts</div>
            <button className="text-text-light_green hover:underline" onClick={() => (window.location.href = "/alerts")}>
                Manage
            </button>
            </div>

            <div className="flex justify-between items-center text-sm font-medium">
            <div className="text-text-green">Resume Builder</div>
            <button className="text-text-light_green hover:underline" onClick={() => (window.location.href = "/resume-builder")}>
                Start
            </button>
            </div>

            <div className="flex justify-between items-center text-sm font-medium">
            <div className="text-text-green">Student Community</div>
            <button className="text-text-light_green hover:underline" onClick={() => (window.location.href = "/community")}>
                Join
            </button>
            </div>

            <div className="flex justify-between items-center text-sm font-medium">
            <div className="text-text-green">Profile</div>
            <button className="text-text-light_green hover:underline" onClick={() => (window.location.href = "/profile")}>
                Update
            </button>
            </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center gap-4 p-4 border-t text-xs font-medium">
            <button className="hover:text-text-green" onClick={() => (window.location.href = "/privacy-policy")}>Privacy</button>
            <button className="hover:text-text-green" onClick={() => (window.location.href = "/terms-of-service")}>Terms</button>
            <button className="hover:text-text-green" onClick={() => (window.location.href = "/faqs")}>FAQ</button>
        </div>
        </div>
        </header>
    );
    }

export default Header;
