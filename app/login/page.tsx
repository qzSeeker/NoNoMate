'use client'

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function Login() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-tl from-text-light_green/60 to-background-light p-4">

        {/* Login Content */}
        <div className="max-w-lg w-full flex flex-col items-center justify-center">
            <h2 className="text-[22px] md:text-4xl font-semibold text-center text-text-green mb-4">
            Your Career Starts Here.
            </h2>
            <p className="text-md text-center max-w-sm text-text-light_green mb-8">
            Sign in to apply for internships, receive job alerts, build your resume, and access smart career tools powered by AI.
            </p>

            {/* Auth Buttons */}
            <div className="flex w-full flex-col items-center gap-4 md:p-6">
            <button className="bg-background-light text-text-green w-full flex items-center justify-center gap-2 font-medium py-5 px-14 rounded-full shadow-md hover:bg-text-green/10 transition duration-200">
                <img src="/login/microsoft-svgrepo-com.svg" alt="microsoft" className="w-4 h-4" />
                Sign in with Microsoft
            </button>
            <button className="bg-background-light text-text-green w-full flex items-center justify-center gap-2 font-medium py-5 px-14 rounded-full shadow-md hover:bg-text-green/10 transition duration-200">
                <img src="/login/google-icon-logo-svgrepo-com.svg" alt="google" className="w-4 h-4" />
                Sign in with Google
            </button>
            <button className="bg-background-light text-text-green w-full flex items-center justify-center gap-2 font-medium py-5 px-14 rounded-full shadow-md hover:bg-text-green/10 transition duration-200">
                <img src="/login/apple-black-logo-svgrepo-com.svg" alt="apple" className="w-4 h-4" />
                Sign in with Apple
            </button>
            </div>

            {/* Close Button */}
            <div className="w-full flex justify-center mt-6">
                <button
                onClick={() => {
                    window.location.href = "/";
                }}
                className=" z-50 bg-text-light_green text-background-light shadow-md rounded-full p-4 hover:bg-background-light.60 transition duration-200"
                >
                <X className="w-6 h-6"/>
                </button>
            </div>
        </div>
        </div>
    );
}
