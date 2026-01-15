'use client'
import { supabase } from "@/lib/supabaseClient";
import { X } from "lucide-react";

export default function Login() {
    const handleLogin = async (provider: "google" | "github") => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        });
        
        if (error) {
            console.error('Login error:', error.message);
        }
    };

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-tl from-text-light_green/60 to-background-light p-4">
            <div className="max-w-lg w-full flex flex-col items-center justify-center">
                <h2 className="text-[22px] md:text-4xl font-semibold text-center text-text-green mb-4">
                    Your Career Starts Here.
                </h2>
                <p className="text-md text-center max-w-sm text-text-light_green mb-8">
                    Sign in to apply for internships, receive job alerts, build your resume, and access smart career tools powered by AI.
                </p>

                <div className="flex w-full flex-col items-center gap-4 md:p-6">
                    <button 
                        onClick={() => handleLogin("google")}
                        className="bg-background-light text-text-green w-full flex items-center justify-center gap-2 font-medium py-5 px-14 rounded-full shadow-md hover:bg-text-green/10 transition duration-200"
                    >
                        <img src="/login/google-icon-logo-svgrepo-com.svg" alt="google" className="w-4 h-4" />
                        Sign in with Google
                    </button>
                    <button 
                        onClick={() => handleLogin("github")}
                        className="bg-background-light text-text-green w-full flex items-center justify-center gap-2 font-medium py-5 px-14 rounded-full shadow-md hover:bg-text-green/10 transition duration-200"
                    >
                        <img src="/login/apple-black-logo-svgrepo-com.svg" alt="github" className="w-4 h-4" />
                        Sign in with Github
                    </button>
                </div>

                <div className="w-full flex justify-center mt-6">
                    <button
                        onClick={() => { window.location.href = "/"; }}
                        className="z-50 bg-text-light_green text-background-light shadow-md rounded-full p-4 hover:bg-background-light.60 transition duration-200"
                    >
                        <X className="w-6 h-6"/>
                    </button>
                </div>
            </div>
        </div>
    );
}
