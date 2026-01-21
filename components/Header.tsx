"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Header() {
    const [isSignInMenuOpen, setIsSignInMenuOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if the device is mobile
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

    // Close mobile nav menu on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isMobileNavOpen && event.target instanceof Element) {
                if (!event.target.closest(".mobile-nav-menu") && !event.target.closest(".hamburger-btn")) {
                    setIsMobileNavOpen(false);
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };      
    }, [isMobileNavOpen]);

    // Close mobile nav menu on outside click for sign-in modal
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isSignInMenuOpen && event.target instanceof Element) {
                if (!event.target.closest(".signin-modal")) {
                    setIsSignInMenuOpen(false);
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };      
    }, [isSignInMenuOpen]);

    // Prevent body scroll when mobile nav is open
    useEffect(() => {
        if (isMobileNavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileNavOpen]);

return (
    <header className="w-full z-50 fixed">
        <div className="w-full mx-auto px-4 py-4 backdrop-blur-sm bg-background-light/20 ">
            {/* Mobile Layout */}
            <div className="md:hidden flex items-center justify-between">
                {/* Left - Hamburger Menu */}
                <button
                    className="hamburger-btn flex flex-col space-y-1 p-2"
                    onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <span className={`block rounded-full w-3.5 h-0.5 bg-text-green transition-all duration-300 ${
                        isMobileNavOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}></span>
                    <span className={`block rounded-full w-5 h-0.5 bg-text-green transition-all duration-300 ${
                        isMobileNavOpen ? 'opacity-0' : ''
                    }`}></span>
                    <span className={`block rounded-full w-3.5 h-0.5 bg-text-green transition-all duration-300 ${
                        isMobileNavOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}></span>
                </button>

                {/* Center - Logo */}
                <motion.div
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl text-text-green font-bold gradient-text">Nonomate</span>
                    </Link>
                </motion.div>

                {/* Right - Sign In Button */}
                <Button 
                    onClick={() => setIsSignInMenuOpen(true)}
                    variant="outline" 
                    className="font-semibold border border-text-light_green text-text-green hover:bg-text-light_green hover:text-button-text transition-colors text-sm px-3 py-1"
                >
                    Sign In
                </Button>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-3 items-center max-w-7xl mx-auto">
                {/* Left - Logo */}
                <motion.div
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl text-text-green font-bold gradient-text">Nonomate</span>
                    </Link>
                </motion.div>

                {/* Center - Desktop Navigation */}
                <nav className="flex justify-center items-center space-x-8 rounded-2xl p-3 text-md font-bold">
                    <a
                        href="#"
                        className="text-text-light_green hover:text-text-green transition-colors"
                    >
                        Feed
                    </a>
                    <a
                        href="#"
                        className="text-text-light_green hover:text-text-green transition-colors"
                    >
                        Why Us
                    </a>
                    <a
                        href="#"
                        className="text-text-light_green hover:text-text-green transition-colors"
                    >
                        Stories
                    </a>
                    <a
                        href="#"
                        className="text-text-light_green hover:text-text-green transition-colors"
                    >
                        Plans
                    </a>
                    <a
                        href="/blogs"
                        className="text-text-light_green hover:text-text-green transition-colors"
                    >
                        Blogs
                    </a>
                </nav>

                {/* Right - Action Buttons */}
                <div className="flex justify-end items-center space-x-2">
                    <Button 
                        onClick={() => setIsSignInMenuOpen(true)}
                        variant="outline" 
                        className="font-semibold border border-text-light_green text-text-green hover:bg-text-light_green hover:text-button-text transition-colors"
                    >
                        Sign In
                    </Button>
                    <Button
                        className="bg-button-bg font-semibold text-button-text hover:bg-button-bg/90"
                    >
                        Try for Free!
                    </Button>
                </div>
            </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav-menu fixed top-0 left-0 h-full w-80 bg-background-light shadow-xl border-r border-text-light_green z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
            isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-text-light_green/20">
                <span className="text-xl text-text-green font-bold gradient-text">Nonomate</span>
                <button
                    onClick={() => setIsMobileNavOpen(false)}
                    className="p-2 text-text-light_green hover:text-text-green"
                    aria-label="Close mobile menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="p-4 space-y-4">
                <a
                    href="#"
                    className="block py-3 px-4 text-text-light_green hover:text-text-green hover:bg-text-light_green/10 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMobileNavOpen(false)}
                >
                    Why Us
                </a>
                <a
                    href="#"
                    className="block py-3 px-4 text-text-light_green hover:text-text-green hover:bg-text-light_green/10 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMobileNavOpen(false)}
                >
                    Stories
                </a>
                <a
                    href="#"
                    className="block py-3 px-4 text-text-light_green hover:text-text-green hover:bg-text-light_green/10 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMobileNavOpen(false)}
                >
                    Plans
                </a>
                <a
                    href="/blogs"
                    className="block py-3 px-4 text-text-light_green hover:text-text-green hover:bg-text-light_green/10 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMobileNavOpen(false)}
                >
                    Blogs
                </a>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-text-light_green/20">
                <Button
                    className="w-full bg-button-bg font-semibold text-button-text hover:bg-button-bg/90 mb-2"
                    onClick={() => setIsMobileNavOpen(false)}
                >
                    Try for Free!
                </Button>
            </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileNavOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                onClick={() => setIsMobileNavOpen(false)}
            />
        )}

        {/* Sign In Modal Overlay */}
        {isSignInMenuOpen && (
            <div
                className="fixed inset-0 z-40"
                onClick={() => setIsSignInMenuOpen(false)}
            />
        )}

        {/* Sign In Modal Menu */}
        <div
            className={`signin-modal fixed bg-background-light rounded-[1rem] p-2 shadow-xl border-t border-text-light_green z-50 transition-all duration-300 ease-in-out ${
                isMobile
                ? `bottom-0 left-0 right-0 ${isSignInMenuOpen ? "translate-y-0" : "translate-y-full"}`
                : `top-20 right-4 w-72 ${
                    isSignInMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
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
                    onClick={() => (window.location.href = "/auth/login")}
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
            <div className="flex justify-center gap-4 p-4 border-t border-text-light_green/20 text-xs font-medium">
                <button className="hover:text-text-green" onClick={() => (window.location.href = "/privacy-policy")}>Privacy</button>
                <button className="hover:text-text-green" onClick={() => (window.location.href = "/terms-of-service")}>Terms</button>
                <button className="hover:text-text-green" onClick={() => (window.location.href = "/faqs")}>FAQ</button>
            </div>
        </div>
    </header>
);
}

export default Header;