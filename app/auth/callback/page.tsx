"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { supabase } from "@/lib/supabaseClient"; // Use consistent client

export default function CallbackPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     const handleAuthCallback = async () => {
    //         try {
    //             // Handle the OAuth callback
    //             const { data, error } = await supabase.auth.getSession();
                
    //             if (error) {
    //                 console.error("Auth callback error:", error);
    //                 setError("Authentication failed");
    //                 setLoading(false);
    //                 return;
    //             }

    //             if (!data.session?.user) {
    //                 console.log("No session found, redirecting to login");
    //                 router.replace("/auth/login");
    //                 return;
    //             }

    //             const user = data.session.user;
                
    //             // Check if user already has a profile with role
    //             const { data: profile, error: profileError } = await supabase
    //                 .from("profiles")
    //                 .select("role, verified")
    //                 .eq("id", user.id)
    //                 .single();

    //             if (profileError && profileError.code !== 'PGRST116') {
    //                 // PGRST116 is "not found" error, which is expected for new users
    //                 console.error("Profile fetch error:", profileError);
    //                 setError("Failed to fetch user profile");
    //                 setLoading(false);
    //                 return;
    //             }

    //             if (!profile || !profile.role) {
    //                 // New user or user without role - redirect to select role
    //                 console.log("New user, redirecting to role selection");
    //                 router.replace("/select-role");
    //             } else if (!profile.verified) {
    //                 // User has role but not verified - redirect to verification
    //                 console.log("User needs verification");
    //                 router.replace(`/auth/verify/${profile.role}`);
    //             } else {
    //                 // Existing verified user - redirect to dashboard
    //                 console.log("Existing user, redirecting to dashboard");
    //                 router.replace(`/dashboard/${profile.role}`);
    //             }
    //         } catch (err) {
    //             console.error("Unexpected error:", err);
    //             setError("An unexpected error occurred");
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     handleAuthCallback();
    // }, [router]);

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <p className="text-red-500 mb-4">{error}</p>
                <button 
                    onClick={() => router.replace("/auth/login")}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Back to Login
                </button>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <p>Redirecting...</p>
        </div>
    );
}