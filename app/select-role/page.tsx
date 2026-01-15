"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient"; // Use consistent client
import { ArrowRight, Briefcase, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SelectRole() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [selectedRole, setSelectedRole] = useState<"intern" | "startup" | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.replace("/auth/login");
                return;
            }
            setUser(user);
        };
        
        checkAuth();
    }, [router]);
    const handleSelect = async (role: "intern" | "startup") => {
        if (!user) return;
        
        setSelectedRole(role);
        setLoading(true);
        
        try {
            const { error } = await supabase.from("profiles").upsert({
                id: user.id,
                email: user.email,
                role: role,
                verified: false,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            });

            if (error) {
                console.error("Error updating role:", error);
                alert("Failed to save role. Please try again.");
            } else {
                router.push("/auth/verify/intern");
            }
        } catch (err) {
            console.error("Unexpected error:", err);
            alert("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center">
            <div className="fixed w-full h-[60%] bg-gradient-to-t from-text-light_green/70 to-transparent bottom-0"></div>
            <div 
                onClick={() => router.push("/")} 
                className="absolute top-0 left-0 right-0 text-lg md:text-xl font-bold gradient-text cursor-pointer flex justify-between items-center py-3 px-6 text-text-green bg-text-light_green/30 w-max rounded-br-3xl">
                Nonomate
            </div>
            <div className="w-full flex flex-col justify-evenly items-center mt-10 max-w-5xl h-screen p-4 md:p-0">
                {/* Header Section */}
                <div className="text-center mb-4">
                <Badge
                    className="bg-text-light_green text-xs md:text-base text-background-light mb-8 shadow-text-light_green overflow-hidden shadow-2xl"
                    variant="secondary"
                >
                    Driven Students.
                    <span className="bg-background-light text-text-light_green ml-2 p-2 md:p-3 shadow-sm">
                    Visionary Startups.
                    </span>
                </Badge>
                <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-text-green to-text-light_green text-transparent bg-clip-text mb-4">
                    Welcome to Nonomate
                </h1>
                <p className="text-md md:text-xl text-text-green max-w-2xl mx-auto">
                    Let’s get you started.
                </p>
                <p className="text-sm md:text-lg text-text-green mx-auto">
                    Choose your role so we can tailor your journey and match you with the right opportunities.
                </p>
                </div>

                {/* Role Selection Cards */}
                <div className="grid grid-cols-2 gap-3 md:gap-6 mb-8">
                {/* Intern Card */}
                <div 
                    className={`group relative overflow-hidden bg-background-light/20 backdrop-blur-sm rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer ${
                    selectedRole === 'intern' ? 'border-text-green/30 ring-4 ring-text-green/30' : 'border-text-green/30 hover:border-text-green/30'
                    }`}
                    onClick={() => !loading && handleSelect('intern')}
                >
                    <div className="p-4 md:p-8">
                    <div className="flex items-center justify-between mb-3 md:mb-6">
                        
                        <ArrowRight className="w-3 md:w-5 h-3 md:h-5 text-gray-400 group-hover:text-text-light_green group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                    
                    <h3 className="text-lg md:text-2xl font-bold text-text-light_green mb-1.5 md:mb-3">I'm an Intern</h3>
                    <p className="text-sm md:text-md text-text-light_green mb-3 md:mb-6 leading-relaxed">
                        Level up with real-world startup experience.
                    </p>
                    
                    <div className="space-y-2 text-[10px] md:text-sm text-text-light_green">
                        <div className="flex items-center">
                        Curated internship roles
                        </div>
                        <div className="flex items-center">
                        Hands-on learning resources
                        </div>
                        <div className="flex items-center">
                        1:1 mentorship access
                        </div>
                    </div>
                    </div>
                    
                    {selectedRole === 'intern' && (
                    <div className="absolute inset-0 bg-text-light_green bg-opacity-5 pointer-events-none"></div>
                    )}
                </div>

                {/* Startup Card */}
                <div 
                    className={`group relative overflow-hidden bg-text-light_green/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer ${
                    selectedRole === 'startup' ? 'border-text-green/10 ring-4 ring-text-green/10' : 'border-text-green/10 ring-text-green/10'
                    }`}
                    onClick={() => !loading && handleSelect('startup')}
                >
                    <div className="p-4 md:p-8">
                    <div className="flex items-center justify-between mb-3 md:mb-6">
                        <ArrowRight className="w-3 md:w-5 h-3 md:h-5 text-gray-400 group-hover:text-background-light group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                    
                    <h3 className="text-lg md:text-2xl font-bold text-background-light mb-1.5 md:mb-3">I'm a Startup</h3>
                    <p className="text-sm md:text-md text-background-light mb-3 md:mb-6 leading-relaxed">
                        Hire smart. Move fast. Build better.
                    </p>
                    
                    <div className="space-y-2 text-[10px] md:text-sm text-background-light">
                        <div className="flex items-center">
                        Post internships in minutes
                        </div>
                        <div className="flex items-center">
                        Access pre-vetted talent
                        </div>
                        <div className="flex items-center">
                        Simplify your hiring funnel
                        </div>
                    </div>
                    </div>
                    
                    {selectedRole === 'startup' && (
                    <div className="absolute inset-0 bg-text-green bg-opacity-5 pointer-events-none"></div>
                    )}
                </div>
                </div>

                {/* Loading State */}
                {loading && (
                <div className="text-center">
                    <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full shadow-2xl">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-text-green mr-3"></div>
                    <span className="text-text-green font-medium text-xs md:text-sm">
                        Setting up your personalized experience...
                    </span>
                    </div>
                </div>
                )}

                {/* Help Text */}
                {!loading && (
                <div className="text-center">
                    <p className="text-xs md:text-sm text-text-green font-medium">
                    Don't worry, you can always change your role later in your profile settings
                    </p>
                </div>
                )}
            </div>
        </div>
    );
}