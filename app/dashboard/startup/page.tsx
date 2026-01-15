"use client";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation"; // For App Router (Next.js 13+)
import { useEffect, useState } from "react";

export default function StartupDashboard() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            const {
                data: { user },
                error,
            } = await supabase.auth.getUser();

            if (error) {
                console.error("Error getting user:", error.message);
            }

            if (!user) {
                router.push("/auth/login");
            } else {
                setUser(user);
            }

            setLoading(false);
        };

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (event === 'SIGNED_OUT' || !session) {
                    setUser(null);
                    router.push("/auth/login");
                } else if (session) {
                    setUser(session.user);
                }
                setLoading(false);
            }
        );

        getUser();

        // Cleanup subscription on unmount
        return () => subscription.unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        setLoading(true);
        const { error } = await supabase.auth.signOut();
        
        if (error) {
            console.error("Error logging out:", error.message);
            setLoading(false);
        }
        // The onAuthStateChange listener will handle the redirect
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Welcome Founder!</h1>
            {user ? (
                <div className="bg-gray-100 p-4 rounded shadow w-full max-w-md text-center">
                    <h2 className="text-xl mb-2">Welcome, {user.email}!</h2>
                    <p className="mb-4">Your User ID: {user.id}</p>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-lg font-semibold mb-2">Founder Information</h2>
                    </div>
                    <button
                        onClick={handleLogout}
                        disabled={loading}
                        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
                    >
                        {loading ? 'Logging out...' : 'Logout'}
                    </button>
                </div>
            ) : (
                <div>User not found</div>
            )}
        </div>
    );
}